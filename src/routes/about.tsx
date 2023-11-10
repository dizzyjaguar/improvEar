import { motion } from 'framer-motion'

const visible = { opacity: 1, transition: { duration: 2.5 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function About() {
  return (
    <>
      <motion.div
        className={`pt-10 pl-10 pr-4 sm:pl-20`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 1 } } }}
      >
        <motion.h2
          variants={itemVariants}
          className={`h2 mb-7 sm:mb-10 text-left`}
        >
          ImprovEar is a tool for musicians <br /> who want to improve their{' '}
          <motion.span
            variants={itemVariants}
            className="text-cornflower-lilac-300"
          >
            ear
          </motion.span>
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className={` pl-8 sm:pl-16 h3 text-left`}
        >
          Inspired by{' '}
          <motion.span variants={itemVariants} className="text-calico-300">
            beautiful
          </motion.span>{' '}
          devices <br /> that exist in the physical world.
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className={`mt-5 md:mt-10 quote md:w-2/3`}
        >
          “Music is your own experience, your own thoughts, your wisdom. If you
          don’t live it, it won’t come out of your horn. They teach you there’s
          a boundary line to music. But, man, there’s no boundary line to art” –
          Charlie Parker
        </motion.p>
      </motion.div>
    </>
  )
}
