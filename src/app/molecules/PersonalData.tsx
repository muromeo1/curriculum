import Image from "next/image";
import cn from "classnames";

import Typography from "@/app/atoms/Typography";
import Section from "@/app/atoms/Section";
import SociaMediaIcon from "@/app/atoms/SocialMediaIcon";

const PersonalData = () => {
  return (
    <Section
      className={cn(
        "bg-gradient-to-b from-slate-800 to-cyan-900",
        "justify-center items-center text-center flex-col"
      )}
    >
      <div className="w-full flex justify-center">
        <Image
          className="rounded-full border-4 p-1 border-cyan-400 mb-10"
          src="/photo.jpg"
          width={300}
          height={700}
          alt="Profile Picture"
        />
      </div>

      <Typography.Header text="Hello, I'm" />

      <div className="mt-1">
        <Typography.Headline text="Murilo Romeo" />
        <Typography.Body text="Software Engineer" />
      </div>

      <div className="mt-12 flex flex-row gap-7 justify-center">
        <SociaMediaIcon type="linkedin" />
        <SociaMediaIcon type="github" />
        <SociaMediaIcon type="instagram" />
      </div>
    </Section>
  );
};

export default PersonalData;
