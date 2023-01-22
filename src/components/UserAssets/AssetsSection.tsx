import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { db } from "../../firebaseApp";
import { userAuthState } from "../../recoil_state";
import AccountType from "../../types/accountType";
import AssetAccount from "./AssetAccount";

function AssetsSection() {
  const [assets, setAssets] = useState<AccountType[]>([]);
  const uid = useRecoilValue(userAuthState);

  useEffect(() => {
    if (!uid) {
      return;
    }

    onSnapshot(collection(db, `UserInfo/${uid}/accounts`), (snap) => {
      console.log("call accounts!");

      const assetsArray = snap.docs.map(
        (doc) => ({ ...doc.data() } as AccountType)
      );
      setAssets(assetsArray);
    });
  }, [uid]);

  return (
    <StyledAssetsSection>
      {assets.map((asset) => (
        <AssetAccount accountInfo={asset} key={asset.accountNumber} />
      ))}
    </StyledAssetsSection>
  );
}

export default AssetsSection;

const StyledAssetsSection = styled.section`
  width: 85vw;
  margin: 5rem auto;
  margin-bottom: 10rem;
`;
