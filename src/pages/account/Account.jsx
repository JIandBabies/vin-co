import { useState, useEffect } from "react";
import { Container } from "./styles";
import Order from "./order/Order";
import Wishlist from "./wishlist/Wishlist";
import OrderChange from "./orderchange/OrderChange";
import Bank from "./bank/Bank";
import EditAccount from "./editAccount/EditAccount";
import DeleteAccount from "./deleteAccount/DeleteAccount";
import { instance } from "../../api/api";

const Account = () => {
  const [section, setSection] = useState("order");
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const changeSection = (event) => {
    setSection(event.target.className);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const showConfirmModal = () => {
    setConfirmModal(true);
  };

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await instance.request("/auth/me", {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          setUserData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Container>
        <nav className="nav">
          <button className="order" type="button" onClick={changeSection}>
            주문 조회
          </button>
          <button className="wishlist" type="button" onClick={changeSection}>
            위시 리스트
          </button>
          <button
            className="order-change"
            type="button"
            onClick={changeSection}
          >
            구매확정/취소
          </button>
          <button className="bank" type="button" onClick={changeSection}>
            나의 계좌
          </button>
          <button className="edit-account" type="button" onClick={showModal}>
            정보 수정
          </button>
          <button
            className="delete-account"
            type="button"
            onClick={showConfirmModal}
          >
            회원탈퇴
          </button>
        </nav>
        <section>
          <div className="user">
            <button type="button" className="user-icon" onClick={showModal}>
              <img src={userData.profileImg} alt="profile-img" />
            </button>
            <div className="user-info">
              <h2>{userData.displayName} 님 안녕하세요.</h2>
              <span>누적 구매금액: 0원</span>
            </div>
          </div>
          {section === "order" ? <Order /> : null}
          {section === "wishlist" ? <Wishlist /> : null}
          {section === "order-change" ? <OrderChange /> : null}
          {section === "bank" ? <Bank /> : null}
        </section>
      </Container>
      {modalOpen && (
        <EditAccount
          setModalOpen={setModalOpen}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {confirmModal && <DeleteAccount setConfirmModal={setConfirmModal} />}
    </>
  );
};

export default Account;
