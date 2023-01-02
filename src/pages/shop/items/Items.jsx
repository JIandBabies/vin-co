import { Item, Thum, Info, Name, Price } from "./styles";

const Items = ({ props, category }) => {
  if (category === null) {
    console.log("카테고리 널!!");
  }
  return (
    <Item className="item">
      <Thum src={props.thumbnail} alt="상품이미지" />
      <Info>
        <Name>{props.title}</Name>
        <Price>{props.price.toLocaleString()}</Price>
      </Info>
    </Item>
  );
};

export default Items;
