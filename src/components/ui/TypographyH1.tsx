import TypographyH1Style from "@/styles/components/ui/TypographyH1.module.scss";

type Props = {
  text: string;
  className: "root";
};

export const TypographyH1 = ({ text, className }: Props) => {
  return <h1 className={TypographyH1Style[className]}>{text}</h1>;
};
