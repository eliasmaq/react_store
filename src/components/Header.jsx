/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCart } from "react-icons/im";

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
`;

const Textosuperior = styled.div`
  background-color: rgb(36, 36, 36);
  color: rgb(255, 255, 255);
  font-size: 0.755rem;
  line-height: 1.25rem;
  padding: 4px 10px 3px 10px;
  display: block;
  text-align: center;
  font-weight: 500;
  font-family: Mulish, sans-serif;
`;

const Header = styled.header`
  background: #f5f5f5;
`;

const Logo = styled.img`
  background: top left no-repeat;
  background-size: contain;
  margin: 5px;
  height: 50px;
  width: 231px;
  margin: 15px 30px 15px 0;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #bdd229;
  border-radius: 10px;
  padding: 0.4375rem 2.25rem 0.5625rem 0.9375rem;
  outline: none;
  box-sizing: border-box;
  transition: border 0.2s ease-out 0s;
  &:focus {
    border: 1px solid #9f2;
  }
`;

const IconSearch = styled.span`
  margin: 0;
  font-size: 18px;
  line-height: 2.25em;
  position: absolute;
  top: 46px;
  right: 53px;
  width: 2em;
  height: 2.25em;
  z-index: 4;
  text-align: center;
  cursor: pointer;
`;

const ContainerAmburguesaNav = styled.div`
  position: relative;
  z-index: 5;
  width: auto;
  margin-left: 39.444px;
  padding-left: 10px;
`;

const BotonCats = styled.div`
  display: flex;
  cursor: pointer;
  align-content: center;
  align-items: center;
  font-size: 20px;
`;

const ListNav = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  `
  
const ItemListNav = styled.li`
list-style: none;
margin: 0;
padding: 0;
font-family: Mulish, sans-serif;
font-size: 15px;
&:last-child {
  font-weight: 700;
  
}
`

const LinkListNav = styled.a`
  font-size: 14px;
  display: inline-block;
  padding: 10px;
  color: #000;
  outline: 0;
  text-decoration: none;
`

const ContainerCart = styled.div`
  position: relative;
  z-index: 5;
  width: auto;
  margin-right: 39.444px;
  padding-right: 10px;
`

const BotonCard = styled.div`
  display: flex;
  cursor: pointer;
  align-content: center;
  align-items: center;
  font-size: 20px;
`;

const CardCount = styled.span`
position: absolute;
top: -8px;
left: 15px;
font-family: Mulish, sans-serif;
text-align: center;
font-size: 12px;
height: 20px;
width: 20px;
border-radius: 10px;
background: #bdd229;
`

function Heading() {
  return (
    <>
      <Content>
        <Header>
          <Textosuperior>
            Envío GRATIS en compras +60€ (España Peninsular)
          </Textosuperior>
          <div
            css={css`
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
              padding-left: 10px;
              padding-right: 10px;
              margin-right: 39.444px;
              margin-left: 39.444px;
              height: 70px;
            `}
          >
            <Logo
              src="https://i.postimg.cc/SxBPjnSx/Logo.png"
              alt="Logo-store"
            />
            <Input type="text" placeholder="Escribe aquí" />
            <IconSearch>
              <BiSearch />
            </IconSearch>
          </div>
        </Header>
      </Content>
      <div
        css={css`
          position: sticky;
          top: 0;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: 38px;
          margin-top: 0px;
          margin-bottom: 0px;
          background-color: #f5f5f5;
          border-top: 1px solid #bdd229;
          border-bottom: 1px solid #bdd229;
        `}
      >
        <ContainerAmburguesaNav>
          <BotonCats>
            <AiOutlineMenu />
            <div
              css={css`
                padding-left: 10px;
                font-family: Mulish, sans-serif;
                font-size: 15px;
              `}
            >
              Todo
            </div>
          </BotonCats>
        </ContainerAmburguesaNav>
        <ListNav>
          <ItemListNav>
            <LinkListNav href="#" title="🌌 Dia del Padre">🌌 Dia del Padre</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Nuevo Stock">Nuevo Stock</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Nuevas Pre-ventas">Nuevas Pre-ventas</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Nuevos Mangas">Nuevos Mangas</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Cajas Sorpresa">Cajas Sorpresa</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Gourmet">Gourmet</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Videojuegos">Videojuegos</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="🎟️ Ichiban KUJI">🎟️ Ichiban KUJI</LinkListNav>
          </ItemListNav>
          <ItemListNav>
            <LinkListNav href="#" title="Kurogami JUMP!" css={css`color: #FE7503!important;`}>Kurogami JUMP!</LinkListNav>
          </ItemListNav>
        </ListNav>
          <ContainerCart>
            <BotonCard>
              <ImCart css={css`
              position: relative;
              `}/>
              <CardCount>0</CardCount>
            </BotonCard>
          </ContainerCart>
      </div>
    </>
  );
}

export default Heading;
