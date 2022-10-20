import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
        <a>
           
       
        </a>
    
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model x</a>
          <a href="#">Model y</a>
          <a href="#">Model z</a>

        </Menu>
        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
        

        </RightMenu>
    </Container>
  )
}

export default Header

const Container=styled.div`
min-hight:60px;
display:flex;
position:fixed;
align-items:center;
padding:0 20 px;
top:0;
left:0;
right:0;
`

const Menu=styled.div`
display:flex;
align-item:center;
flex:1;
justify-content:center;


a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;


}

`
const RightMenu=styled.div`
display:flex;
align-item:center;

a{
    font-weight:600;
    text-decoration:uppercase;
    margin-right:10px;
    flex-wrap:nowrap;


}

`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`