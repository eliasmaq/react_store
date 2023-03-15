import styled from "styled-components";

const ContainerCard = styled("div")`
  background: #ffffff;
  font-style: normal;
  font-weight: 200;
  border-radius: 4px;
  justify-content: space-between;
  border: 2px solid grey;
  width: 100px;
  height: 350px;
  padding: 28px 20px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #000000;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const CardItem = ({ itemName, price, photo }) => {
  return (
    <ContainerCard>
      <div>
      <img style={{ width: "100px", height: "100px" }} src={`${photo}`} alt=""></img>
        <p style={{ fontSize: "14px" }}>{itemName}</p>
      </div>
      <div>
        <h3 style={{ fontSize: "16px" }}>{`$${price}`}</h3>
        <button>COMPRAR</button>
      </div>
    </ContainerCard>
  );
};

export default CardItem;
