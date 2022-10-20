import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
     title="Model S"
     description="Order Online for Touchless Delivery"
     backgroundImage="s.jpg"
     leftBtnText="CUSTOM ORDER"
     rightBtnText="EXISTING INVENTORY"
     
     />
     
     <Section
     title="Model Y"
     description="Order Online for Touchless Delivery"
     backgroundImage="x.jpg"
     
     leftBtnText="CUSTOM ORDER"
     rightBtnText="EXISTING INVENTORY"
     />
     <Section
     title="Model X"
     description="Order Online for Touchless Delivery"
     backgroundImage="e.jpg"
     
     leftBtnText="CUSTOM ORDER"
     rightBtnText="EXISTING INVENTORY"
     
     />
     <Section
     title="Model X"
     description="Order Online for Touchless Delivery"
     backgroundImage="e.jpg"
     leftBtnText="CUSTOM ORDER"
     />
    </Container>
  )
}

export default Home
const Container=styled.div`
height:100vh

`
const DownArrow=styled.img`
height:28px;
color:white;

overflow-x: hidden;
animation:animationDown infinite 1.3s;
`