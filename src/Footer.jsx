import styled from "styled-components";

const Header = styled.section`
  padding: 0 10px;
  background-color: #bdd229;
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding: 0 10px;
  margin: 0 auto;
  color: #fff;
`;

const Icons = styled.section`
  display: flex;
  gap: 15px;
`;

const Input = styled.div`
  color: #555;
`;

const ContactText = styled.div`
  border-bottom: 1px solid #555;
  padding: 1.875rem 0;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 355px);
  color: #fff;
`;

const Button = styled.button`
  padding: 0.75rem 1.875rem;
  border-radius: 2rem;
  background-color: #bdd229;
`;

const Footer = () => {
  return (
    <footer>
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
            <form action="">
              <input type="email" placeholder="E-mail" name="email" />
              <Input>
                <input type="checkbox" name="terminos" id="terminos" />
                <label htmlFor="terminos">
                  He leído y acepto los términos y condiciones
                </label>
              </Input>
              <Button>SUSCRIBIRME</Button>
            </form>
          </div>
          <Icons></Icons>
        </ContactText>
        <Details>
          <div>
            <ul>
              <li>Horario de atencion al cliente online</li>
              <li>De Lunes a Viernes</li>
              <li>7:30 a 14:30</li>
              <li>Teléfono 966147399 ext 1</li>
            </ul>
            <ul>
              <li>Tienda física Alicante</li>
              <li>Calle Serrano, 11/CP 03003</li>
            </ul>
            <ul>
              <li>Horario tienda fisica</li>
              <li>De Lunes a Jueves</li>
              <li>10:00 a 14:00/16:30 a 20:30</li>
              <li>Viernes y Sábado</li>
              <li>10:00 a 14:00/16:30 a 21:00</li>
            </ul>
            <ul>
              <li>Teléfono: 966147399 ext 2</li>
              <li>WhatsApp: 604518007 </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Telefono oficiona:966147399 ext 1</li>
              <li>Info@kurogami.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>FAQ</li>
              <li>Dónde Estamo</li>
              <li>Condicones de uso</li>
              <li>Condiciones de compra</li>
              <li>Condiciones Kurogami Jump</li>
              <li>Formas de envío</li>
              <li>Envios Internacionales e Intracomunitarios</li>
              <li>Tarjetas Virtuales</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Promociones</li>
              <li>Distribución a tiendas</li>
              <li>Mapa del sitio</li>
              <li>Concursos y Sorteos </li>
              <li>Politica de privacidad</li>
              <li>Politica de cookies</li>
              <li>Aviso Legal</li>
              <li>Version movil</li>
            </ul>
          </div>
        </Details>
      </Main>
    </footer>
  );
};

export default Footer;
