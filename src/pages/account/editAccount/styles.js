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

  .modal {
    position: absolute;
    bottom: 10%;
    left: 38%;
    width: 20rem;
    height: 30rem;
    z-index: 999;
    background-color: white;
    border-radius: 3px;
    padding: 35px 20px;
  }

  .modal-top {
    display: flex;
    justify-content: space-between;
  }

  .modal-title {
    font-size: 1.5rem;
    color: black;
    font-weight: 600;
    margin-left: 36%;
  }

  .close {
    font-size: 1.5em;
    svg {
      color: #dedede;
    }
  }

  .modal-profile {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 7%;
    input[type="file"] {
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }

  .profile img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .camera {
    width: 32px;
    height: 32px;
    background-color: #999999;
    border-radius: 50%;
    font-size: 1.2em;
    position: absolute;
    right: 35%;
    margin-top: 14%;
    svg {
      color: white;
      position: absolute;
      left: 21%;
      top: 21%;
    }
  }
`;

const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7%;

  .user-password {
    background-color: #e7f0fe;
  }

  input {
    outline: none;
    border-radius: 0%;
    border: 1px solid #e0e0e0;
    height: 2.5rem;
    padding-left: 15px;
  }

  .user-name {
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    margin-bottom: 7%;
    span {
      color: black;
      font-size: 14px;
      margin-bottom: 2%;
    }
  }

  button {
    background-color: #1239cd;
    color: white;
    height: 2.5rem;
  }
`;

export { Container, UserForm };
