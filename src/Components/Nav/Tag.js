import {
  TagList,
  TagScrollLeft,
  TagScrollRight,
  TagWindow,
  TLink,
  TLinkSell,
} from "./TagStyles";
import { useState, useRef } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Tag = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const slider = useRef(null);

  const onMouseDown = (e) => {
    setIsScrolling(true);
    if (slider) {
      setStartX(e.pageX - slider.current.offsetLeft);
      setScrollLeft(slider.current.scrollLeft);
    }
  };

  const onMouseLeave = (e) => {
    setIsScrolling(false);
  };

  const onMouseUp = (e) => {
    setIsScrolling(false);
  };

  const onMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    if (slider) {
      const x = e.pageX - slider.current.offsetLeft;
      const walk = (x - startX) * 3;
      slider.current.scrollLeft = scrollLeft - walk;
    }
  };

  const leftScroll = (e) => {
    slider.current.scrollLeft -= 600;
  };
  const rightScroll = (e) => {
    slider.current.scrollLeft += 600;
  };

  return (
    <TagWindow>
      <TagScrollLeft onClick={leftScroll}>
        <BsChevronDoubleLeft />
      </TagScrollLeft>
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
        <TLink to="">Reebok A</TLink>
        <TLink to="">Reebok B</TLink>
        <TLink to="">Reebok C</TLink>
        <TLink to="">Reebok D</TLink>
        <TLink to="">Reebok E</TLink>
        <TLink to="">Reebok F</TLink>
      </TagList>
      <TagScrollRight onClick={rightScroll}>
        <BsChevronDoubleRight />
      </TagScrollRight>
    </TagWindow>
  );
};

export default Tag;
