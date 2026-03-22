import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Schedule from "./Schedule";

const Classes = () => {
    return (
        <Container className="px-4 md:px-0">
            <Flex className="" gap="2" direction="column">
                <Heading size={{
                    initial: "6",
                    md: "8"
                }}>Classes</Heading>
                <Text className="max-w-[90%] md:max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                <Schedule />

            </Flex>
        </Container>
    )
}

export default Classes