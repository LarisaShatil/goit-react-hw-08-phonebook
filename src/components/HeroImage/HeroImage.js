import React from 'react';

import PhoneBook from '../../images/phone-book.png';
import s from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <div className={s.container}>
      <img src={PhoneBook} alt='Phonebook' />
    </div>
  )
}

export default HeroImage;
