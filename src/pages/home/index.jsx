import Filter from '../../components/filter';
import Sort from '../../components/sort';
import Aside from '../../components/aside';
import List from '../../components/list';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFlights } from '../../api';

const Home = () => {

  const [flights,setFlights] = useState();

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['flights'],
    queryFn: getFlights,
  });

  useEffect(()=>{
    setFlights(data?.flights)
  },[])

  

  const [destFrom,setDestFrom] = useState()
  const [destTo,setDestTo] = useState()

  useEffect(()=>{
    getDestinations();
  },[])

  const getDestinations = async () => {
    const to = await data.flights.map((i) => {
      const dest = i.route?.destinations[0];
      return dest;
    });

    const from = await data.flights.map((i) => {
      const dest = i.route?.destinations[0];
      return dest;
    });

    setDestFrom(await from);
    setDestTo(await to);
  };


  return (
    <main className="flex max-xl:flex-col flex-1 gap-5">
      <div className="flex-1 flex flex-col gap-5 md:gap-10">
        <Filter destFrom={destFrom} destTo={destTo} />

        <div className="flex gap-3 max-sm:flex-col-reverse">
          <section className="flex-1">
            <List />
          </section>

          <div>
            <Sort />
          </div>
        </div>
      </div>

      <Aside />
    </main>
  );
};

export default Home;
