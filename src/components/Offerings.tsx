import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import offering1Image from '../assets/offering1.jpg';
import offering2Image from '../assets/offering2.jpg';
import offering3Image from '../assets/offering3.jpg';

const Offerings = () => {
    return (
        <Container>
            <Flex gap="2" direction="column" className="md:rounded-4xl p-6 md:p-10 bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]">
                <Heading size={{
                    initial: "6",
                    md: "8"
                }}>What we offer</Heading>
                <Text className="max-w-[90%] md:max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Flex gap="4" className="pt-4" direction={{
                    initial: "column",
                    md: "row"
                }}>
                    <Flex className="flex-1" direction="column">
                        <img width="100%" src={offering1Image} alt="Offering #1" />
                        <Heading size="3" className="pt-2">Offering #1</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                    <Flex  className="flex-1" direction="column">
                        <img width="100%" height="100%" src={offering2Image} alt="Offering #2" />
                        <Heading size="3" className="pt-2">Offering #2</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                    <Flex  className="flex-1" direction="column">
                        <img width="100%" height="100%" src={offering3Image} alt="Offering #3" />
                        <Heading size="3" className="pt-2">Offering #3</Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Offerings