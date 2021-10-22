import LinkStyle from "@/styles/components/ui/Link.module.scss";
import NextLink from "next/link";

type Props = {
  text: string;
  href: string;
  className: "root";
};

export const Link = ({ text, href, className }: Props) => {
  return (
    <NextLink href={href} passHref>
      <a className={LinkStyle[className]}>{text}</a>
    </NextLink>
  );
};
