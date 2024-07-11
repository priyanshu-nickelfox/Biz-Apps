import "./App.css";
import Application from "./components/Application/Application";
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import Enterprise from "./components/Enterprise/Enterprise";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import IndustrySolutions from "./components/IndustrySolutions/IndustrySolutions";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import Workflow from "./components/Workflow/Workflow";

function App() {
  return (
    <>
      <Hero />
      <Benefits />
      <WhatWeOffer />
      <Workflow />
      <Collaboration />
      <Enterprise />
      <Application />  
      <IndustrySolutions />
    </>
  );
}

export default App;
