import { Container, Flex, Heading, Skeleton, Text } from "@radix-ui/themes";

const About = () => {
    return (
        <Container>
            <Flex width="100%" gap="8" justify="center" align="center">
                <Flex className="flex-1">
                    <Skeleton width="600px" height="400px" className="flex-1" />
                </Flex>

                <Flex direction="column" gap="2">
                    <Heading size="8">Hi, I'm Tim.</Heading>
                    <Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Flex>
            </Flex>
        </Container>
    );
};

export default About;