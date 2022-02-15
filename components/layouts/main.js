import Head from 'next/head'
import Navbar  from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as ="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Khalil's portfolio" />
                <meta name="author" content="Khalil Kessa" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Shirokhalil" />
                <meta name="twitter:creator" content="@Shirokhalil" />
                <meta property="og:site_name" content="Khalil's portfolio" />
                <meta property="og:type" content="website" />
                <title>Khalil Kessa | CraftShop</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg.md" pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main