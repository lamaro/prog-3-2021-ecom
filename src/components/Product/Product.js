import React, { useState } from 'react'
import { Container } from './Styled'
import placeholder from '../../assets/dummy/placeholder.jpg'
import { Grid, Col } from '../Grid/index'

const Product = ({ prodId, product, addToCart }) => {

    return (
        <Container>
            <Grid>
                <Col desktop={6} tablet={6} mobile={12}>
                    <img src={product.image} alt={product.name} />
                </Col>
                <Col desktop={6} tablet={6} mobile={12}>
                    <div>
                        <h1>{product.name} {prodId}</h1>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart({...product, quantity:1})}>Add to cart</button>
                    </div>
                </Col>
            </Grid>
        </Container>
    )
}

export default Product
