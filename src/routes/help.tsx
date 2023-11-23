import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const visible = { opacity: 1, transition: { duration: 2.5 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function Help() {
  return (
    <>
      <motion.div
        className={`pt-10 px-4 sm:px-10`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 1 } } }}
      >
        <motion.h2
          variants={itemVariants}
          className={`h2 mb-7 sm:mb-24 text-left pl-6 sm:pl-10`}
        >
          How can we
          <motion.span variants={itemVariants} className="text-blazeOrange-600">
            {' '}
            help
          </motion.span>
          ?
        </motion.h2>
        <motion.div variants={itemVariants}>
          <Accordion allowToggle>
            <AccordionItem borderTop={'none'}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" py={2}>
                    <h2 className={`h2`}>How to use</h2>
                  </Box>
                  <AccordionIcon boxSize={8} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" py={2}>
                    <h2 className={`h2`}>Contribute</h2>
                  </Box>
                  <AccordionIcon boxSize={8} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </>
  )
}
