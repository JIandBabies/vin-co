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

  .btns {
    display: flex;
    flex-direction: row;
    padding: 15px;
  }

  .complete-btn,
  .cancel-btn {
    width: 4rem;
    height: 2rem;
    border: 1px solid #d4d7e5;
    border-radius: 0.2rem;
    background-color: #27397d;
    color: white;
    margin-right: 1.5%;
    font-size: 13px;
  }
`;

export { Container };
