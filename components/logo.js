import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: scale(0.8);
    }
`

const Logo = () => {
    const catPawImage = `/images/cat-paw${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={catPawImage} width={20} height={20} alt="logo" />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        127.0.0.1
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo