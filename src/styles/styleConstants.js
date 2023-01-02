import { css } from "styled-components";

const containerStyle = css`
  max-width: 1440px;
  margin-inline: auto;
  padding: 1rem 0.75rem;
`;

const hoverEffect = css`
  transition: color 0.3s linear;
  &:hover {
    color: #3bf93a;
  }
`;

const buttonSize = css`
  width: 24px;
  height: 24px;
`;

export { containerStyle, hoverEffect, buttonSize };
