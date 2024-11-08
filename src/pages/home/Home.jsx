import Cards, { Card } from "../../shared/component/Card";
import Layout, { WhiteContainer } from "../../shared/component/Layout";

export default function Home() {
  return (
    <Layout>
      <WhiteContainer title={"최근 조회한 스터디"} titleMargin={"40px"}>
        <Cards>
          <Card></Card>
        </Cards>
      </WhiteContainer>
    </Layout>
  );
}
