/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    segment_name,
    estate_title,
    price,
    status,
    location,
    area,
    image,
    short_description,
  } = estate;

  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="500"
      className="w-full flex flex-col shadow-lg"
    >
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody className="flex-1">
        <div className="flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold text-2xl"
          >
            {estate_title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <Button className="bg-[#1abc9c]">{status}</Button>
          </Typography>
        </div>
        <div className="my-2">
          <p className="font-bold">Category: {segment_name}</p>
        </div>
        <Typography color="gray" className="my-4">
          {short_description}
        </Typography>
        <div className="space-y-1">
          <div>
            <Typography color="gray" className="flex items-center gap-2">
              <HiOutlineOfficeBuilding />
              {area}
            </Typography>
          </div>
          <div>
            <Typography color="gray" className="flex items-center gap-2">
              <CiLocationOn />
              {location}
            </Typography>
          </div>
          <div>
            <Typography color="gray" className="flex items-center gap-2">
              <CiLocationOn />
              {price}
            </Typography>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-3 flex flex-col">
        <Link to={`/details/${id}`}>
          <Button className="bg-[#1abc9c] py-4" fullWidth>
            VIEW DETAILS
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EstateCard;
