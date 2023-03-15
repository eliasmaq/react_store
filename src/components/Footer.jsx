import styled from "styled-components";

const Wrapper = styled.footer``;

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
  width: 680px;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
`;

const ContactText = styled.div`
  display: flex;
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
  grid-template-columns: repeat(4, 355px);
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
          <Icons>asdasd</Icons>
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
