import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex flex-col justify-center p-6 border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px] mx-auto">
        {/* Login Form */}
        <div className="flex flex-col gap-4 w-full max-w-[335px] mx-auto">
          <h1 className="font-rubik font-semibold text-[24px] text-[#1D2226]">
            Create your PopX account
          </h1>
          <div className="flex flex-col gap-2">
            <label
              className="font-rubik text-[14px] text-[#6C25FF]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label
              className="font-rubik text-[14px] text-[#6C25FF]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-rubik text-[14px] text-[#6C25FF]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-rubik text-[14px] text-[#6C25FF]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-rubik text-[14px] text-[#6C25FF]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="font-rubik text-[14px] text-[#6C25FF]">
              Are you an Agency?*
            </label>
            <div className="flex flex-row gap-4 ml-2">
              <label className="flex items-center gap-2 text-[#1D2226] font-rubik text-[14px]">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="w-4 h-4 text-[#6C25FF] focus:ring-0"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-[#1D2226] font-rubik text-[14px]">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="w-4 h-4 text-[#6C25FF] focus:ring-0"
                />
                No
              </label>
            </div>
          </div>

          <button
            to="/profile"
            className="w-full h-12 mt-6 bg-[#6C25FF] rounded-md font-rubik font-medium text-[16px] text-white hover:bg-[#5721cc] transition-colors"
          >
            <Link to="/profile">Create Account</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
