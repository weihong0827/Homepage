import Head from "next/head"
import Navbar from '../profile/navbar'
import {Box,Container} from "@chakra-ui/react"
import {NextRouter} from "next/router"
const Main= ({children,router}:{ children: React.ReactNode,router:NextRouter}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Qiu Weihong Homepage</title>
        
      </Head>
      <Navbar path={router.asPath}/>
      <Container maxW="container.md" pt={14}>
        {children}
      
      </Container>
    </Box>
  ) 
  
}
export default Main
