import styled from "styled-components";

const Container = styled.div`
  .details {
    max-height: 500px;
    overflow: auto;
    color: #c7ccdd;
    text-align: center;
  }

  .order-list {
    display: flex;
  }

  .thumb img {
    width: 10em;
    height: 10em;
  }

  .product {
    color: #27397d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3em;
    font-weight: 700;
    font-size: 14px;
  }

  .order-detail {
    color: #27397d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3em;
  }

  .product-title {
    padding: 10px 0;
    font-size: 16px;
  }

  .order-done {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export { Container };
