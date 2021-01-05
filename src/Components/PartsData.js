import CPUIcon from "../StaticImageFolder/CPU.png";
import GraphicsCardIcon from "../StaticImageFolder/GraphicsCard.png";
import RAMIcon from "../StaticImageFolder/RAM.png";

const parts = [
  { id: 1, name: "CPU" },
  { id: 2, name: "GPU" },
  { id: 3, name: "RAM" },
];

const partsIcons = [
  { id: 1, src: CPUIcon },
  { id: 2, src: GraphicsCardIcon },
  { id: 3, src: RAMIcon },
];

const partsPageData = [{ id: 1 }, { id: 2 }, { id: 3 }];

export { parts, partsIcons, partsPageData };
