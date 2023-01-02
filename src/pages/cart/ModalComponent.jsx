import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

const ModalComponent = ({
  item,
  id,
  modalVisbleId,
  setModalVisibleId,
  getNumEqual,
}) => {
  const onCloseHandler = () => {
    setModalVisibleId("");
  };

  const [itemNumber, setItemNumber] = useState(item.number);
  const onIncrease = () => {
    setItemNumber((prevItemNumber) => prevItemNumber + 1);
  };
  const onDecrease = () => {
    if (itemNumber > 1) {
      setItemNumber((prevItemNumber) => prevItemNumber - 1);
    } else {
      setItemNumber((prevItemNumber) => prevItemNumber);
    }
  };
  const itemEqual = () => {
    getNumEqual(item.id, itemNumber);
    onCloseHandler();
  };
  const itemprice = item.price.toLocaleString();
  const sumitemprice = (item.price * item.number).toLocaleString();
  return (
    <div
      className={modalVisbleId === id ? "d_block" : "d_none"}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: "422px",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid gray",
          }}
        >
          <div style={{ fontWeight: "700" }}>옵션 변경</div>
          <CloseButton onClick={onCloseHandler}>
            <ImCancelCircle style={{ width: "20px", height: "20px" }} />
          </CloseButton>
        </div>
        <div style={{ margin: "20px", display: "flex" }}>
          <img
            src={item.photo}
            alt="상품 이미지"
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid gray",
              marginRight: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "10px" }}>{item.name}</div>
            <div>{itemprice}원</div>
          </div>
        </div>
        <div
          style={{
            margin: "0 20px",
            paddingBottom: "10px",
            backgroundColor: "lightgray",
          }}
        >
          <div style={{ padding: "20px 20px 0 20px" }}>수량</div>
          <div
            style={{
              margin: "5px 0 20px 20px",
              display: "flex",
              border: "1px solid gray",
              width: "fit-content",
              backgroundColor: "white",
            }}
          >
            <button
              type="button"
              onClick={onDecrease}
              style={{
                width: "24px",
                height: "32px",
                borderRight: "1px solid gray",
              }}
            >
              <AiOutlineMinus />
            </button>
            <div
              style={{
                width: "50px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: "1px solid gray",
              }}
            >
              {itemNumber}
            </div>
            <button
              type="button"
              onClick={onIncrease}
              style={{
                width: "24px",
                height: "32px",
                borderRight: "1px solid gray",
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            총 수량<span>{itemNumber}</span>
          </div>
          <div style={{ fontSize: "20px" }}>{sumitemprice}원</div>
        </div>
        <div
          style={{
            boxShadow: "0px -3px 5px gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            padding: "10px",
          }}
        >
          <button
            type="button"
            onClick={onCloseHandler}
            style={{
              padding: "5px 10px",
              marginRight: "20px",
              border: "1px solid gray",
            }}
          >
            취소
          </button>
          <button
            type="button"
            onClick={itemEqual}
            style={{
              padding: "5px 10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  margin: 20px;
  cursor: pointer;
`;
export default ModalComponent;
