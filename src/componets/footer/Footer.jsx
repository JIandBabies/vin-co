import { ColumnDiv, Container, RowDiv, StyledFooter, Wrapper } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <ColumnDiv>
            <strong>lorem</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            eius.
          </ColumnDiv>
          <ColumnDiv>
            <strong>lorem</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            eius.
          </ColumnDiv>
          <RowDiv>
            <div>
              <p>github</p>
              <p>notion</p>
            </div>
            <div>
              <p>lorem</p>
              <p>lorem</p>
            </div>
          </RowDiv>
        </Wrapper>
        <div>
          <h1>Vin-co</h1>
          <div>&copy;</div>
        </div>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
