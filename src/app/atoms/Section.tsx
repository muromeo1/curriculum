import cn from "classnames";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className={cn("h-screen w-full flex gap-3 lg:px-[100px]", className)}>
      {children}
    </div>
  );
};

export default Section;
