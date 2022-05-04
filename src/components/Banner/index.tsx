import { Box, Flex, Image } from "@chakra-ui/react"

export const Banner = () => {
    return (
        <Flex
            w="100%"
            h="368px"
        >

            <Box bgImg="url('/assets/Background.png')" bgPos="center"
                bgRepeat="no-repeat" />

        </Flex>
    )
}