import { Button } from "@/components/atoms/Button";
import { TypographyH1 } from "@/components/atoms/TypographyH1";
import FirstViewStyle from "@/styles/components/molecules/FirstView.module.scss";

export const FirstView = () => {
  return (
    <div className={FirstViewStyle.root}>
      <TypographyH1 text="Welcome Board Game!" className="root" />
      <div className={FirstViewStyle.buttonWrapper}>
        <Button text="Start" className="root" />
      </div>
    </div>
  );
};
