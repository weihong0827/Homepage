import type { NextPage } from 'next'
import NextLink from 'next/link'
import IndexPageHead from '../components/layout/indexHeader'
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
    <>
      <IndexPageHead />
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
            Hello I&apos;m an aspiring full-stack developer in SUTD
          </Box>
          <Box display={{ md: 'flex' }} className='nes-text is-primary'>
            <Box flexGrow={1}>
              <Heading variant='page-title' as='h2'>
                Qiu Weihong
              </Heading>
              <p>
                Developer/ Fulltime student/ Photographer/ Sport enthusiast/ PC
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
              Qiu Weihong is currently in Term 7 of his ISTD studies at SUTD, where he continues to deepen his expertise in software engineering. Proficient in a variety of web development technologies, including Django, Node.js, React, and Vue, Weihong is also expanding his skill set to include Spring Boot for Java.
            </Paragraph>
            {/* <Paragraph> */}
            {/*   He is currently working on a quiz platform for the school&apos;s */}
            {/*   physics department build on django rest framework and vue. He has */}
            {/*   recently worked on a webapp called{' '} */}
            {/*   <NextLink href='/sutdfolio'> */}
            {/*     <Link>SUTDfolio</Link> */}
            {/*   </NextLink>{' '} */}
            {/*   for the SUTD students to demostrate the fantastic projects that */}
            {/*   they have done during their school terms.{' '} */}
            {/* </Paragraph> */}
            <Paragraph>
              Presently, Weihong is leading the development of Qbot, a Teams bot designed to enhance educational experiences through generative AI. Engineered atop the open-source project Quivr, Qbot possesses the capability to generate answers based on a localized knowledge base. The platform also encourages collaborative learning by allowing students to contribute their versions of answers, which are integrated into the existing knowledge base upon instructor approval.
            </Paragraph>
            <Paragraph>
              In addition to his project-based contributions, Weihong is currently delving into the domains of distributed systems and network security, thereby broadening his technical acumen. He is also exploring the transformative possibilities offered by generative AI in various applications.
            </Paragraph>
            <Paragraph>
              He finds immense satisfaction in seeing projects evolve from mere concepts to tangible solutions that solve real-world problems. What fuels his enthusiasm for software development is the opportunity to craft impactful features and products that significantly improve the quality of people&apos;s lives.
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
              <BioYear>2022</BioYear>
              Exchange in Tampera University, Finland
            </BioSeciton>
            <BioSeciton>
              <BioYear>2023</BioYear>
              Intern at Reluvate Technologies
            </BioSeciton>
            <BioSeciton>
              <BioYear>2023</BioYear>
              Summer Program in University of California, Berkeley
            </BioSeciton>

            <BioSeciton>
              <BioYear>2020 to Present</BioYear>
              Studying Computer Science and Design course in Singapore
              Univerisity of Technology and Design(SUTD)
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
    </>
  )
}
export default Home
