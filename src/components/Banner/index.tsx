import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const Banner = () => {
    return (
        <Flex
            w="100%"
            h="368px"
            alignItems="baseline"
            justifyContent="start"
        >

            <Box bgImg="url('/assets/Background.png')" bgPos="top"
                bgRepeat="no-repeat" w="100%" h="100%" display="flex"  justifyContent="space-around" alignContent="center"> 
                
                <Flex direction="column" justifyContent="space-around" mx="16">
                    <Heading as="h1" size="2xl" color="gray.50" fontWeight="600">5 continentes, infinitas possibilidades.
                    </Heading>
                    <Text size="20px" color="gray.100">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Flex>
            
                <Image src="/assets/Airplane.png" />
            </Box>

        </Flex>
    )
}