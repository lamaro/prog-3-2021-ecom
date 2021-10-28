import styled from 'styled-components'

const Container = styled.button`

color:#fff;
background-color: ${props => props.bkgDarkMode ? "#000": "#F00" };
padding:100px;


`

export { Container }