import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const Container = styled.div`
  ${containerStyle}
  max-width: 600px;
  padding: 0 4rem;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem 1rem;
    border: 1px solid lightgray;
    outline: none;

    &:nth-of-type(2) {
      border-top: none;
      border-bottom: none;
    }
  }

  .username-wrapper {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    label {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      &::after {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #1339cd;
        display: inline-block;
        border-radius: 50%;
        /* position: absolute; */
      }
    }
  }

  button {
    background-color: #1339cd;
    color: #fff;
    padding: 0.75rem;
  }
`;

const UploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .img-uploader {
    width: 64px;
    height: 64px;

    @media screen and (min-width: 768px) {
      width: 100px;
      height: 100px;
    }

    margin-bottom: 1rem;
    position: relative;
    cursor: pointer;
    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }

    .profile {
      background: ${({ profilePreview }) =>
          profilePreview
            ? `url(${profilePreview})`
            : "url(https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png)"}
        50% 50% / cover no-repeat;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .icon-wrapper {
      width: 32px;
      height: 32px;
      background-color: #999;
      position: absolute;
      border-radius: 50%;
      bottom: -2px;
      right: -4px;
      svg {
        font-size: 1rem;
        color: #fff;
        transform: translate(50%, 50%);
        position: absolute;
      }
    }
  }
`;

export { Container, StyledForm, UploaderWrapper };
