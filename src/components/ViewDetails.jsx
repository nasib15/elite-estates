/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "./Loading";
import { MdSell } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

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
    <div>
      <Helmet>
        <title>Details | {estate_title}</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="mx-auto max-w-[96%] mt-6"
      >
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
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold mt-5">
                Location: <span className="font-normal">{location}</span>
              </p>
              <div className="text-2xl ">
                <div
                  className={
                    status === "rent"
                      ? "text-[#FFBE00] flex items-center gap-1"
                      : "text-[#C40C0C] flex items-center gap-1"
                  }
                >
                  <span>
                    <MdSell />
                  </span>
                  {status}
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-[#1abc9c] mt-5">
              {segment_name}
            </p>
            <div className="divider"></div>
            <p className="text-lg font-bold">Description: </p>
            <p className="text-lg mt-2">{description}</p>
            <div className="divider"></div>

            <div className="flex lg:flex-row flex-col gap-4 lg:gap-16 mt-5">
              <p className="text-lg font-bold">
                Price: <span className="font-normal">{price}</span>
              </p>
              <p className="text-lg font-bold">
                Area: <span className="font-normal">{area}</span>
              </p>
            </div>
            <div className="divider"></div>
            <div className="mt-5">
              <p className="text-xl font-bold">Facilities</p>
              <ul className="mt-2">
                {facilities.map((facility) => (
                  <li className="flex items-center gap-2 font-medium capitalize">
                    <span>
                      <SiTicktick />
                    </span>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
