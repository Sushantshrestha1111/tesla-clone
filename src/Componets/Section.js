import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section({title,description,leftBtnText,rightBtnText,backgroundImage}) {
  return (
    

    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p> {description}</p>

      </ItemText>
      </Fade>

      <Fade bottom>
      <Button>
      <ButtonGroup>
        <LeftButton>
          {leftBtnText}

        </LeftButton>
        {rightBtnText && 
           <RightButton>
             {rightBtnText}
          </RightButton>
       }
        
       
      </ButtonGroup>
      <DownArrow src="/images/darrow.svg"/>
      </Button>
        
      </Fade>

     
    </Wrap>
    
    
  )
}

export default Section 

const Wrap=styled.div`
width:100vw;
height: 100vh;
background-size:cover;
background-position:center;
background-repeat:no_repeat;
display:flex;
flex-direction: column;
justify-content:space-between;//vertically
align-items:center;//horigental
background-image:${props=> `url("/images/${props.bgImage}")`}

`
const ItemText=styled.div`
color:black;
padding-top:8vh;

`
const ButtonGroup=styled.div`
display: flex;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}


`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:100px
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`
height:28px;
color:white;

overflow-x: hidden;
animation:animationDown infinite 1.3s;
`
const Button=styled.div`
`