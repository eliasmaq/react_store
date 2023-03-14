import React from "react";
import {useEffect, useState} from "react";
import Heading from "./components/Header";

function App() {
  const [user, setUser] = useState(null);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  console.log(user)
  return (
    <Heading/>
  );
}

export default App;
