import Hero from "./components/Hero"
import About from "./components/About"
import Schedule from "./components/Schedule"
// import Speakers from "./components/Speakers"
// import Sponsors from "./components/Sponsors"
import PreviousHackathon from "./components/PreviousHackathon"
import FAQ from "./components/FAQ"
import RegisterButton from "./components/RegisterButton"
import Theme from "./components/Theme"
// import Colosseum from "./components/Colosseum"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Theme  />
      <Schedule />
      {/* <Speakers /> */}
      {/* <Sponsors /> */}
      <PreviousHackathon />
      <RegisterButton />
      <FAQ />
    </>
  );
}

