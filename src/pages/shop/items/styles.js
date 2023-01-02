import styled from "styled-components";

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
  /* &:hover {
    background-color: whitesmoke;
  } */
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

export { List, Item, Thum, Info, Name, Price };
