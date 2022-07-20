import {
  Logo,
  LLink,
  NavBar,
  NavLinks,
  NLink,
  NIcon,
  DropLinks,
  DLink,
} from "./NavStyles";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { BsSearch } from "react-icons/bs";
import ScrollToTop from "../UI/ScrollToTop";
import { AiOutlineMenu } from "react-icons/ai";
import Tag from "./Tag";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const dropNav = () => {
    setOpen(!open);
  };

  const navLinks = (
    <>
      <NLink to="">New Releases</NLink>
      <NLink to="">Women</NLink>
      <NLink to="">Men</NLink>
      <NLink to="">Best Sellers</NLink>
      <NLink to="">Browse</NLink>
      <NLink to="">Sell</NLink>
      <NLink to="">Log In</NLink>
    </>
  );

  const dropLinks = (
    <>
      <DLink to="">New Releases</DLink>
      <DLink to="">Women</DLink>
      <DLink to="">Men</DLink>
      <DLink to="">Best Sellers</DLink>
      <DLink to="">Browse</DLink>
      <DLink to="">Sell</DLink>
      <DLink to="">Log In</DLink>
      <DLink to="">
        <BsSearch style={{ fontSize: "1em" }} />
      </DLink>
    </>
  );

  return (
    <>
      <NavBar>
        <LLink to="/">
          <Logo src={WhiteLogo} />
        </LLink>
        <ScrollToTop />
        <NavLinks>{navLinks}</NavLinks>
        <NLink to="">
          <BsSearch style={{ fontSize: "1em" }} />
        </NLink>
        <NIcon onClick={dropNav}>
          <AiOutlineMenu style={{ color: "white" }}/>
        </NIcon>
      </NavBar>
      {open && <DropLinks>{dropLinks}</DropLinks>}
      <Tag />
    </>
  );
};

export default Nav;
