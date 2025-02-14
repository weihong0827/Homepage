import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../profile/grid-items'

const variant = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({
  children,
  title
}: {
  children: React.ReactNode
  title?: string
}) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variant}
    transition={{ duration: 0.4, type: 'easInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Qiu Weihong</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)
export default Layout
