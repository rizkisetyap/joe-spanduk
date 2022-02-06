/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cn from 'classnames';
import s from './Header.module.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { BsWhatsapp } from 'react-icons/bs';
import Image from 'next/image';
import img1 from 'components/images/hero(1).jpeg';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <header className={cn(s.root)}>
      <Carousel>
        <CarouselItem>
          <div className={cn(s.img, `bg-[url("/hero(1).jpeg")]`)} />
        </CarouselItem>
        <CarouselItem>
          <div className={cn(s.img, `bg-[url("/hero.jpeg")]`)} />
        </CarouselItem>
        <CarouselItem>
          <div className={cn(s.img, `bg-[url("/hero(2).jpeg")]`)} />
        </CarouselItem>
      </Carousel>
      <div className={s.caption}>
        <h1>Joe Spanduk</h1>
        <h4>Spanduk,Umbul2,Banner, Bendera</h4>
        <a
          href="https://api.whatsapp.com/send?phone=62858-6288-0925"
          className="rounded-full inline-flex items-center mt-4 z-10 bg-[#28bb17] text-slate-800 px-12 py-2"
        >
          <BsWhatsapp className="mr-2 w-6 h-6" />
          Order
        </a>
      </div>
    </header>
  );
};

export default Header;
