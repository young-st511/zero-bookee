import { useRecoilValue } from "recoil";
import styled from "styled-components";
import AddAcount from "../components/UserAssets/AddMenu";
import AssetsSection from "../components/UserAssets/AssetsSection";
import LiabilitiesSection from "../components/UserAssets/LiabilitiesSection";
import { userState } from "../recoil_state";

function Assets() {
  const userInfo = useRecoilValue(userState);
  console.log("userInf", userInfo);
  // if (!userInfo) {
  //   return;
  // }

  return (
    <StyledAssets>
      <h1>{userInfo?.companyName}의 순자산</h1>
      {/* <h3>1,000,000원</h3> */}
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
