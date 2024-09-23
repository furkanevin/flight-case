const Error = ({ info, refetch }) => {
  return (
    <div className="grid">
      <div className="bg-red-500 text-center p-10 rounded-lg text-white  flex flex-col items-center gap-5">
        <h3>Sorry, there was an error while fetching flights</h3>
        <h1 className="text-2xl font-semibold">{info}</h1>
      </div>

      <button
        className="border border-black w-fit py-1 px-5 rounded-md mt-5 mx-auto hover:bg-black hover:text-white transition"
        onClick={refetch}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
