import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
    </>
  )
}

export default App