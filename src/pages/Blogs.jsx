/* eslint-disable react/no-unescaped-entities */
import BlogsCard from "../components/BlogsCard";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="max-w-[96%] mx-auto">
      <Helmet>
        <title>Blogs | Elite Estates</title>
      </Helmet>
      <div className="text-center my-6">
        <h2 className="text-3xl font-semibold">Blogs Section</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <BlogsCard></BlogsCard>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:max-w-sm w-full mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
                src="https://img.freepik.com/free-photo/outdoor-summer-brightly-cumulonimbus-scene-climate_1417-1077.jpg?t=st=1714696137~exp=1714699737~hmac=9ed9257ea21d02c6606d48564ab92d8f108d92162b0ea32850757be777df21d2&w=1380"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Benefits of Investing in Real Estate
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore the advantages of investing in real estate, including
                potential for passive income, long-term appreciation, tax
                benefits, and diversification of investment portfolio.
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
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="lg:max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
                src="https://img.freepik.com/free-photo/beautiful-scenery-mangal-das-garcas-park-city-belem-brazil_181624-31712.jpg?t=st=1714696158~exp=1714699758~hmac=2b46ce2103f4f631b5ad2d539d5aa2f3fe99911f2dc1401fc5efd2e33f15f00d&w=1380"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  How to Stage Your Home for a Quick Sale
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Learn valuable tips and techniques for staging your home to
                attract potential buyers, increase its appeal, and achieve a
                quicker sale at a favorable price.
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
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="lg:max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
                src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150763.jpg?t=st=1714696376~exp=1714699976~hmac=58cd6dc20852adc80dfaaa2d6af63e47f313198cf4272e30fb7516de07d8dad0&w=1380"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Navigating the Real Estate Market During COVID-19
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Stay informed about the latest trends and strategies for buying
                or selling real estate during the COVID-19 pandemic. Discover
                how to adapt and thrive in today's market.
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
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
                src="https://img.freepik.com/free-photo/beautiful-shot-golcuk-puddles-karacasu-turkey_181624-45544.jpg?t=st=1714696415~exp=1714700015~hmac=1b99f2da62e5286be40fb8c6232c0c2ceb6cffcce719e320e65b077354dbd7fc&w=1380"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Understanding Options: Fixed vs. Adjustable Rate
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Confused about mortgage options? Learn the differences between
                fixed-rate and adjustable-rate mortgages, and discover which
                option best suits your financial goals and lifestyle.
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
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="lg:max-w-sm mt-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-52 lg:h-64 w-full object-cover"
                src="https://img.freepik.com/free-photo/aerial-shot-green-resort-water-park-near-drava-river-slovenia_181624-9355.jpg?t=st=1714696450~exp=1714700050~hmac=8125d114814b52d77cb34326a5f1b6c505f574cec593711587ed7ab0df1f9e31&w=1380"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Importance of Location in Real Estate
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location matters! Find out why the location of a property is
                crucial in real estate, affecting its value, desirability, and
                potential for future growth.
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
      </div>
    </div>
  );
};

export default Blogs;
