import React, { useState, useEffect } from 'react'
import { Grid, Col } from '../../components/Grid'
import { Container } from './Styled'
import ProductCard from '../ProductCard/ProductCard'
import { getFirestore } from '../../services/firebase'

const CategoryContainer = ({ catid }) => {
    //Aca vamos a incluir nuestra logica de fetch a firebase
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const db = getFirestore()
                const productsCollection = db.collection(`products`)
                const productsSnapshot = await productsCollection.get()
                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }
        getProducts()
    }, [catid])

    return (
        <Container>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Grid rowGap={30} colGap={30}>
                    {products.map(({ name, image, description, id }, index) =>
                        <Col desktop={3} tablet={6} mobile={12} key={index}>
                            <ProductCard name={name} image={image} description={description} id={id} />
                        </Col>
                    )}
                </Grid>
            )}

        </Container>
    )
}

export default CategoryContainer
