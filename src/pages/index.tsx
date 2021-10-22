import { TypographyH1 } from "@/components/atoms/TypographyH1";
import { TheContainer } from "@/components/common/container";
import Layout from "@/layouts/standard";

const IndexPage = () => (
  <Layout title="board-game | Next.js + TypeScript">
    <TheContainer>
      <TypographyH1 text="Welcome Board Game!" className="root" />
    </TheContainer>
  </Layout>
);

export default IndexPage;
