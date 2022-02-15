import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import DarkLightToggleButton from './darklight-toggle-button'
  
const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          _target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
}

  
const Navbar = props => {
  const { path } = props  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
  
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
           
            <LinkItem
              _target="_blank"
              href="https://github.com/KhalilKes"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              Github profile
            </LinkItem>
            <LinkItem
              _target="_blank"
              href="https://www.linkedin.com/in/khalil-kessa-222325142/"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoLinkedin />
              LinkedIn profile
            </LinkItem>
          </Stack>
  
          <Box flex={1} align="right">
            <DarkLightToggleButton />


            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem
                    as={Link}
                    href="https://github.com/KhalilKes"
                  >
                    Visit my Github
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="https://www.linkedin.com/in/khalil-kessa-222325142/"
                  >
                    Visit my LinkedIn
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    )
}
 
export default Navbar