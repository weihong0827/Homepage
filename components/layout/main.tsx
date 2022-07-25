import Navbar from '../profile/navbar'
import { Box, Container } from '@chakra-ui/react'
import { NextRouter } from 'next/router'
const Main = ({
  children,
  router
}: {
  children: React.ReactNode
  router: NextRouter
}) => {
  return (
    <Box as='main' pb={8}>
      <Navbar path={router.asPath} />
      <Container maxW='container.lg' pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main
