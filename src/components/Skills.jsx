import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiRender
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#f97316' },
  { name: 'CSS', icon: FaCss3Alt, color: '#3b82f6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#facc15' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#22d3ee' },
  { name: 'Framer Motion', icon: SiFramer, color: '#a855f7' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7c3aed' },
  { name: 'React', icon: FaReact, color: '#38bdf8' },
  { name: 'Node.js', icon: FaNodeJs, color: '#22c55e' },
  { name: 'Express', icon: SiExpress, color: '#e5e7eb' },
  { name: 'MongoDB', icon: SiMongodb, color: '#16a34a' },
  { name: 'SQL', icon: SiMysql, color: '#0ea5e9' },
  { name: 'Python', icon: FaPython, color: '#fbbf24' },
  { name: 'Git', icon: FaGitAlt, color: '#f97316' },
  { name: 'GitHub', icon: FaGithub, color: '#e5e7eb' },
  { name: 'Vercel', icon: SiVercel, color: '#e5e7eb' },
  { name: 'Render', icon: SiRender, color: '#22d3ee' }
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-[#0c0f1f]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Side label */}
          <div className="flex lg:flex-col items-center lg:items-start gap-4 min-w-[90px]">
            <div className="w-1 h-10 lg:w-12 lg:h-1 bg-primary" />
            <div className="text-2xl font-bold text-primary uppercase tracking-[0.2em] rotate-0 lg:-rotate-90 origin-left">
              Skills
            </div>
          </div>

          <div className="flex-1 space-y-12">
            {/* Heading */}
            <div className="text-center lg:text-left space-y-4">
              <p className="text-amber-400 font-semibold text-lg uppercase tracking-wide">
                What I Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
              Building scalable full-stack web applications
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto lg:mx-0">
              I create responsive user interfaces and powerful backend systems using modern JavaScript technologies and the MERN stack.
              </p>
            </div>

            {/* Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, idx) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    variants={card}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      boxShadow: '0 20px 45px rgba(0, 212, 255, 0.15)'
                    }}
                    className="group relative bg-white/5 rounded-2xl p-5 border border-white/10 overflow-hidden"
                  >
                    {/* Glow ring */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="absolute -inset-20 bg-primary/10 blur-3xl" />
                    </div>

                    <div className="relative flex flex-col items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <Icon
                          className="text-2xl"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {skill.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {idx < 4
                            ? 'Frontend'
                            : idx < 8
                              ? 'Engineering'
                              : idx < 12
                                ? 'Backend & Data'
                                : 'Tools'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

