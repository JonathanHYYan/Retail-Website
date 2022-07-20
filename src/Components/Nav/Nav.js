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
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const slider = useRef(null);

  const onMouseDown = (e) => {
    setIsScrolling(true);
    if(slider){setStartX(e.pageX - slider.current.offsetLeft)
    setScrollLeft(slider.current.scrollLeft)
    console.log(startX)};
  };

  const onMouseLeave = (e) => {
    setIsScrolling(false);
  };

  const onMouseUp = (e) => {
    setIsScrolling(false);
  };

  const onMouseMove = (e) => {
    if(!isScrolling)return;
    e.preventDefault();
    if(slider){const x = e.pageX - slider.current.offsetLeft
    console.count(isScrolling)
    console.log(x, startX);
    const walk = x - startX;
    slider.current.scrollLeft = scrollLeft - walk;}
  };



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
          <NIcon>
            <AiOutlineMenu />
          </NIcon>
        </NavLinks>
      </NavBar>
      <TagList
        ref={slider}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
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
