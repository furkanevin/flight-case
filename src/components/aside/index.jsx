import { FaCar, FaHotel } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';

const Card = ({ src, icon, text }) => {
  return (
    <div className="aspect-square  max-md:w-[200px] max-h-[250px] relative">
      <img
        src={src}
        alt="car"
        className="aspect-square rounded-lg object-cover "
      />

      <div className="flex flex-col gap-3 absolute text-white bottom-2 left-2 text-3xl">
        {icon}

        <h3 className="font-semibold">{text}</h3>
      </div>
    </div>
  );
};

const Aside = () => {
  return (
    <div className="flex xl:flex-col justify-between gap-5 max-xl:mt-10">
      <Card src="/car.jpg" text="Car Rentals" icon={<FaCar />} />
      <Card src="/hotel.webp" text="Hotel" icon={<FaHotel />} />
      <Card src="/suitcase.webp" text="Travel Packages" icon={<GiPalmTree />} />
    </div>
  );
};

export default Aside;
