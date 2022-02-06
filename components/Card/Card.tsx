import React from 'react';
import cn from 'classnames';
import s from './Card.module.css';
import Image from 'next/image';

interface Props {
  title?: string;
  image: string;
}
const Card: React.FC<Props> = ({ image, title }) => {
  return (
    <div className={s.card}>
      <div className={cn(s.image, 'group')}>
        <Image
          className="transition-all duration-300 group-hover:scale-125"
          src={image}
          alt={title}
          layout="fill"
          priority
        />
      </div>
      <h2 className={s.title}>{title}</h2>
    </div>
  );
};

export default Card;
