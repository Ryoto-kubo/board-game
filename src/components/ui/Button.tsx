import ButtonStyle from "@/styles/components/ui/Button.module.scss";

type Props = {
  text: string;
  className: "root";
};

export const Button = ({ text, className }: Props) => {
  return <button className={ButtonStyle[className]}>{text}</button>;
};
