import { airlineOptions, stopOptions, timeOptions } from '../../constants';

const RadioList = ({ title, items, name }) => {
  return (
    <div className="mb-5">
      <h1 className="font-bold mb-3">{title}</h1>

      <div className="flex flex-col gap-3">
        {items.map((item, key) => (
          <div key={key} className="flex item-center gap-2">
            <input type="radio" id={item.name} name={name} />
            <label
              htmlFor={item.name}
              className="w-full flex justify-between gap-10"
            >
              <span>{item.name}</span>

              <span>${item?.price}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sort = () => {
  return (
    <div className="px-5">
      <div className="flex flex-col gap-2 mb-5">
        <label className="font-bold">Sort by:</label>
        <select className="py-1 px-2 rounded-md bg-white">
          <option value="">Lowest Price</option>
          <option value="">Highest Price</option>
        </select>
      </div>

      <RadioList title="Arrival Time" name="time" items={timeOptions} />
      <RadioList title="Stops" name="stops" items={stopOptions} />
      <RadioList
        title="Airlines Included"
        name="airlines"
        items={airlineOptions}
      />
    </div>
  );
};

export default Sort;
