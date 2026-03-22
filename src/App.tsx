import { Container, Flex, Heading, Skeleton, Text } from '@radix-ui/themes'
import './App.css'
import { motion } from "motion/react";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Schedule from './components/Schedule'
import About from './components/About';
import NewsletterSignup from './components/NewsletterSignup';
import Offerings from './components/Offerings';
import Classes from './components/Classes';

function App() {

  return (
    <motion.div
    // initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -20 }}
    // transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Navbar />
      <Hero />

      <section className="pt-20">
        <About />
      </section>

      <section className="pt-20">
        <Offerings />
      </section>

      <section className="pt-20">
        <Classes />
      </section>

      <section className="pt-20">
        <NewsletterSignup />
      </section>

      <Footer />
    </motion.div>
  )
}

export default App
