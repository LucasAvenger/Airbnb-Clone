import Container from "../Container";

import { FaSkiing } from 'react-icons/fa';
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";


export const categories = [
  {
    label: 'beach',
    icon: TbBeach,
    description: 'this property is close to the beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'this property has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a poll!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on a iland!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property close to a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'this property has skiing activities!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'this property is in a castle!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'this property has camping activities!'
  },
  {
    label: 'Artic',
    icon: BsSnow,
    description: 'this property has camping activities!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'this property is close to a cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'this property is in the desert'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'this property is in the barn'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'this property is luxurious'
  },


]

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
      <div className="
             pt-4
             flex
             flex-row
             items-center
             justify-between
             overflow-x-auto
            ">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}

      </div>
    </Container>
  );
}
export default Categories;