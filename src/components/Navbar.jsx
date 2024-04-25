import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[96%] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="space-y-2 dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#1abc9c] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#1abc9c] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/updateProfile"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#1abc9c] text-white px-3 py-2 rounded-lg w-full inline-block"
                      : "hover:bg-[#1abc9c] hover:text-white px-3 py-2 rounded-lg w-full inline-block"
                  }
                >
                  Update Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-bold">
            Elite <span className="text-[#1abc9c] ml-0">Estates</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 gap-2">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#1abc9c] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#1abc9c] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/updateProfile"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#1abc9c] text-white px-3 py-2 rounded-lg"
                    : "hover:bg-[#1abc9c] hover:text-white px-3 py-2 rounded-lg"
                }
              >
                Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn bg-[#1abc9c] text-white hover:bg-[#16a085]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
