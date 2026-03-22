import { Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import heroImage from '../assets/hero.jpg';


const Hero = () => {
    return (
        <Flex className="h-[100dvh] md:h-[85dvh] py-20 sm:py-25 md:py-30 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <Container height="100%" className="relative z-10 text-white">
                <Flex height="100%" direction="column" justify="end" gap="4" p={{
                    initial: "4",
                    md: "0",
                    xl: "0",
                }}>
                    <Heading size={{
                        initial: "8",
                        md: "9",
                    }}>This is <br className="block sm:hidden" /><i><span style={{ color: 'var(--accent-9)' }}>your</span></i> moment.</Heading>
                    <Text style={{ maxWidth: '50dvw' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    <Flex>
                        <Button size="3" className="bg-white text-gray-900 hover:bg-white/90 text-xs sm:text-sm md:text-base">Book Now</Button>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Hero;