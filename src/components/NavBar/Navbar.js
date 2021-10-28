import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>
            <div className="logo">LOGO</div>
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/shop`}>Shop</Link></li>
                    <li><Link to={`/category/1`}>Category 1</Link></li>
                    <li><Link to={`/category/2`}>Category 2</Link></li>
                    <li><Link to={`/cart`}>Cart</Link></li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar
