const Loading = () => {
  return (
    <div>
      <h1 className="text-7xl mb-4">DrinksPage</h1>
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <div className="card" key={i}>
            <div className="h-4 bg-gray-200 w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 w-1/2 mb-4"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
