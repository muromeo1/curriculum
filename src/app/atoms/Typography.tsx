import cn from "classnames";

interface TypographyProps {
  text: string;
}

const Headline = ({ text }: TypographyProps) => (
  <h1
    className={cn(
      "font-display text-4xl lg:text-6xl font-bold",
      "uppercase text-slate-100"
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
  <h1 className={cn("font-display text-2xl font-medium text-slate-300")}>
    {text}
  </h1>
);

const Typography = {
  Headline,
  Header,
  Body,
};

export default Typography;
