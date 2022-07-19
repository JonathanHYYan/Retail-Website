import {
  Logo,
  LLink,
  NavBar,
  NavLinks,
  NLink,
  TagList,
  TLink,
  TLinkSell,
  NIcon,
} from "./NavStyles";
import BlackLogo from "../../assets/BlackLogo.jpeg";
import { BsSearch } from "react-icons/bs";
import ScrollToTop from "../UI/ScrollToTop";
import {AiOutlineMenu} from "react-icons/ai";
import { useEffect, useState } from "react";

const Nav = () => {
  // const [isScrolling, setIsScrolling] = useState(false);
  // const [clientX, setClientX] = useState(0);
  // const [scrollX, setScrollX] = useState(0);

  // const onMouseDown = (e) => {
  //   setIsScrolling(true);
  //   setClientX(e.clientX);
  // };

  return (
    <>
      <NavBar>
        <LLink to="/">
          <Logo src={BlackLogo} />
        </LLink>
        <ScrollToTop />
        <NavLinks>
          <NLink to="">New Releases</NLink>
          <NLink to="">Women</NLink>
          <NLink to="">Men</NLink>
          <NLink to="">Best Sellers</NLink>
          <NLink to="">Browse</NLink>
          <NLink to="">Sell</NLink>
          <NLink to="">Log In</NLink>
          <NLink to="">
            <BsSearch style={{ fontSize: "1em", margin: "0 1rem 0 4rem" }} />
          </NLink>
          <NIcon><AiOutlineMenu/></NIcon>
        </NavLinks>
      </NavBar>
      <TagList
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseUp}
        // onMouseMove={onMouseMove}
      >
        <TLinkSell to="">Sell Item</TLinkSell>
        <p>OR</p>
        <TLink to="">Air Jordan 1</TLink>
        <TLink to="">Nike Dunk</TLink>
        <TLink to="">New Balance</TLink>
        <TLink to="">Yeezy</TLink>
        <TLink to="">Air Jordan 4</TLink>
        <TLink to="">Air Jordan 1 Low</TLink>
        <TLink to="">Yeezy 350</TLink>
        <TLink to="">Yeezy Slides</TLink>
        <TLink to="">Dunk High</TLink>
        <TLink to="">Yeezy 700</TLink>
        <TLink to="">Tag A</TLink>
        <TLink to="">Tag B</TLink>
        <TLink to="">Tag C</TLink>
        <TLink to="">Tag D</TLink>
        <TLink to="">Tag E</TLink>
        <TLink to="">Tag F</TLink>
      </TagList>
    </>
  );
};

export default Nav;
