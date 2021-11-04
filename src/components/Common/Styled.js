import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 200px;
  color: #f00;
`;
const StyledH2 = styled.h2`
  font-size: 100px;
  color: #00f;
`;

const StyledLink = styled.a`
  color: ${(props) => (props.target ? `#0f0` : `#000`)};
`;

const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export { StyledH1, StyledH2, StyledLink, StyledInner };
