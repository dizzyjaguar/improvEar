import { motion } from 'framer-motion'

const visible = { opacity: 1, transition: { duration: 2.5 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function Donate() {
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
          className={`h2 mb-7 sm:mb-24 text-left`}
        >
          Support my
          <motion.span variants={itemVariants} className="text-envy-400">
            {' '}
            creative{' '}
          </motion.span>
          engineering
        </motion.h2>

        <motion.div
          className={`h1 text-cornflower-lilac-300 mb-7 sm:mb-10 text-center `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a
            href="https://www.paypal.com/donate/?business=7B5V5AY4YSPGC&no_recurring=0&item_name=Thanks+for+supporting+me+and+my+creative+projects%21+%3A%29&currency_code=USD"
            target="_blank"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className={`ml-24 underline hover:cursor-pointer hover:opacity-50`}
          >
            Donate
          </motion.a>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className={`h2 mb-7 pl-16 sm:mb-24 text-left`}
        >
          :)
        </motion.h2>
      </motion.div>
    </>
  )
}
