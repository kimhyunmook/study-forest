import Cards, { Card } from "../../shared/component/Card";
import Layout, { WhiteContainer } from "../../shared/component/Layout";

export default function Home() {
  return (
    <Layout>
      <WhiteContainer title={"최근 조회한 스터디"} titleMargin={"40px"}>
        <Cards>
          <Card point={202} in userName="이유디" name="의 UX 스터디">Slow And Steady Wins The Race!!</Card>
          <Card point={202} in userName="이유디" name="의 UX 스터디">Slow And Steady Wins The Race!!</Card>
          <Card point={202} in userName="이유디" name="의 UX 스터디">Slow And Steady Wins The Race!!</Card>
        </Cards>
      </WhiteContainer>
    </Layout>
  );
}
