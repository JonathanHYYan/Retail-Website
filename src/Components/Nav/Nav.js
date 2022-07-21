import {
  Logo,
  LLink,
  NavBar,
  NavLinks,
  NLink,
  NIcon,
  DropLinks,
  MobileInput,
  MobileLink,
  SearchInput,
  Search,
  MobileSearch,
} from "./NavStyles";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { BsSearch } from "react-icons/bs";
import ScrollToTop from "../UI/ScrollToTop";
import { AiOutlineMenu } from "react-icons/ai";
import Tag from "./Tag";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const dropNav = () => {
    setOpen(!open);
  };

  const searchToggle = () => {
    setSearch(!search);
  };

  const searchSpin = {
    transform: `rotate(${search ? 360 : 0}deg)`,
    transitionDuration: "0.4s",
    color: `${search ? "#dc0019" : "Grey"}`,
  };

  const navLinks = (
    <>
      <NLink to="">New Releases</NLink>
      <NLink to="">Women</NLink>
      <NLink to="">Men</NLink>
      <NLink to="">Best Sellers</NLink>
      <NLink to="">Browse</NLink>
      <NLink to="">Sell</NLink>
    </>
  );

  const MobileLinks = (
    <>
      <MobileLink to="">New Releases</MobileLink>
      <MobileLink to="">Women</MobileLink>
      <MobileLink to="">Men</MobileLink>
      <MobileLink to="">Best Sellers</MobileLink>
      <MobileLink to="">Browse</MobileLink>
      <MobileLink to="">Sell</MobileLink>
      <MobileLink to="">Log In</MobileLink>
      <MobileSearch to="">
        <MobileInput search={search} style={searchSpin} />
        <BsSearch style={searchSpin} onClick={searchToggle} />
      </MobileSearch>
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
        <Search>
          <SearchInput search={search} />
          <BsSearch style={searchSpin} onClick={searchToggle} />
          <NLink to="">Log In</NLink>
        </Search>
        <NIcon onClick={dropNav}>
          <AiOutlineMenu style={{ color: "white" }} />
        </NIcon>
      </NavBar>
      {open && <DropLinks>{MobileLinks}</DropLinks>}
      <Tag />
    </>
  );
};

export default Nav;
