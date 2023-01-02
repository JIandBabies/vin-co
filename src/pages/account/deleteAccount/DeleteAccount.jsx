import { useEffect, useRef } from "react";
import Container from "./styles";

const DeleteAccount = ({ setConfirmModal }) => {
  const closeModal = () => {
    setConfirmModal(false);
  };

  const modalRef = useRef(HTMLDivElement);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setConfirmModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Container>
      <div className="backdrop" />
      <div ref={modalRef} className="delete">
        <div className="title">회원탈퇴</div>
        <span className="content">가입된 회원정보가 모두 삭제됩니다.</span>
        <div className="buttons">
          <button className="cancel-btn" type="button" onClick={closeModal}>
            취소
          </button>
          <button className="delete-btn" type="button">
            탈퇴하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DeleteAccount;
