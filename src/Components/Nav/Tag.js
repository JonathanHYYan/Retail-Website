import { TagList, TagScroll, TagWindow, TLink, TLinkSell } from "./TagStyles";
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
      <TagScroll onClick={leftScroll}>
        <BsChevronDoubleLeft />
      </TagScroll>
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
      <TagScroll onClick={rightScroll}>
        <BsChevronDoubleRight />
      </TagScroll>
    </TagWindow>
  );
};

export default Tag;
