import cn from "classnames";

interface TypographyProps {
  text?: string;
  children?: React.ReactNode;
}

const Headline = ({ text }: TypographyProps) => (
  <h1
    className={cn(
      "font-display text-4xl lg:text-6xl",
      "font-bold uppercase text-slate-100"
    )}
  >
    {text}
  </h1>
);

const Header = ({ text }: TypographyProps) => (
  <h1 className={cn("font-display text-3xl font-normal text-slate-400")}>
    {text}
  </h1>
);

const Body = ({ text }: TypographyProps) => (
  <h1
    className={cn(
      "font-display text-2xl uppercase",
      "font-medium text-slate-300"
    )}
  >
    {text}
  </h1>
);

const Description = ({ text, children }: TypographyProps) => (
  <h1 className={cn("font-display text-lg font-thin text-slate-300")}>
    {text || children}
  </h1>
);

const Typography = {
  Headline,
  Header,
  Body,
  Description,
};

export default Typography;
