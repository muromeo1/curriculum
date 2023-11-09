"use client";

import PersonalData from "../molecules/PersonalData";
import Section from "../atoms/Section";
import ClickablePanel from "../atoms/ClickablePanel";
import { useState } from "react";
import AboutMeModal from "../molecules/AboutMeModal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AboutMeModal open={open} setOpen={setOpen} />

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
                setOpen(true);
              }}
            />
            <ClickablePanel
              text="Technologies"
              description="Stacks that I'm familiar with"
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
