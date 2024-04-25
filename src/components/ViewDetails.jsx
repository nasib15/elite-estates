import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id == id);

  return <div className="flex gap-14 max-w-[96%] mx-auto my-10">
    <img src={estate.image} alt="estate" className="w-[40%] rounded-xl" />
    <div className="w-1/2">
      <h2>{estate.estate_title}</h2>
      <p>{estate.segment_name}</p>
      <p>{estate.short_description}</p>
      <p>{estate.price}</p>
      <p>{estate.location}</p>
      
    </div>
  </div>;
};

export default ViewDetails;
