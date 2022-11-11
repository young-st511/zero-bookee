import styled from "styled-components";
import spinner from "../assets/Spin-1s-200px.gif";

export default function Loading({ text }: { text: string }) {
  return (
    <Background>
      <LoadingText>{text}</LoadingText>
      <img src={spinner} alt="로딩 중" width="25%" />
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
