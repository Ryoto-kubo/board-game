import { StandardContainer } from "@/components/common/containers/index";
import { FirstView } from "@/components/pages/Index/FirstView";
import Layout from "@/layouts/standard";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <StandardContainer>
      <FirstView />
    </StandardContainer>
  </Layout>
);

export default IndexPage;
