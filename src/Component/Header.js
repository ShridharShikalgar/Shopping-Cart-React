import React from 'react';
import {AppBar, Toolbar, styled, Box, InputBase, Tooltip, IconButton, Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = styled(AppBar)`
    background: #f6bd60;
    height: 3em;
    box-shadow: 0 8px 10px 0 light-grey, 0 0 0 0 rgba(0, 0, 0, 0.20); 
`
const Component = styled(Box)`
    margin: 16px 10px 17.5px 0px;
`
const SearchContainer = styled(Box)`
    display:flex;
    justify-content:space-between;
    background:#fff;
    width:30%;
    margin:28.5px 0px 35.5px 50%;
    border-radius:12px;
    padding-left:18px;
 `
const SearchLogo = styled(Box)`
    color:#71572c;
    margin:5px 10px 0px 0px;
    font-size:unset;
`
const buttonStyle ={
    height:"30px",
    width:"40px",
    marginBottom:"6px",
    marginLeft:"20px",
    borderRadius:"12px",
    borderColor:"#71572c",
    color:"#71572c"
}
const Header = () => {
    const logoUrl = 'https://cdn-icons.flaticon.com/png/512/2832/premium/2832499.png?token=exp=1660724971~hmac=f89ab00c49a1816a5807a5aed901c29b';
    return (
        <NavBar>
            <Toolbar style={{minHeight:55}} >
                <Component>
                    <img src={logoUrl} alt='Urllogo' style={{height:45, width:45}}/>
                </Component>
                <SearchContainer>
                    <InputBase placeholder='Search for products'/>
                    <SearchLogo>
                        <SearchIcon/>
                    </SearchLogo>
                </SearchContainer>
                <Tooltip title="Notifications">
                    <IconButton style={{marginLeft:20, marginBottom:7}}>
                        <NotificationsIcon />
                    </IconButton>
                </Tooltip>
                <Button title="Login" variant="outlined" style={buttonStyle}>
                    Login
                </Button>
            </Toolbar>
        </NavBar>
    );
}

export default Header;