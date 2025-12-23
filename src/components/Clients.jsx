import { motion } from 'framer-motion'

const Clients = () => {
  const logos = [
    { name: 'LOGOIPSUM', shape: 'circle' },
    { name: 'LOGOIPSUM', shape: 'triangle' },
    { name: 'LOGOIPSUM', shape: 'square' },
    { name: 'LOGOIPSUM', shape: 'circle' },
    { name: 'LOGOIPSUM', shape: 'diamond' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-gray-400 text-lg font-semibold flex items-center gap-2"
            >
              <div className={`w-3 h-3 bg-primary/50 ${
                logo.shape === 'circle' ? 'rounded-full' :
                logo.shape === 'triangle' ? 'transform rotate-45' :
                logo.shape === 'square' ? 'rounded' :
                'transform rotate-45'
              }`} />
              {logo.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Clients


