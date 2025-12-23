import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '5+', label: 'Projects' },
    { value: '1+', label: 'Years' },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="about-me" ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-purple/30 blur-xl" />
              <img
                src="/images/about.png"
                alt="About Alexander"
                className="relative w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-accent-purple font-semibold text-sm tracking-wider">
                ABOUT ME
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              <span className="text-white">I AM AVAILABLE FOR</span>
              <br />
              <span className="gradient-text">MERN STACK DEVELOPMENT</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
             I’m a passionate MERN stack developer who loves building scalable, secure, and user-friendly web applications. With hands-on experience in both frontend and backend development, I enjoy turning ideas into real-world products using modern web technologies.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 my-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
                >
                  <div className="text-primary text-3xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                href="https://drive.google.com/uc?export=download&id=1jcBBoLG-HeeHBKubVxMJMzU8OkI4ZUdo"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

