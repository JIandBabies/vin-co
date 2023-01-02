import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { instance } from "../../../api/api";
import "react-toastify/dist/ReactToastify.css";

const List = ({ order }) => {
  const [ok, setOk] = useState(false);
  const [cancel, setCancel] = useState(false);

  const purchaseConfirm = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await instance.request("/products/ok", {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          detailId: order.detailId,
        },
      });

      if (res.status === 200) {
        setOk(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purchaseCancel = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await instance.request("/products/cancel", {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          detailId: order.detailId,
        },
      });

      if (res.status === 200) {
        setCancel(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const okHandler = async () => {
    await purchaseConfirm();
    setOk(true);
    const notify = () =>
      toast.success("구매가 확정되었습니다.", {
        position: "top-center",
        autoClose: 2000,
      });
    notify();
  };

  const cancelHandler = async () => {
    await purchaseCancel();
    setCancel(true);
    const notify = () =>
      toast.error("주문이 취소되었습니다.", {
        position: "top-center",
        autoClose: 2000,
      });
    notify();
  };

  return (
    <div className="order-list">
      <div className="thumb">
        <img src={order.product.thumbnail} alt="thumb-img" />
      </div>
      <div className="product">
        <div>주문번호 - {order.detailId}</div>
        <div className="product-title">{order.product.title}</div>
        <div>{order.product.price.toLocaleString()}</div>
      </div>
      <div className="order-detail">
        <div>{order.timePaid}</div>
        <div className="btns">
          {order.isCanceled === true ? (
            <button
              className="complete-btn"
              type="button"
              style={{
                backgroundColor: "gray",
              }}
              disabled
            >
              구매확정
            </button>
          ) : (
            <button className="complete-btn" type="button" onClick={okHandler}>
              구매확정
            </button>
          )}
          <ToastContainer />
          {order.done === true ? (
            <button
              className="cancel-btn"
              type="button"
              style={{
                backgroundColor: "gray",
              }}
              disabled
            >
              주문취소
            </button>
          ) : (
            <button
              className="cancel-btn"
              type="button"
              onClick={cancelHandler}
            >
              주문취소
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
