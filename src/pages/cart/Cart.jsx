import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styled from "styled-components";
import localStorage from "./LocalStorage";
import ModalComponent from "./ModalComponent";
import Modal from "./Modal";

const Container = styled.div`
  max-width: 1024px;
  margin-inline: auto;
  position: relative;
  margin-top: 50px;
`;
const ItemSize = styled.div`
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 16px;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-left: 10px;
`;
const Items = styled.div`
  width: 100%;
  border-right: 1px solid gray;
  > div {
    border-bottom: 1px solid gray;
    &:last-child {
      border-bottom: 0;
    }
  }
`;
const FDelivey = styled.div`
  width: 180px;
  text-align: center;
  position: relative;
`;

const ItemsTable = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;
const ItemsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const ItemsInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 3;
`;
const DeliveryTitle = styled.div`
  width: 180px;
  text-align: center;
  margin-right: 5px;
`;
const ItemTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid gray;
`;
const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemInfo2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 3;
  max-width: 506px;
  box-sizing: border-box;
  border-right: 1px solid gray;
  padding: 10px 10px 10px 0;
`;
const ItemNumber = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 164px;
  border-right: 1px solid gray;
  padding: 23px 0;
`;
const ItemNumButton = styled.button`
  padding: 5px;
  border: 1px solid gray;
  margin-top: 10px;
`;
const ItemPrice = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 194px;
`;
const ItemPriceButton = styled.button`
  background-color: blue;
  padding: 5px;
  margin-top: 10px;
`;
const DelButtons = styled.button`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid gray;
`;
const Table2 = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
const Table2Title = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid gray;
  font-size: 13px;
`;
const Table2Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
const Table2ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin: 20px;
`;
const Table2ContentBottom = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-top: 20px;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OrderBtn = styled.button`
  margin: 20px;
  padding: 10px 40px;
  background-color: blue;
`;
const Wishlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
const WishlistTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
`;

const list = JSON.parse(localStorage.getItem("item"));
const checkItems1 = Array.from({ length: list.length }, (num, item) => item);

const FreeDelivery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <FDelivey>
      <div style={{ fontWeight: "700" }}>
        무료
        <span>
          <button type="button" onClick={onClickButton}>
            <AiOutlineQuestionCircle />
          </button>
          {isOpen && (
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </span>
      </div>
      <div style={{ fontSize: "13px" }}>택배</div>
    </FDelivey>
  );
};

const Delivery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <FDelivey>
      <div>
        2500원
        <span>
          <button type="button" onClick={onClickButton}>
            <AiOutlineQuestionCircle />
          </button>
          {isOpen && (
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </span>
      </div>
      <div style={{ fontSize: "13px" }}>택배</div>
    </FDelivey>
  );
};

const ItemSumPrice = ({ price, number }) => {
  const itemsumprice = (price * number).toLocaleString();
  return (
    <div style={{ fontSize: "20px", fontWeight: "700" }}>{itemsumprice}원</div>
  );
};

const Cart = () => {
  const [items, setItems] = useState(list);
  const [checkItems, setCheckItems] = useState(checkItems1);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const deleteHandler = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  const sumItems = items.reduce(
    (acc, item) => acc + item.price * item.number,
    0,
  );

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prevCheckItems) => [...prevCheckItems, id]);
    } else {
      setCheckItems(checkItems.filter((checkItem) => checkItem !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      items.forEach((item) => idArray.push(item.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const onModalHandler = (id) => {
    setModalVisibleId(id);
  };

  const getNumEqual = (id, numItem) => {
    setItems(
      items.map((item) => ({
        ...item,
        number: item.id === id ? numItem : item.number,
      })),
    );
  };

  const checkDelete = (checkItems) => {
    setItems(items.filter((item) => !checkItems.includes(item.id)));
    handleAllCheck();
  };

  const noItem = () => {
    alert("품절된 상품이 없습니다.");
  };

  const checkSumItems = (checkItems) => {
    return items
      .filter((item) => checkItems.includes(item.id))
      .reduce((acc, item) => acc + item.price * item.number, 0);
  };

  const checkSum = checkSumItems(checkItems);
  const checkSum1 = checkSum.toLocaleString();
  const checkSum2 = (checkSum + 2500).toLocaleString();
  const paycheckItems = items.filter((item) => checkItems.includes(item.id));

  return (
    <Container>
      <div>
        <div>
          <div style={{ display: "flex", fontSize: "20px" }}>
            장바구니
            <span>
              {items.length > 0 && <ItemSize>{items.length}</ItemSize>}
            </span>
          </div>
          <div>
            <ItemsTable>
              <ItemsTitle>
                <ItemsInfo>
                  <input
                    type="checkbox"
                    name="select-all"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={checkItems.length === items.length}
                    style={{
                      margin: `0 10px`,
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  상품 정보
                </ItemsInfo>
                <div style={{ flexGrow: "1", textAlign: "center" }}>수량</div>
                <div style={{ flexGrow: "1", textAlign: "center" }}>
                  주문금액
                </div>
              </ItemsTitle>
              <DeliveryTitle>배송 정보</DeliveryTitle>
            </ItemsTable>
          </div>
        </div>
        <ItemTable>
          <Items>
            {items.length > 0 &&
              items.map((item) => (
                <ItemInfo key={item.name}>
                  <ItemInfo2>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        name={`select-${item.id}`}
                        onChange={(e) =>
                          handleSingleCheck(e.target.checked, item.id)
                        }
                        checked={!!checkItems.includes(item.id)}
                        style={{
                          margin: `0 10px`,
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <img
                        src={item.photo}
                        alt="상품 사진"
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "1px solid gray",
                          marginRight: "10px",
                        }}
                      />
                      <div>{item.name}</div>
                    </div>
                    <button
                      onClick={() => deleteHandler(item.name)}
                      type="button"
                    >
                      <ImCancelCircle style={{ fontSize: "20px" }} />
                    </button>
                  </ItemInfo2>
                  <ItemNumber>
                    <div>{item.number}</div>
                    <ItemNumButton onClick={() => onModalHandler(item.id)}>
                      옵션/수량 변경
                    </ItemNumButton>
                    {modalVisibleId === item.id && (
                      <ModalComponent
                        item={item}
                        id={item.id}
                        modalVisibleId={modalVisibleId}
                        setModalVisibleId={setModalVisibleId}
                        open={modalVisibleId}
                        onClose={() => {
                          setModalVisibleId("");
                        }}
                        getNumEqual={getNumEqual}
                      />
                    )}
                  </ItemNumber>
                  <ItemPrice>
                    <ItemSumPrice price={item.price} number={item.number} />
                    <ItemPriceButton>
                      {!localStorage.token && (
                        <Link
                          to="/login"
                          style={{ color: "white", fontWeight: "700" }}
                        >
                          바로구매
                        </Link>
                      )}
                      {!!localStorage.token && (
                        <Link
                          to="/payment"
                          state={{ items: [item] }}
                          style={{ color: "white", fontWeight: "700" }}
                        >
                          바로구매
                        </Link>
                      )}
                    </ItemPriceButton>
                  </ItemPrice>
                </ItemInfo>
              ))}
          </Items>
          {sumItems > 50000 ? <FreeDelivery /> : <Delivery />}
          {items.length === 0 && <div>장바구니가 비어있습니다.</div>}
        </ItemTable>
      </div>
      {items.length > 0 && (
        <div style={{ margin: "10px 0" }}>
          <DelButtons onClick={() => checkDelete(checkItems)}>
            선택상품 삭제
          </DelButtons>
          <DelButtons onClick={noItem}>품절상품 삭제</DelButtons>
        </div>
      )}
      {items.length > 0 && (
        <Table2>
          <Table2Title>총 주문 상품 {checkItems.length}개</Table2Title>
          <Table2Content>
            <Table2ContentTop>
              <div>{checkSum1}원</div>
              <Table2ContentBottom>상품금액</Table2ContentBottom>
            </Table2ContentTop>
            <Table2ContentTop>+</Table2ContentTop>
            <Table2ContentTop>
              <div>
                {(checkSum >= 50000 || checkSum === 0) && 0}
                {checkSum < 50000 && checkSum > 0 && "2,500"}원
              </div>
              <Table2ContentBottom>배송비</Table2ContentBottom>
            </Table2ContentTop>
            <Table2ContentTop>=</Table2ContentTop>
            <Table2ContentTop>
              <div>
                {(checkSum >= 50000 || checkSum === 0) && checkSum1}
                {checkSum < 50000 && checkSum > 0 && checkSum2}원
              </div>
              <Table2ContentBottom>총 주문금액</Table2ContentBottom>
            </Table2ContentTop>
          </Table2Content>
        </Table2>
      )}
      {items.length > 0 && (
        <Center>
          <OrderBtn>
            {!localStorage.token && (
              <Link to="/login" style={{ color: "white" }}>
                주문하기
              </Link>
            )}
            {!!localStorage.token && (
              <Link
                to="/payment"
                style={{ color: "white" }}
                state={{ items: paycheckItems }}
              >
                주문하기
              </Link>
            )}
          </OrderBtn>
        </Center>
      )}
      <Center>
        <button type="button">
          <Link to="/" style={{ textDecoration: "underline" }}>
            계속 쇼핑하기
          </Link>
        </button>
      </Center>
      {!!localStorage.token && (
        <div style={{ height: "max-content", marginTop: "70px" }}>
          <Wishlist>
            <WishlistTitle>위시리스트</WishlistTitle>
            <button
              type="button"
              style={{ padding: "5px 10px", border: "1px solid gray" }}
            >
              <Link to="/account">더보기</Link>
            </button>
          </Wishlist>
          <Center>
            <div>위시리스트가 없습니다.</div>
          </Center>
        </div>
      )}
    </Container>
  );
};
export default Cart;
