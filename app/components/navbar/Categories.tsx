import { usePathname, useSearchParams } from 'next/navigation';
import { IconType } from "react-icons";
import dynamic from 'next/dynamic';

const GiWindmill = dynamic(() => import('react-icons/gi').then((mod) => mod.GiWindmill as IconType), { ssr: false });
const GiIsland = dynamic(() => import('react-icons/gi').then((mod) => mod.GiIsland as IconType), { ssr: false });
const TbBeach = dynamic(() => import('react-icons/tb').then(mod => mod.TbBeach as IconType), { ssr: false });
const TbMountain = dynamic(() => import('react-icons/tb').then(mod => mod.TbMountain as IconType), { ssr: false });
const TbPool = dynamic(() => import('react-icons/tb').then(mod => mod.TbPool as IconType), { ssr: false });
const GiBoatFishing = dynamic(() => import('react-icons/gi').then(mod => mod.GiBoatFishing as IconType), { ssr: false });
const GiCastle = dynamic(() => import('react-icons/gi').then(mod => mod.GiCastle as IconType), { ssr: false });
const GiCaveEntrance = dynamic(() => import('react-icons/gi').then(mod => mod.GiCaveEntrance as IconType), { ssr: false });
const GiForestCamp = dynamic(() => import('react-icons/gi').then(mod => mod.GiForestCamp as IconType), { ssr: false });
const GiCactus = dynamic(() => import('react-icons/gi').then(mod => mod.GiCactus as IconType), { ssr: false });
const GiBarn = dynamic(() => import('react-icons/gi').then(mod => mod.GiBarn as IconType), { ssr: false });
const FaSkiing = dynamic(() => import('react-icons/fa').then(mod => mod.FaSkiing as IconType), { ssr: false });
const BsSnow = dynamic(() => import('react-icons/bs').then(mod => mod.BsSnow as IconType), { ssr: false });
const IoDiamond = dynamic(() => import('react-icons/io5').then(mod => mod.IoDiamond as IconType), { ssr: false });
const MdOutlineVilla = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineVilla as IconType), { ssr: false });

import Container from '../Container';
import CategoryBox from '../CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach as IconType,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill as IconType,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla as IconType,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: GiIsland as IconType,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool as IconType,
    description: 'This property has a pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland as IconType,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing as IconType,
    description: 'This property is near a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing as IconType,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle as IconType,
    description: 'This property is in a castle!',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance as IconType,
    description: 'This property is in a cave!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp as IconType,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow as IconType,
    description: 'This property is in the arctic!',
  },
  {
    label: 'Desert',
    icon: GiCactus as IconType,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn as IconType,
    description: 'This property is in a barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond as IconType,
    description: 'This property is luxurious!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon as IconType}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;