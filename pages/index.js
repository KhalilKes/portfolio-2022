import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }} mt={6}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Khalil Kessa
          </Heading>
          <p>Web ForgeMaster / Java blacksmith</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            src="/images/kk.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Whoami
        </Heading>
        <Paragraph>
          Moroccan Full-Stack web developper, passionate about creating and solving real-life problems through code.
          From planning, coding to deploying, all for one and one for all :v  
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          ls /path
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Khouribga, Morocco.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Baccalaureate in Maths -A- Khouribga, Morocco
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Bachelor in economics and management Khouribga, Morocco
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Studied Web Development in Simplon Youssoufia, Morocco
        </BioSection>
        <BioSection>
          <BioYear>2020 - present</BioYear>
          Works in Pragmatic Consulting as Java Consultant
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ls /technologies
        </Heading>
        <Paragraph>
          Java, Javascript, Bash scripting, spring framework, Angular, Docker, Git, Linux administration 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ls /hobbies
        </Heading>
        <Paragraph>
          Drawing, Movies, Music, Video games, Cooking, Reading Manga/Manhua 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ls /socials
        </Heading>
        <List>
        <ListItem>
            <Link href="https://www.linkedin.com/in/khalil-kessa-222325142/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Khalil Kessa
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/KhalilKes" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @KhalilKes
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Shirokhalil" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Shirokhalil
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/khalilspringbootapplication/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @khalilspringbootapplication
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'