import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
// import { StaticImageData } from 'next/image'
export const Title = ({ children }: { children: React.ReactNode }) => (
  <Box mt={4}>
    <NextLink href='/projects'>
      <Link>Projects</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
)
export const Meta = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
)
