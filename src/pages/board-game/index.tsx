import { BoardGameContainer } from "@/components/common/containers/board-game";
import { MapRoute } from "@/components/pages/board-game/MapRoute";
import { Roulette } from "@/components/pages/board-game/Roulette";
import { Score } from "@/components/pages/board-game/Score";
import Layout from "@/layouts/standard";
import BoardGameStyle from "@/styles/pages/board-game/style.module.scss";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <BoardGameContainer>
      <Score />
      <Roulette />
      <div className={BoardGameStyle.mapRouteWrapper}>
        <MapRoute />
      </div>
    </BoardGameContainer>
  </Layout>
);

export default IndexPage;
