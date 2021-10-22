import { Button } from "@/components/ui/Button";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import FirstViewStyle from "@/styles/pages/Index/FirstView.module.scss";

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
