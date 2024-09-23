import Filter from '../../components/filter';
import Sort from '../../components/sort';
import Aside from '../../components/aside';
import List from '../../components/list';

const Home = () => {
  return (
    <main className="flex max-xl:flex-col flex-1 gap-5">
      <div className="flex-1 flex flex-col gap-5 md:gap-10">
        <Filter />

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
