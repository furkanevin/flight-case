import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Flights from './pages/flights';
import Header from './components/header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-5 bg-gray-200 min-h-screen flex flex-col gap-8">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-flights" element={<Flights />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
