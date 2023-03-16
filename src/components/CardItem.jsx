import styled from "styled-components";

const Card = styled("div")`
  font-family: Mulish, sans-serif;
  background: #ffffff;
  font-style: normal;
  font-weight: 200;
  border-radius: 4px;
  justify-content: space-between;
  width: 115px;
  height: 350px;
  padding: 28px 20px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #000000;
  top: 0px;
  transition: all .2s linear 0s;
  text-align: center;
  border-radius: 10px;
  &:hover { 
    position: relative; 
    top: -3px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    opacity: 60%;
  }
`;

const BuyButton = styled("button")`
  background-color: #BDD229;
  color: #000;
  border-radius: 25px;
  border: none;
  font-size: 0.75rem;
  padding: 10px 25px;
  letter-spacing: 2px;
`;

const CardItem = ({ itemName, price, photo }) => {
  return (
    <Card>
      <div>
      <img style={{ width: "100px", height: "100px" }} src={`${photo}`} alt=""></img>
        <p style={{ fontSize: "14px" }}>{itemName}</p>
      </div>
      <div>
        <h3 style={{ fontSize: "16px" }}>{`$${price}`}</h3>
        <BuyButton>COMPRAR</BuyButton>
      </div>
    </Card>
  );
};

export default CardItem;
