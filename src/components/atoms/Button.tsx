import ButtonStyle from "@/styles/components/atoms/Button.module.scss";

type Props = {
  text: string;
  className: "root";
};

export const Button = ({ text, className }: Props) => {
  return <button className={ButtonStyle[className]}>{text}</button>;
};
