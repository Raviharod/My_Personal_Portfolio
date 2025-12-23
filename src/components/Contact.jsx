import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
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
                I’m a Full stack developer looking to join a team where I can grow, contribute, and work on real-world applications. Let’s connect.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div variants={item} className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                  />
                </motion.div>
                <motion.div variants={item} className="space-y-2">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                  />
                </motion.div>
                <motion.div variants={item} className="space-y-2">
                  <label className="text-sm text-gray-400">Your Message</label>
                  <textarea
                    rows="4"
                    placeholder="Feel free to share job details, role information, or any opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition resize-none"
                  />
                </motion.div>
              </div>

              <motion.button
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 50px rgba(0, 212, 255, 0.35)'
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold tracking-wide shadow-lg shadow-primary/30"
              >
                Send Message
              </motion.button>
            </motion.div>
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

