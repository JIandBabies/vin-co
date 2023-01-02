const List = ({ order }) => {
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
        <div className="order-done">
          {order.done === true ? "주문확인" : "주문완료"}
        </div>
      </div>
    </div>
  );
};

export default List;
