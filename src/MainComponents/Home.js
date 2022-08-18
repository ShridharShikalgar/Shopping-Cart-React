import React from 'react';
import { Fragment } from 'react';
import {styled, Box} from '@mui/material'
//component
import SubNav from './SubNav';
import Banner from './Banner'
import ProductsLists from './ProductsLists'
import { NavComponent } from './NavComponent';
import { Data } from '../Constants/data'

const Component = styled(Box)`
    padding: 8px 50px;
    background: #f1faee;
`
const ProductsComponent = styled(Box)`
     padding: 8px 30px;
     background: #fff;
`
const ListItems = styled(Box)`
    display: flex;
    margin: 0px 130px 0px 130px;
    justify-content: space-between;
`
console.log(Data);
const Home = () => {

    return (
        <> 
            <SubNav/>
            <ListItems>
                {Data.map((data,index) => (
                        <div style={{display:"inline-block"}}>
                            <NavComponent data={data} />
                            
                        </div>
                    ))}
            </ListItems>
            <Component>
                <Banner/>
            </Component>
            
            <ProductsComponent>
                <ProductsLists/>
            </ProductsComponent>
        </>  
    );
}

export default Home;