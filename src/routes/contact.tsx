import { Input, Textarea, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import MotionButton from '../components/Button'

const visible = { opacity: 1, transition: { duration: 2.5 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function Contact() {
  return (
    <>
      <motion.div
        className={`pt-10 pl-10 pr-4 sm:pl-20`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 1 } } }}
      >
        <motion.h2 variants={itemVariants} className={`h2 mb-4 text-left`}>
          Feel like
          <motion.span variants={itemVariants} className="text-envy-400">
            {' '}
            reaching{' '}
          </motion.span>
          out?
        </motion.h2>
        <motion.h3 variants={itemVariants} className={`h3 text-left pl-12`}>
          we’d
          <motion.span
            variants={itemVariants}
            className="text-cornflower-lilac-300"
          >
            {' '}
            love{' '}
          </motion.span>
          to hear from you
        </motion.h3>
        {/* Form */}
        <motion.div variants={itemVariants} className={`mt-4 pr-10 sm:pr-20`}>
          <VStack spacing={4} alignItems={'flex-start'}>
            <Input
              placeholder="name"
              type="text"
              backgroundColor={'white'}
              focusBorderColor="#79AC9C"
            />
            <Input
              placeholder="email"
              type="email"
              backgroundColor={'white'}
              focusBorderColor="#79AC9C"
            />
            <Textarea
              rows={6}
              placeholder="message"
              backgroundColor={'white'}
              focusBorderColor="#79AC9C"
            />
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              size="sm"
            >
              Send
            </MotionButton>
          </VStack>
        </motion.div>
      </motion.div>
    </>
  )
}
