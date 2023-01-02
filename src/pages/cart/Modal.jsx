import React, { useEffect, useRef } from "react";
import UseOutSideClick from "./UseOutSideClick";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  UseOutSideClick(modalRef, handleClose);
  return (
    <div
      style={{
        zIndex: "9999",
        backgroundColor: "#fff",
        boxShadow: "3px 3px 3px gray,0px 0px 3px gray",
        position: "absolute",
        borderRadius: "5px",
        top: "-100px",
        fontSize: "16px",
        fontWeight: "400",
        padding: "5px",
      }}
    >
      <div ref={modalRef}>
        <div style={{ borderBottom: "1px solid black", paddingBottom: "5px" }}>
          조건부 무료배송
        </div>
        <div style={{ paddingTop: "5px", fontSize: "13px" }}>
          기본 배송비 2,500원 <br />
          50,000원 이상 구매 시 무료배송
        </div>
      </div>
    </div>
  );
};
export default Modal;
