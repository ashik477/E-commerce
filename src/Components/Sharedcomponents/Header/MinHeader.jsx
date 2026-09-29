import logo from "../../../assets/image/my name.png";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MinHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between container py-2 mx-auto px-24">
        <img className="w-24" src={logo} alt="" />
        <div>
          <label className="input translate-x-20 w-120">
            <svg
              className="h-[2em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="pr-54"
              required
              placeholder="Search . . ."
            />
          </label>
        </div>
        <div className="flex gap-6 ">
          <div className="flex items-center  gap-0.5">
            <FaRegUser className="text-3xl" />
            <div>
              <p className="ct text-xs">Account</p>
              <p className="ts">LOGIN</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5 ">
            <IoCartOutline className="text-3xl" />
            <div>
              <p className="ct text-xs">Cart</p>
              <p className="ts">LOGIN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MinHeader;
