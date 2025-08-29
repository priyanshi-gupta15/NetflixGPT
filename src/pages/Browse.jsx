const Browse = () => {
  const movies = [
    { id: 1, title: "Stranger Things", img: "https://placehold.co/300x400" },
    { id: 2, title: "Wednesday", img: "https://placehold.co/300x400" },
    { id: 3, title: "Money Heist", img: "https://placehold.co/300x400" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Browse Movies</h1>
      <div className="grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-lg overflow-hidden">
            <img src={movie.img} alt={movie.title} className="w-full h-auto" />
            <h2 className="mt-2 text-lg">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
