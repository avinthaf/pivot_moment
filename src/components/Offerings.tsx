import { Container, Flex, Heading, Text, Skeleton } from "@radix-ui/themes";

const Offerings = () => {
    return (
        <Container>
            <Flex gap="2" direction="column" className="md:rounded-4xl p-6 md:p-10 bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]">
                <Heading size={{
                    initial: "6",
                    md: "8"
                }}>What I offer</Heading>
                <Text className="max-w-[90%] md:max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Flex gap="4" className="pt-4" direction={{
                    initial: "column",
                    md: "row"
                }}>
                    <Flex height="480px" className="flex-1" direction="column">
                        <Skeleton width="100%" height="100%" />
                        <Heading size="3" className="pt-2">Offering #1</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                    <Flex height="480px" className="flex-1" direction="column">
                        <Skeleton width="100%" height="100%" />
                        <Heading size="3" className="pt-2">Offering #2</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                    <Flex height="480px" className="flex-1" direction="column">
                        <Skeleton width="100%" height="100%" />
                        <Heading size="3" className="pt-2">Offering #3</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Offerings