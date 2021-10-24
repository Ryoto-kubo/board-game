import { BoardGameContainer } from "@/components/common/containers/board-game";
import { Roulette } from "@/components/pages/board-game/Roulette";
import { Score } from "@/components/pages/board-game/Score";
import Layout from "@/layouts/standard";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <BoardGameContainer>
      <Score />
      <Roulette />
    </BoardGameContainer>
  </Layout>
);

export default IndexPage;
