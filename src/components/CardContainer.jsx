import React from 'react';
import Card from './Card';
import ButtonList from './ButtonList';

const CardContainer = () => {
  return (
    <div className='flex flex-wrap'>
        <ButtonList />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
} 

export default CardContainer
