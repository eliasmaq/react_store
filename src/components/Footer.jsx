import styled from "styled-components";
import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiTwitchLine,
  RiInstagramLine,
} from "react-icons/ri";

const Wrapper = styled.footer`
  font-family: "Mulish";
`;

const Header = styled.section`
  padding: 0 10px;
  background-color: #bdd229;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Card = styled.div`
  text-align: center;
  padding: 0 10px;
`;
const Image = styled.img`
  margin: 0 auto;
`;

const Main = styled.section`
  background-color: #171717;
  padding: 0 15rem;
  margin: 0 auto;
  color: #fff;
`;

const Icons = styled.section`
  display: flex;
  gap: 15px;
`;

const Input = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #555;
`;

const InputEmail = styled.input`
  width: 500px;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
`;

const ContactText = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #555;
  padding: 1.875rem 0;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
  color: #fff;
  padding: 3.75rem 0 6rem 0;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  color: rgb(85, 85, 85);
  width: 153px;
  font-size: 0.875rem;
  padding: 0.75rem 1.875rem;
  border-radius: 2rem;
  background-color: #bdd229;
`;

const Table = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Links = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 48 48' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3Bclip-rule:evenodd%3Bstroke-linejoin:round%3Bstroke-miterlimit:2%3B'%3E%3Crect id='redes' x='0' y='0' width='48' height='48' style='fill:none%3B'/%3E%3CclipPath id='_clip1'%3E%3Crect id='redes1' serif:id='redes' x='0' y='0' width='48' height='48'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clip1)'%3E%3Cg id='path2320' transform='matrix(0.800006 0 0 0.800006 0.000447471 -0.000580557)'%3E%3Cpath d='M30.214 56.238C26.763 56.238 23.337 55.662 20.031 54.523C13.921 52.418 8.73 48.505 5.414 43.503C2.397 38.952 1.213 33.538 2.058 28.384C2.05 28.389 2.041 28.393 2.033 28.397L0.914 28.437C0.522 28.277 0.218 27.952 0.081 27.547C-0.079 27.075 -0.002 26.533 0.298 26.022C0.798 25.168 1.978 24.382 3.312 23.978C3.727 22.976 4.221 22.011 4.792 21.091C4.72 21.084 4.649 21.078 4.578 21.074L3.638 20.612C3.344 20.275 3.219 19.829 3.294 19.385C3.381 18.876 3.72 18.432 4.247 18.136C4.891 17.773 5.776 17.566 6.675 17.566C6.956 17.566 7.236 17.586 7.513 17.624C8.657 16.455 9.948 15.417 11.36 14.529C14.905 9.418 18.412 5.93 22.075 3.87L22.265 3.763L23.658 3.799L23.843 3.916C25.168 4.753 26.362 6.725 27.568 10.085C27.971 10.069 28.373 10.062 28.767 10.062C33.56 10.062 38.018 11.167 42.382 13.439C44.868 13.063 46.919 12.888 48.805 12.888C51.772 12.888 54.4 13.326 56.84 14.229L57.032 14.3L57.89 15.299L57.931 15.499C58.724 19.374 56.184 26.407 54.713 29.494C54.788 29.835 54.856 30.181 54.913 30.528C57.153 31.174 58.715 32.405 59.416 33.348C59.796 33.86 60.188 34.625 59.899 35.371C59.721 35.828 59.328 36.158 58.845 36.252L57.969 36.127C57.1 35.684 56.158 35.291 55.156 34.959C55.079 36.416 54.848 37.861 54.467 39.281C55.519 40.398 56.248 41.763 56.427 42.998C56.524 43.664 56.539 44.57 56.066 45.117L55.003 45.605C54.933 45.605 54.861 45.601 54.788 45.589L53.905 45.056C53.551 44.577 53.162 44.109 52.739 43.656C52.354 44.379 51.926 45.072 51.461 45.734C48.652 49.726 44.711 52.759 40.063 54.5C36.986 55.654 33.673 56.238 30.214 56.238Z' style='fill:${({
    color,
  }) => color || "rgb(189 210 41)"}%3B'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const Footer = () => {
  return (
    <Wrapper>
      <Header>
        <Card>
          <Image
            src="https://kurogami.com/min/img/testimonios/footer-mechanicaljapan_1.png"
            alt="mechanical-logo"
          />
          <p>Tienda de confianza de Mechanical Japan desde 2010</p>
        </Card>
        <Card>
          <Image
            src="https://kurogami.com/min/img/testimonios/footer-mechanicaljapan_1.png"
            alt="mechanical-logo"
          />
          <p>Tienda de confianza de Mechanical Japan desde 2010</p>
        </Card>
        <Card>
          <Image
            src="https://kurogami.com/min/img/testimonios/footer-mechanicaljapan_1.png"
            alt="mechanical-logo"
          />
          <p>Tienda de confianza de Mechanical Japan desde 2010</p>
        </Card>
        <Card>
          <Image
            src="https://kurogami.com/min/img/testimonios/footer-mechanicaljapan_1.png"
            alt="mechanical-logo"
          />
          <p>Tienda de confianza de Mechanical Japan desde 2010</p>
        </Card>
      </Header>
      <Main>
        <ContactText>
          <div>
            <p>
              !No te lo pierdas y sé el primero en recibir nuestras novedades!
            </p>
            <Form>
              <InputEmail type="email" placeholder="E-mail" name="email" />
              <Input>
                <input type="checkbox" name="terminos" id="terminos" />
                <label htmlFor="terminos">
                  He leído y acepto los términos y condiciones
                </label>
              </Input>
              <Button>SUSCRIBIRME</Button>
            </Form>
          </div>
          <Icons>
            <Links href="#" color="rgb(0,102,204)">
              <RiFacebookFill />
            </Links>
            <Links href="#" color="rgb(255,0,0)">
              <RiYoutubeFill />
            </Links>
            <Links href="#" color="rgb(92,193,252)">
              <RiTwitterFill />
            </Links>
            <Links href="#" color="rgb(153,51,255)">
              <RiTwitchLine />
            </Links>
            <Links href="#" color="rgb(167,29,132)">
              <RiInstagramLine />
            </Links>
          </Icons>
        </ContactText>
        <Details>
          <div>
            <Table>
              <li>Horario de atencion al cliente online</li>
              <li>De Lunes a Viernes</li>
              <li>7:30 a 14:30</li>
              <li>Teléfono 966147399 ext 1</li>
            </Table>
            <Table>
              <li>Tienda física Alicante</li>
              <li>Calle Serrano, 11/CP 03003</li>
            </Table>
            <Table>
              <li>Horario tienda fisica</li>
              <li>De Lunes a Jueves</li>
              <li>10:00 a 14:00/16:30 a 20:30</li>
              <li>Viernes y Sábado</li>
              <li>10:00 a 14:00/16:30 a 21:00</li>
            </Table>
            <Table>
              <li>Teléfono: 966147399 ext 2</li>
              <li>WhatsApp: 604518007 </li>
            </Table>
          </div>
          <div>
            <Table>
              <li>Telefono oficiona:966147399 ext 1</li>
              <li>Info@kurogami.com</li>
            </Table>
          </div>
          <div>
            <Table>
              <li>FAQ</li>
              <li>Dónde Estamos</li>
              <li>Condicones de uso</li>
              <li>Condiciones de compra</li>
              <li>Condiciones Kurogami Jump</li>
              <li>Formas de envío</li>
              <li>Envios Internacionales e Intracomunitarios</li>
              <li>Tarjetas Virtuales</li>
            </Table>
          </div>
          <div>
            <Table>
              <li>Promociones</li>
              <li>Distribución a tiendas</li>
              <li>Mapa del sitio</li>
              <li>Concursos y Sorteos </li>
              <li>Politica de privacidad</li>
              <li>Politica de cookies</li>
              <li>Aviso Legal</li>
              <li>Version movil</li>
            </Table>
          </div>
        </Details>
      </Main>
    </Wrapper>
  );
};

export default Footer;
