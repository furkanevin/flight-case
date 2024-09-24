import Card from './card';
import { useQuery } from '@tanstack/react-query';
import { getFlights } from '../../api';
import Loader from '../loader';
import Error from './../error/index';

const List = () => {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['flights'],
    queryFn: getFlights,
  });

  // console.log(data?.flights)

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} refetch={refetch} />
      ) : (
        <div className="flex flex-col gap-12">
          {data.flights.slice(0, 3).map((flight) => (
            <Card flight={flight} key={flight.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
