import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryContainer from '../components/CategoryContainer/CategoryContainer'

const Category = () => {

    const { catId } = useParams()

    return (
        <div>
            <CategoryContainer catId={catId}/>
        </div>
    )
}

export default Category
