import { Container, Flex, Heading, Skeleton, Text } from '@radix-ui/themes'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Schedule from './components/Schedule'

function App() {

  return (
    <>
      <Navbar />
      <Hero />

      <section>
        <Container className="pt-20">
          <Flex gap="2" direction="column">
            <Heading size="8">What I offer</Heading>
            <Text className="max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Flex gap="4" className="pt-4">
              <Flex height="480px" width="200px" className="flex-1" direction="column">
                <Skeleton width="100%" height="100%" />
                <Heading size="3" className="pt-2">Offering #1</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              </Flex>
              <Flex height="480px" width="200px" className="flex-1" direction="column">
                <Skeleton width="100%" height="100%" />
                <Heading size="3" className="pt-2">Offering #2</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              </Flex>
              <Flex height="480px" width="200px" className="flex-1" direction="column">
                <Skeleton width="100%" height="100%" />
                <Heading size="3" className="pt-2">Offering #3</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <Flex className="" gap="2" direction="column">
            <Heading size="8">Class Schedule</Heading>
            <Text className="max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            {/* <Skeleton className="mt-4" width="100%" height="680px" /> */}

            <Schedule />

          </Flex>
        </Container>
      </section>


      <Footer />
    </>
  )
}

export default App
