import React from "react";
import {useEffect, useState} from "react";

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
    <h1>Hola sbitas</h1>
  );
}

export default App;
