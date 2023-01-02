import styled from "styled-components";
import {
  buttonSize,
  containerStyle,
  hoverEffect,
} from "../../styles/styleConstants";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: transparent;
  z-index: 10;
`;

const Container = styled.div`
  ${containerStyle}
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 990px) {
      display: none;
    }

    button {
      ${buttonSize}
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1.875rem;
      font-weight: 600;
    }

    div {
      a {
        ${hoverEffect}
      }
    }
  }
  .nav {
    display: none;
    align-items: center;
    justify-content: space-between;
    display: none;
    @media screen and (min-width: 990px) {
      display: flex;
      /* align-items: center;
      justify-content: space-between; */
    }

    .left-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    ul {
      display: flex;
      gap: 1rem;
      font-size: 1.25rem;
    }

    li a {
      ${hoverEffect}
    }

    .search-btn {
      ${buttonSize}
      transform: translateY(2px);
      font-size: 1.25rem;
    }

    .logout-btn {
      ${hoverEffect}
      font-size: 1.25rem;
      color: #27397d;
    }
  }
`;

const StyledAside = styled.aside`
  /* display: ${({ isToggle }) => (isToggle ? "block" : "none")}; */
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: ${({ isToggle }) => (isToggle ? "100%" : 0)};
  z-index: 3;

  /* @media screen and (min-width: 990px) {
    width: 0;
  } */

  .backdrop {
    width: ${({ isToggle }) => (isToggle ? "100%" : 0)};
    background-color: #000;
    opacity: 0.6;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 2;
  }

  .mobile-menu {
    position: relative;
    background-color: #27397d;
    height: 100%;
    width: 0;
    z-index: 4;
    transition: width 0.3s ease;
    padding: 1.5rem;
    width: 250px;

    @media screen and (max-width: 400px) {
      width: 100%;
    }

    &.close {
      width: 0;
    }
    /* &.close {
      width: 0;
    } */

    /* @media screen and (min-width: 990px) {
      width: 0;
    } */
    .user-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .menu-user {
      margin-bottom: 1rem;
      svg {
        font-size: 1.25rem;
      }

      .user {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
      }

      .user-email {
        font-size: 0.75rem;
        color: #d3d3d3;
      }
    }

    .dropdown {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.25rem;

      a {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        color: #fff;
        svg {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
const CloseBtn = styled.button`
  display: ${(isToggle) => (isToggle ? "block" : "none")};
  position: absolute;
  top: 27px;
  right: -24px;
`;

const Search = styled.div`
  position: absolute;
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  .closeBtn {
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 20px;
    @media screen and (min-width: 765px) {
      font-size: 50px;
    }
  }
  .searchBox {
    width: 90%;
    height: 30px;
    border-bottom: 1px solid #27397d;
    position: absolute;
    top: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 765px) {
      top: 200px;
      height: 60px;
      width: 80%;
      max-width: 740px;
    }
    input {
      color: #27397d;

      font-size: 18px;
      width: 90%;
      border: none;
      @media screen and (min-width: 765px) {
        font-size: 25px;
      }
    }
    input:focus {
      outline: none;
    }
    .searchBtn {
      font-size: 24px;
      @media screen and (min-width: 765px) {
        font-size: 36px;
      }
    }
  }
`;

export { Container, StyledHeader, StyledAside, CloseBtn, Search };
