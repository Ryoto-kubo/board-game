import { Link } from "@/components/ui/Link";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import FirstViewStyle from "@/styles/components/pages/Index/FirstView.module.scss";
export const FirstView = () => {
  return (
    <div className={FirstViewStyle.root}>
      <TypographyH1 text="Welcome Board Game!" className="root" />
      <div className={FirstViewStyle.linkWrapper}>
        <Link text="Start" href="/board-game" className="root" />
      </div>
    </div>
  );
};
