"use client";

import { useState } from "react";

import PersonalData from "../molecules/PersonalData";
import Section from "../atoms/Section";
import ClickablePanel from "../atoms/ClickablePanel";

import AboutMeModal from "../molecules/AboutMeModal";
import TechnologiesModal from "../molecules/TechnologiesModal";

const Hero = () => {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [openTechnologies, setOpenTechnologies] = useState(false);
  const [openExperiences, setOpenExperiences] = useState(false);

  return (
    <>
      <AboutMeModal open={openAboutMe} setOpen={setOpenAboutMe} />

      <TechnologiesModal
        open={openTechnologies}
        setOpen={setOpenTechnologies}
      />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2">
          <PersonalData />
        </div>

        <div className="lg:w-1/2">
          <Section className="bg-zinc-900 justify-center items-center flex-col py-10 px-5">
            <ClickablePanel
              text="About me"
              description="Hobbies and interests"
              onClick={() => {
                setOpenAboutMe(true);
              }}
            />
            <ClickablePanel
              text="Technologies"
              description="Stacks that I'm familiar with"
              onClick={() => {
                setOpenTechnologies(true);
              }}
            />
            <ClickablePanel
              text="Experiences"
              description="A brief summary of my past experiences"
            />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Hero;
