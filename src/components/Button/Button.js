import React from 'react'
import { Container } from './styled'

const Button = ({ handleClick, bkg }) => {
    return (
        <Container
            bkgDarkMode={bkg}
            onClick={handleClick}
        >
            Click me Alicia!
        </Container>
    )
}

export default Button
