import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {  FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const links = ['About', 'Benefits', 'Contact', 'Support']

const Footer = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer
      id="footer"
      ref={ref}
      className="bg-[#181818] border-t border-white/10 text-gray-300"
    >
      <div className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12"
        >
          {/* Left: Brand */}
          <div className="flex items-center gap-4 min-w-[180px]">
            <div className="text-2xl font-bold text-white">Ravi Harod</div>
            <div className="hidden lg:block h-10 w-px bg-white/20" />
          </div>

          {/* Middle: Links and copy */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {links.map((link) => (
                <motion.a
                  key={link}
                  whileHover={{ color: '#00D4FF' }}
                  className="hover:text-primary cursor-pointer transition-colors"
                  href="#"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              © 2024 Alexander Chen. All rights reserved.
            </p>
          </div>

          {/* Right: Social + contact */}
          <div className="flex flex-col items-start lg:items-end gap-3 min-w-[220px]">
            <div className="flex items-center gap-4 text-gray-300">
              {[{icon:FaLinkedin, link:"https://www.linkedin.com/in/ravi-harod-1670a9238/"},{icon:FaGithub, link:"https://github.com/Raviharod"}, {icon:FaInstagram, link:"https://www.instagram.com/ravi_harod__/?hl=en"}].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href={Icon.link}
                  target='blank'
                  whileHover={{ y: -2, scale: 1.05, color: '#00D4FF' }}
                  className="p-2 rounded-full border border-white/10 hover:border-primary transition-colors"
                >
                  <Icon.icon size={14} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Email Me: raviharod7828@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
