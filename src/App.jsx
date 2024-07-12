import "./App.css";
import Application from "./components/Application/Application";
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import Enterprise from "./components/Enterprise/Enterprise";
import Footer from "./components/Footer/Footer";
import FooterEnd from "./components/Footer/FooterEnd";
import Hero from "./components/Hero/Hero";
import IndustrySolutions from "./components/IndustrySolutions/IndustrySolutions";
import Navbar from "./components/Navbar/Navbar";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Workflow from "./components/Workflow/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <WhatWeOffer />
      <Workflow />
      <Collaboration />
      <Enterprise />
      <Application />
      <IndustrySolutions />
      <Footer />
      <FooterEnd />
    </>
  );
}

export default App;
