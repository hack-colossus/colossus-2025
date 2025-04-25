import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers"
// import Sponsors from "./components/Sponsors"
import PreviousHackathon from "./components/PreviousHackathon";
import HackathonWinners from "./components/HackathonWinners";
import FAQ from "./components/FAQ";
import RegisterButton from "./components/RegisterButton";
import Theme from "./components/Theme";
import TechnoExhibition from "./components/TechnoExhibiton";
import ShortlistedParticipants from "./components/Shortlisted";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HackathonWinners />
      <Theme />
      <ShortlistedParticipants />
      <TechnoExhibition />
      <Schedule />
      <Speakers />
      {/* <Sponsors /> */}
      <PreviousHackathon />
      <RegisterButton />
      <FAQ />
    </>
  );
}
