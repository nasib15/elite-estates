/* eslint-disable react/no-unescaped-entities */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, setUser, setLoading, updateProfileInfo } =
    useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.url.value;

    updateProfileInfo(name, photo).then(() => {
      toast.success("Profile Updated Successfully");
      setUser(user);
      setLoading(false);
    });
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="flex justify-center mt-6"
    >
      <Helmet>
        <title>Update Profile | Elite Estates</title>
      </Helmet>
      <Card className="shadow-xl p-14" color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Update Profile
        </Typography>
        <div className="mt-6">
          <div className="card w-96 bg-base-100 border">
            <figure className="px-10 pt-6">
              <img
                src={user.photoURL}
                alt="Shoes"
                className="rounded-full w-20 h-20"
              />
            </figure>
            <div className="py-6 space-y-3 text-center">
              <h2 className="font-semibold">{user.displayName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleUpdateProfile}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              placeholder="Enter your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              PhotoURL
            </Typography>
            <Input
              type="text"
              size="lg"
              name="url"
              placeholder="https://example.com/some-image.jpg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
          </div>
          <Button type="submit" className="mt-6 bg-[#1abc9c]" fullWidth>
            Update
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
