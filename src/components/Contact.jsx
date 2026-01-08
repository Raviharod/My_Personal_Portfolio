import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const formRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // EmailJS configuration
      // You'll need to replace these with your EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      console.log(serviceId, templateId, publicKey)
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Portfolio Owner' // Your name
        },
        publicKey
      )

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-[#0c0f1f] to-[#0a0c1a]"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Form card */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative bg-black/60 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* glow */}
            <div className="absolute -left-20 top-10 w-60 h-60 bg-amber-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -right-16 bottom-10 w-48 h-48 bg-primary/20 blur-3xl pointer-events-none" />

            <motion.form
              ref={formRef}
              variants={container}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              onSubmit={handleSubmit}
              className="relative space-y-6"
            >
              <div className="space-y-2">
                <p className="text-primary font-semibold uppercase tracking-wide">
                  Let&apos;s talk
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  I&apos;m open to opportunities and ready to contribute
                </h3>
                <p className="text-gray-400 max-w-xl">
                I'm a Full stack developer looking to join a team where I can grow, contribute, and work on real-world applications. Let's connect.
                </p>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}

              <div className="space-y-4">
                <motion.div variants={item} className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                  />
                </motion.div>
                <motion.div variants={item} className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                  />
                </motion.div>
                <motion.div variants={item} className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Feel free to share job details, role information, or any opportunity..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition resize-none"
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                variants={item}
                disabled={isLoading}
                whileHover={!isLoading ? {
                  scale: 1.03,
                  boxShadow: '0 20px 50px rgba(0, 212, 255, 0.35)'
                } : {}}
                whileTap={!isLoading ? { scale: 0.97 } : {}}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold tracking-wide shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Visual / image side */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* blob background */}
              <motion.div
                className="absolute inset-0 bg-amber-400/80 rounded-[50%_40%_60%_45%] blur-xl"
                animate={{
                  borderRadius: [
                    '50% 40% 60% 45%',
                    '45% 55% 50% 60%',
                    '55% 45% 60% 50%',
                    '50% 40% 60% 45%'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative overflow-hidden rounded-[45%_55%_50%_50%] border-4 border-amber-300/70 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/images/ravi.jpeg"
                  alt="Contact portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating dots */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-8 -left-4 w-10 h-10 rounded-full bg-primary/40"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

