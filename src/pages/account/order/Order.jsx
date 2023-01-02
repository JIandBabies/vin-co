import { useEffect, useState } from "react";
import { Container } from "./styles";
import { instance } from "../../../api/api";
import List from "./OrderList";

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const orderLists = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await instance.request("/products/transactions/details", {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;
        console.log(data);
        if (res.status === 200) {
          setOrderData(res.data);
        }
      } catch (error) {
        setErrorMessage(error.response.data);
      }
    };

    orderLists();
  }, []);

  return (
    <Container>
      <div className="content">
        <div className="title">주문 조회</div>
      </div>
      <div className="details">
        {errorMessage ? (
          <h2>{errorMessage}</h2>
        ) : (
          orderData.map((order) => <List key={order.detailId} order={order} />)
        )}
      </div>
    </Container>
  );
};

export default Order;
