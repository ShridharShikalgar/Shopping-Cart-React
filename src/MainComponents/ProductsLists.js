import React from 'react';
import {Box, styled, Typography} from '@mui/material'

//exporting data
import { products } from '../Constants/data'
const ProductsComponent = styled(Box)`
    display: flex;
    justify-content: space-between;
`
const ProductsComp = styled(Box)`
    text-align: center;
`
const Image = styled('img')({
    height:130,
    width: 130
})
const Text = styled(Typography)`
    font-size: 14px;
`
const ProductsLists = () => {
    return (
        <ProductsComponent>
            {
               products.map(product=>(
                   <ProductsComp>
                       <Image src={product.url} alt="Products"/>
                       <Text style={{fontWeight: 'bold'}}>{product.title.shortTitle}</Text>
                       <Text style={{color:'green'}}>{product.discount}</Text>
                       <Text style={{color: 'grey'}}>{product.tagline}</Text>
                   </ProductsComp>    
               )) 
            }
        </ProductsComponent>
    );
}

export default ProductsLists;