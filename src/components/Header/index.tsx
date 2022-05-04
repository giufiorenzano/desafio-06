import { Flex, Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex
            w="100%"
            h="20"
            align="center"
            justifyContent="center"
        >
            <Image src="/assets/Logo.png" alt="Logo" />
        </Flex>
    )
}