import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { IoAirplaneSharp } from 'react-icons/io5';

const Card = ({ flight }) => {
  // iniş zamanında kalkışı çıkarıp geçen süreyi bul
  const differenceInMs =
    new Date(flight.estimatedLandingTime) - new Date(flight.scheduleDateTime);

  const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));

  // Milisaniyeyi saate ve dakikaya çevir
  const h = Math.floor(differenceInMinutes / 60);
  const m = differenceInMinutes % 60;

  // rastgele fiyat belirle
  const price = Math.round(Math.random() * 500 + 100);

  return (
    <div className="box rounded-bl-none flex flex-col gap-5 relative shadow">
      <h3 className="font-bold text-lg">
        <span>{flight.flightName}</span>
        <span className="text-gray-500 ms-2">({flight.flightNumber})</span>
      </h3>

      <div className="flex justify-between gap-5 lg:gap-10 xl:gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <FaPlaneDeparture /> <span>Departure</span>
          </div>

          <h6 className="font-bold text-lg">{flight.scheduleTime}</h6>

          <p className="text-gray-500">Airport: MXP</p>
        </div>

        <hr className="bg-gray-700 h-1 flex-1 " />

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-bold text-green-700">Alitalia</p>
          <IoAirplaneSharp className="text-purple-800 text-lg" />
          <p className="text-gray-700 font-semibold text-sm">
            {h}h {m}m (Nonstop)
          </p>
        </div>

        <hr className="bg-gray-700 h-1 flex-1" />

        <div>
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <FaPlaneArrival /> <span>Arrival</span>
          </div>

          <h6 className="font-bold text-lg">
            {new Date(flight.estimatedLandingTime).toLocaleTimeString()}
          </h6>

          <p className="text-gray-500">
            Airport: {flight.route.destinations[0]}
          </p>
        </div>
      </div>

      <div>
        <h5 className="text-purple-800 font-bold text-xl">Price:${price}</h5>
        <span className="font-semibold text-gray-600">Round Trip</span>
      </div>

      <button className="bg-purple-800 hover:bg-purple-700 rounded-tl-lg rounded-br-lg  font-bold text-white p-4 h-fit absolute bottom-0 right-0">
        Book Flight
      </button>

      <button className="underline text-purple-800 hover:text-purple-700 absolute p-2  left-0 rounded-b-lg -bottom-10 bg-gray-300">
        Check the details
      </button>
    </div>
  );
};

export default Card;
