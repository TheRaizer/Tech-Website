import CPUIcon from '../StaticImageFolder/CPU.png';
import GraphicsCardIcon from '../StaticImageFolder/GraphicsCard.png';
import RAMIcon from '../StaticImageFolder/RAM.png';

const parts = [
  { id: 0, name: 'CPU' },
  { id: 1, name: 'GPU' },
  { id: 2, name: 'RAM' },
];

const partsIcons = [
  { id: 0, src: CPUIcon, path: '' },
  { id: 1, src: GraphicsCardIcon, path: '' },
  { id: 2, src: RAMIcon, path: '' },
];

const partsPageData = [{ id: 1 }, { id: 2 }, { id: 3 }];

export { parts, partsIcons, partsPageData };
