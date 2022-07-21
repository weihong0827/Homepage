import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { Transition } from 'framer-motion'
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({
  children,
  delay = 0
}: {
  children: React.ReactNode
  delay: number
}) => {
  const transition: Transition = {
    duration: 0.8,
    delay: delay
  }

  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transitionDuration={'0.8'}
      transitionDelay={delay.toString()}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}
export default Section
