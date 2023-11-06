import PersonalData from "../molecules/Hero/PersonalData";
import Section from "../atoms/Section";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-1/2">
        <PersonalData />
      </div>

      <div className="lg:w-1/2">
        <Section className="bg-zinc-900">something</Section>
      </div>
    </div>
  );
};

export default Hero;
