/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import styled from "styled-components";
import Heading from "./components/Header";

const ContainerCard = styled("div")`
  display: flex;
`;

function App() {
  const [user, setUser] = useState(null);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  }, [])
  console.log(user)

  return (
  <>
   <Heading />
    <ContainerCard>
      {user?.map((item, index) => (
        <CardItem
          key={index}
          itemName={item.title}
          price={item.price}
          photo={item.image}
        ></CardItem>
      ))}
    </ContainerCard>
    </>
  );
}

export default App;
