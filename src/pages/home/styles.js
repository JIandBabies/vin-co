import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const Container = styled.div`
  ${containerStyle}
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

// 배너
const Banner = styled.div`
  width: 900px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn.imweb.me/thumbnail/20220215/834ed85d9945b.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -850px;
`;

const Logo = styled.h1`
  font-size: 96px;
  font-weight: 900;
`;

// 소개
const Intro = styled.span`
  margin: 10px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 목록
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (min-width: 990px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// 아이템
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 50vw;
  gap: 10px;
  @media screen and (min-width: 990px) {
    width: 20vw;
    height: 28vw;
  }
  &:hover {
    background-color: whitesmoke;
  }
`;

const Thum = styled.img`
  width: 40vw;
  height: 40vw;
  @media screen and (min-width: 990px) {
    width: 20vw;
    height: 20vw;
  }
`;

const Info = styled.div`
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const Price = styled.span`
  font-size: 14px;
`;

export { Container, Banner, Intro, List, Logo, Item, Thum, Info, Name, Price };
