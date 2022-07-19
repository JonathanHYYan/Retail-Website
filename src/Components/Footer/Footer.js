import {
  Brands,
  Btn,
  CService,
  Foot,
  Form,
  H2,
  Input,
  Legal,
  Logo,
  Misc,
  Policy,
  SignUp,
  Socials,
} from "./FooterStyles";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Foot>
        <SignUp>
          <H2>
            <Logo src={WhiteLogo} alt="Logo"></Logo>
            <h2>ennetts Sportswear</h2>
          </H2>
          <p>Stay in the loop for the newest fit</p>
          <Form>
            <Input placeholder="What's your email?"></Input>
            <Btn>Sign Up</Btn>
          </Form>
          <Socials>
            <BsFacebook style={{ cursor: "pointer" }} />
            <BsInstagram style={{ cursor: "pointer" }} />
            <FiTwitter style={{ cursor: "pointer" }} />
          </Socials>
        </SignUp>
        <CService>
          <Misc>
            <Brands>
              <h2>BRANDS</h2>
              <ul>
                <li>Yeezy</li>
                <li>Air Jordan</li>
                <li>Adidas</li>
                <li>Nike</li>
                <li>New Balance</li>
              </ul>
            </Brands>
            <Brands>
              <h2>PRODUCTS</h2>
              <ul>
                <li>Tops</li>
                <li>Leggings</li>
                <li>Tracksuits</li>
                <li>Hoodies</li>
                <li>Jackets</li>
                <li>Yoga Fits</li>
                <li>Kit & Jerseys</li>
              </ul>
            </Brands>
            <Brands>
              <h2>COMPANY</h2>
              <ul>
                <li>News</li>
                <li>Order Status</li>
                <li>Shipping and Delivery</li>
                <li>Returns</li>
                <li>Payment Methods</li>
                <li>Gift Cards</li>
              </ul>
            </Brands>
          </Misc>
        </CService>
      </Foot>
      <Legal>
        <Policy>
          <BiCopyright />
          <p> 2022</p>
          <p>|</p>
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Cookies Policy</p>
          <p>|</p>
          <p>Designed by JHYan</p>
        </Policy>
      </Legal>
    </>
  );
};

export default Footer;
