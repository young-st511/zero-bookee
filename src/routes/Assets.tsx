import styled from "styled-components";
import AddAcount from "../components/UserAssets/AddMenu";
import AssetsSection from "../components/UserAssets/AssetsSection";
import LiabilitiesSection from "../components/UserAssets/LiabilitiesSection";

function Assets() {
  return (
    <StyledAssets>
      <h2>ㅁㅁㅁ사의 순자산</h2>
      <h3>1,000,000원</h3>
      <AssetsSection />
      <LiabilitiesSection />
      <AddAcount />
    </StyledAssets>
  );
}

export default Assets;

const StyledAssets = styled.div`
  overflow: hidden;

`;
