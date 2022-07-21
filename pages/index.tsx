import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Container,
  Button,
  Box,
  Heading,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSeciton, BioYear } from '../components/profile/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layout/article'
import Image from 'next/image'
import Section from '../components/profile/secion'
import Paragraph from '../components/profile/paragraph'

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          my={6}
          display={'flex'}
          justifyContent='center'
        >
          {' '}
          Hello I&apos;m a aspiring full-stack developer in SUTD
        </Box>
        <Box display={{ md: 'flex' }} className='nes-text is-primary'>
          <Box flexGrow={1}>
            <Heading variant='page-title' as='h2'>
              Qiu Weihong
            </Heading>
            <p>
              Developer/ Fulltime student/ Photgrapher/ Sport enthusiast/ PC
              lover
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              w={{ base: '200px', md: '100px' }}
              h={{ base: '200px', md: '100px' }}
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <Image
                width={'100%'}
                height={'100%'}
                layout='responsive'
                objectFit='cover'
                src='/images/weihong.jpg'
                alt='Profile Image'
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            About Me
          </Heading>
          <Paragraph>
            Qiu Weihong is a term 5 ISTD student in SUTD, who is passionate
            about software enginerring and have picked up a few skills and
            working on a few projects currently. He is confident with Django,
            nodejs, react, and vue for web development and currently learning
            Spring Boot for Java.
          </Paragraph>
          <Paragraph>
            He is currently working on a quiz platform for the school&apos;s
            physics department build on django rest framework and vue. He has
            recently worked on a webapp called{' '}
            <NextLink href='/projects/sutdfolio'>
              <Link>SUTDfolio</Link>
            </NextLink>{' '}
            for the SUTD students to demostrate the fantastic projects that they
            have done during their school terms.{' '}
          </Paragraph>
          <Paragraph>
            He really enjoy software development because he can create really
            amazing features and products that impact people&apos;s life!
          </Paragraph>
          <Box display={'flex'} justifyContent='space-evenly' my={4}>
            <NextLink href='/posts'>
              <Button rightIcon={<ChevronRightIcon />}>My Posts</Button>
            </NextLink>
            <NextLink href='/projects'>
              <Button rightIcon={<ChevronRightIcon />}>My Projects</Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSeciton>
            <BioYear>1999</BioYear>
            Born in FuJian, China
          </BioSeciton>
          <BioSeciton>
            <BioYear>2011</BioYear>
            Came to Singapore to study
          </BioSeciton>
          <BioSeciton>
            <BioYear>2017</BioYear>
            Graduated from NanHua High School
          </BioSeciton>
          <BioSeciton>
            <BioYear>2019</BioYear>
            Graduated from Hwa Chong Insitiution with Hwa Chong Diploma with
            Distinciton
          </BioSeciton>
          <BioSeciton>
            <BioYear>2020 to Present</BioYear>
            Studying Computer Science and Design course in Singapore Univerisity
            of Technology and Design(SUTD)
          </BioSeciton>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            I Love
          </Heading>
          <Paragraph>
            Badminton, Basketball,{' '}
            <Link href='https://instagram.com/wh_snaps'>Photography</Link>,
            Cooking, Coding
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
