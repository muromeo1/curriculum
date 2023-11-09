import Typography from "./Typography";
import cn from "classnames";

interface ClickablePanelProps {
  text: string;
  description: string;
  onClick?: () => void;
}

const ClickablePanel = ({
  text,
  description,
  onClick,
}: ClickablePanelProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/30",
        "h-full my-2 w-full rounded-2xl px-3"
      )}
    >
      <Typography.Body text={text} />
      <Typography.Description text={description} />
    </button>
  );
};

export default ClickablePanel;
