import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useDarkMode } from '../../lib/use-dark-mode'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const toggleTheme = () => {
    toggleDarkMode()
    toggleColorMode()
  }
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label='Toggle theme'
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={!isDarkMode ? <MoonIcon /> : <SunIcon />}
          onClick={toggleTheme}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
export default ThemeToggleButton
