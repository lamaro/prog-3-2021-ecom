import React from "react";
import { StyledH1, StyledH2, StyledLink, StyledInner} from "./Styled";

const H1 = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

const H2 = ({ children }) => <StyledH2>{children}</StyledH2>;

const Link = ({children, target, url}) => <StyledLink href={url} target={target ? `_blank` : ``}>{children}</StyledLink>

const Inner = ({children}) => <StyledInner>{children}</StyledInner>

export { H1, H2, Link, Inner };
