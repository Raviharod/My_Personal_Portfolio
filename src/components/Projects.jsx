import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'AI Powered Healthcare Advisor',
      category: 'Health And Fitness',
      image: '/images/healthcare.png',
      description: 'Allow patient to analyze symptoms and direct video consultation with doctors',
      link:"https://healthcare-advisor-frontend-updated.vercel.app/"
    },
    {
      title: 'Hotel Booking Website',
      category: 'Travel & Tourism',
      image: '/images/hotelBooking.png',
      description: 'A full-stack MERN hotel booking platform with secure authentication, hotel listing management, bookings, and AI-powered customer support.',
      link:"https://wanderlust-eight-woad.vercel.app/"
    },
    {
      title: 'Amazon Home Page',
      category: 'E-commerce',
      image: '/images/amazon.png',
      description: 'Amazon home page clone with HTML and CSS',
      link:"https://amazon-home-page-xm9h.onrender.com/"
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const handleProjectClick = (link)=>{
    // console.log("clicked on project")
    window.open(link, '_blank')
  }

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-accent-purple font-semibold text-sm tracking-wider">
              MY WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              RECENT PROJECTS
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={()=>handleProjectClick(project.link)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-xl">→</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.category}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

