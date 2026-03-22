import { Button, Container, Flex, Heading, Skeleton, Text } from "@radix-ui/themes";


const Hero = () => {
    return (
        <Flex className="h-[70dvh] pt-30 bg-gradient-to-b from-[#F7FAF7] via-[#F0FDF4] to-[#DCFCE7]">
            <Container>
                <Flex gap="8" align="center">
                    <Flex direction="column" gap="4">
                        <Heading size="8">Hero Tagline Goes Here</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                        <Flex>
                            <Button size="3">Book Now</Button>
                        </Flex>
                    </Flex>
                    <Flex>
                        <Skeleton height="480px" width="480px" className="h-full" />
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Hero;