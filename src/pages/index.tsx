import { TheContainer } from "@/components/common/container";
import { FirstView } from "@/components/molecules/FirstView";
import Layout from "@/layouts/standard";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <TheContainer>
      <FirstView />
    </TheContainer>
  </Layout>
);

export default IndexPage;
