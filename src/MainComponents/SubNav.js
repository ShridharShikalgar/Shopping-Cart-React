import React from 'react';
import {Box, styled} from '@mui/material'
import { navData } from '../Constants/data'
//exporting data
const OuterBoxWrapper = styled(Box)`
    display: flex;
    margin: 55px 130px 0px 130px;
    justify-content: space-between;
`
const InnerBoxWrapper = styled(Box)`
    max-width:130px;
    padding: 12px 8px;
    text-align: left;
    cursor: pointer;
` 

//Typography makes margin and padding is 0
// const Text = styled(Typography)`
//     font-size: 14px;
//     font-weight: 600;
//     font-family:inherit;
// `
const SubNav = () => {
    return (
        <OuterBoxWrapper>
            {
               navData.map(data=>(
                   <InnerBoxWrapper>
                       <img src={data.url} alt="nav" style={{width:66}}/>
                       {/* <Text>{data.text}</Text> */}
                   </InnerBoxWrapper>    
               )) 
            }
        </OuterBoxWrapper>
    );
}

export default SubNav;