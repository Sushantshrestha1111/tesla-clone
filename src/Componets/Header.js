
import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade'
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const[burgerStatus,setBurgerStatus]=useState(false);
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
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
        

        </RightMenu >

        <BurgerMEnu show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          

          <li><a herf="#">Existing</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li><li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">Existing Inventory</a></li>
          <li><a herf="#">cyber Truck</a></li>
        </BurgerMEnu>
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
z-index:1;
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
const BurgerMEnu=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
  a{
    font-weight:650;

  }
}


`
const CustomClose=styled(CloseIcon)`
cursor:pointer;

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`
