import { BoardGameContainer } from "@/components/common/containers/board-game";
import { Score } from "@/components/pages/board-game/Score";
import Layout from "@/layouts/standard";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <BoardGameContainer>
      <Score />
    </BoardGameContainer>
  </Layout>
);

export default IndexPage;
