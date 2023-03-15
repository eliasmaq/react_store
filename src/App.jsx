import React from "react";
import { useEffect, useState } from "react";
import CardItem from "./components/CardItem";


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
    <div style={{ display: "flex"}}>
      {user?.map((item, index) => (
        <CardItem
          key={index}
          itemName={item.title}
          price={item.price}
          photo={item.image}
        ></CardItem>
      ))}
    </div>
  );
}

export default App;
