import { FaPlane, FaUserCircle } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';
import { FaEarthAmericas } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-200 flex justify-between">
      <Link to="/" className="flex gap-3">
        <FaPlane className="text-3xl md:text-4xl text-purple-800" />
        <h2 className="font-bold text-xl md:text-2xl max-sm:hidden">
          Plane Scape
        </h2>
      </Link>

      <nav className="flex gap-4 sm:gap-6">
        <button className="flex items-center gap-1">
          <MdDiscount className="text-purple-800" />

          <span className="font-semibold text-gray-600">Deals</span>
        </button>
        <button className="flex items-center gap-1">
          <FaEarthAmericas className="text-purple-800" />
          <span className="font-semibold text-gray-600">Discover</span>
        </button>
        <button className="flex items-center gap-1">
          <FaUserCircle className="text-purple-800 text-2xl" />
          <span className="font-semibold text-gray-600">Joane Smith</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
