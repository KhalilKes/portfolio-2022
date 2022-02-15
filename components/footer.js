
import { Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Khalil Kessa made with ❤️ and   
        <Link ml={2} color='teal.500' href='https://chakra-ui.com' isExternal>
            Chakra Design system <ExternalLinkIcon mx='2px' />
        </Link> 
        <Link color='teal.500' href='https://nextjs.org/' isExternal>
            NextJs <ExternalLinkIcon mx='2px' />
        </Link> 
    </Box>
  )
}

export default Footer