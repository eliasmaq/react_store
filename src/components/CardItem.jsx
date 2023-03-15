import styled from "styled-components";

const Card = styled("div")`
  background: #ffffff;
  font-style: normal;
  font-weight: 200;
  border-radius: 4px;
  justify-content: space-between;
  width: 100px;
  height: 350px;
  padding: 28px 20px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #000000;
  top: 0px;
  transition: top 0.2s ease;
  text-align: center;
  &:hover { position: relative; top: -3px; box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25) }
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
