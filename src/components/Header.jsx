import React from "react";
import styled from "styled-components";

const Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const Logo = styled.img`
width: 150px
`


function Heading() {
  return (
    <Header>
      <Logo src="https://o.remove.bg/downloads/37836d78-e3f4-43a3-b3ed-ae1e6cbe43ec/images__1_-removebg-preview.png" alt="Logo-store"/>
    </Header>
  );
}

export default Heading;