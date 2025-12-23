import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useScroll } from 'framer-motion';

const Hero = () => {
  
  const {scrollY} = useScroll()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-accent-purple font-semibold text-sm tracking-wider">
                Ravi Harod
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">HEY! I'M RAVI HAROD,</span>
              <br />
              <span className="gradient-text">I'M A FULL STACK DEVELOPER</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              A passionate MERN stack developer and Computer Science undergraduate, experienced in building full-stack web applications with modern technologies. I’m actively seeking opportunities to learn, grow, and contribute to real-world projects as a developer.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Get In Touch
              </motion.button>

              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, color: '#0077b5',link:"https://www.linkedin.com/in/ravi-harod-1670a9238/" },
                  { icon: FaInstagram, color: '#E4405F', link:"https://www.instagram.com/ravi_harod__/?hl=en" },
                  { icon: FaGithub, color: '#1DA1F2' , link:"https://github.com/Raviharod"}
                ].map(({ icon: Icon, color, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target='_blank'
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="text-white text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20" />
                <img
                  src="/images/myImage.png"
                  alt="Alexander Chen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-32 h-32 border-2 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-accent-purple/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

