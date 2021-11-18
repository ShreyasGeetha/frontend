const Sample = () => {
  return (
    <div>
      <div className="min-w-full max-w-3xl p-4 bg-gray-500">
        <div className="grid grid-cols-12 grid-rows-6 bg-white">
          <div className="col-start-1 col-span-6 rounded-r-3xl  ml-2 mt-2 mb-1 bg-pink-50">
            Hello
          </div>
          <div className="row-start-2 row-span-3 col-start-1 col-span-6 ml-2 mt-2 mb-1 rounded-1xl bg-pink-300">
            Content
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Sample;