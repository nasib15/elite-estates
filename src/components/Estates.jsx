import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";

const Estates = () => {
  const estates = useLoaderData();
  return (
    <div className="my-24">
      <h2 className="font-bold text-center text-4xl">Estates</h2>
      <p className="text-center my-4 text-lg opacity-85 w-[60%] mx-auto">
        Explore our Estate Section for a curated selection of luxurious
        residences, each redefining upscale living. Find your perfect sanctuary
        today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estates;
