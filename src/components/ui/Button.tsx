import ButtonStyle from "@/styles/components/ui/Button.module.scss";

type Props = {
  text: string;
  mainClassName: "root";
  fontClassName: "fontMiddle";
  onClick: () => void;
};

export const Button = ({
  text,
  mainClassName,
  fontClassName,
  onClick,
}: Props) => {
  return (
    <button
      className={`${ButtonStyle[mainClassName]} ${ButtonStyle[fontClassName]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
