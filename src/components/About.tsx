import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import MuxPlayer from '@mux/mux-player-react';

const About = () => {
    return (
        <Container>
            <Flex
                width="100%"
                gap="8"
                justify="center"
                align="center"
                direction={{
                    initial: "column",
                    md: "row"
                }}
                px={{
                    initial: "4",
                    md: "0"
                }}
            >
                <Flex
                    direction="column"
                    gap="2"
                    className="order-1 md:order-2 flex-1 md:basis-1/2"
                >
                    <Heading size={{
                        initial: "6",
                        md: "8"
                    }}>Hi, I'm Tim.</Heading>
                    <Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Flex>

                <Flex
                    className="flex-1 order-2 md:order-1 md:basis-1/2"
                >
                    <MuxPlayer
                        src=""
                        metadata={{
                            video_title: "About Tim",
                            viewer_user_id: "user-123"
                        }}
                        style={{ width: '100%', height: '384px' }}
                        className="rounded-lg flex-1"
                    />
                </Flex>
            </Flex>
        </Container>
    );
};

export default About;