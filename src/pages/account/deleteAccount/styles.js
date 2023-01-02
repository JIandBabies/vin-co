import styled from "styled-components";

const Container = styled.div`
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.7;
    z-index: 10;
  }

  .delete {
    position: absolute;
    width: 35rem;
    height: 15rem;
    right: 30%;
    top: 10%;
    background-color: white;
    z-index: 999;
    border-radius: 3px;
    span {
      margin: 0 4%;
    }
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    color: black;
    padding: 5% 0;
  }

  .content {
    color: #343941;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 15%;
  }

  .cancel-btn {
    width: 3.5rem;
    height: 2.5rem;
    border: 1px solid #d4d7e5;
    margin-right: 1.5%;
    font-size: 12px;
  }

  .delete-btn {
    width: 5rem;
    height: 2.5rem;
    background-color: #27397d;
    color: white;
    font-size: 12px;
  }
`;

export default Container;
