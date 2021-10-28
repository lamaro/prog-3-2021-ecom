import React from 'react'
import { Container } from './Styled'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, image, description, id }) => {
    return (
        <Container>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/product/${id}`}>View more</Link>
        </Container>
    )
}
export default ProductCard
