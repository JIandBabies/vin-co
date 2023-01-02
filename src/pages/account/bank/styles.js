import styled from "styled-components";

const Container = styled.div`
  .bank-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;
    padding: 5px 0;
    font-weight: 500;
    border: 1px solid #27397d;
  }

  .delete-btn {
    width: 4rem;
    height: 2rem;
    border: 1px solid #d4d7e5;
    border-radius: 0.2rem;
    background-color: #27397d;
    color: white;
    font-size: 13px;
  }

  .bank-add {
    width: 5rem;
    height: 2.5rem;
    border: 1px solid #d4d7e5;
    border-radius: 0.2rem;
    background-color: #27397d;
    color: white;
    font-size: 13px;
    margin: 0 40%;
    margin-top: 2rem;
  }
`;

export default Container;
