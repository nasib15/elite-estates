const BlogsCard = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="lg:max-w-sm w-full mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
            src="https://img.freepik.com/free-photo/modern-country-houses-construction_1385-14.jpg?t=st=1714695904~exp=1714699504~hmac=c5c6545f1bf8cdd600f259ed9d8c1849d8207fdeb872428c07a810473638b61b&w=996"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top 10 Tips for First-Time Home Buyers
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Are you a first-time home buyer? Discover essential tips to guide
            you through the process, from budgeting and financing to finding the
            perfect property.
          </p>
          <a
            href="#"
            className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1abc9c] rounded-lg hover:bg-[#16a085] "
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
