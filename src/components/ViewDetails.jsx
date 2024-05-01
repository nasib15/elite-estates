import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ViewDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("/estates.json")
      .then((res) => res.json())
      .then((data) => {
        setEstates(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const estate = estates.find((estate) => estate.id == id);
  const {
    image,
    description,
    estate_title,
    location,
    price,
    segment_name,
    status,
    facilities,
    area,
  } = estate;

  return (
    <div className="mx-auto max-w-[96%] mt-6">
      <h2 className="text-center font-bold text-3xl">Details</h2>
      <div className="flex lg:flex-row flex-col gap-10 mt-10 shadow-lg p-10">
        <div className="lg:min-w-[40%] min-h-[100%]">
          <img
            className=" w-full rounded-xl lg:min-h-full max-h-96 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl">{estate_title}</h2>
          <p className="text-lg font-bold mt-5">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-2xl font-bold text-[#e55039] mt-5">
            {segment_name}
          </p>
          <div className="divider"></div>
          <p className="text-lg font-bold">Short Description: </p>

          <p className="text-lg mt-2">{description}</p>
          <div className="divider"></div>

          <div className="flex lg:flex-row flex-col gap-4 justify-between mt-5">
            <p className="text-lg font-bold">
              Season: <span className="font-normal">{price}</span>
            </p>
            <p className="text-lg font-bold">
              Average Cost: <span className="font-normal">{status}$</span>
            </p>
            <p className="text-lg font-bold">
              Total Visitors Per Year:{" "}
              <span className="font-normal">{area}</span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="mt-5">
            <p className="text-lg font-bold">Facilities</p>
            <ul className="list-disc list-inside mt-2">
              {facilities.map((facility) => (
                <li key={facility.id}>{facility.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
