import React from 'react';
import CPUIcon from '../StaticImageFolder/CPU.png';
import GraphicsCardIcon from '../StaticImageFolder/GraphicsCard.png';
import RAM from '../StaticImageFolder/RAM.png';
import './PartsChoices.css';

const icons = [
  {
    url: CPUIcon,
  },
  {
    url: GraphicsCardIcon,
  },
  {
    url: RAM,
  },
];

icons.forEach((icon, index) => (icon['id'] = index));

function PartsChoices() {
  return (
    <div className='parts-choices'>
      <h1>Choose Your Area</h1>
      <section className='parts-images'>
        {icons.map((icon) => {
          return <img key={icon.id} src={icon.url} alt='unavailable'></img>;
        })}
      </section>
    </div>
  );
}

export default PartsChoices;
