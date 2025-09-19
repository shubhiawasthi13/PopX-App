import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex flex-col p-6 border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px] mx-auto">
        {/* Signup Form */}
        <div className="flex flex-col w-full max-w-[335px] mx-auto mt-8">
          {/* Heading */}
          <h1 className="absolute top-[40px] left-[20px] w-[188px] h-[69px] font-rubik font-medium text-[28px] leading-[36px] text-[#1D2226] opacity-100">
            Create your PopX account
          </h1>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="absolute top-[140px] left-[20px] w-[335px] flex flex-col gap-1">
              <label
                htmlFor="fullname"
                className="font-rubik text-[14px] text-[#6C25FF]"
              >
                Full Name <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Marry Doe"
                className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            {/* Phone Number */}
            <div className="absolute top-[209px] left-[20px] w-[335px] flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="font-rubik text-[14px] text-[#6C25FF]"
              >
                Phone number <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="9876543210"
                className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            {/* Email */}
            <div className="absolute top-[278px] left-[20px] w-[335px] flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-rubik text-[14px] text-[#6C25FF]"
              >
                Email address <span className="text-[#DD4A3D]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="marry@example.com"
                className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            {/* Password */}
            <div className="absolute top-[340px] left-[20px] w-[335px] flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-rubik text-[14px] text-[#6C25FF]"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            {/* Company Name */}
            <div className="absolute top-[420px] left-[20px] w-[335px] flex flex-col gap-1">
              <label
                htmlFor="company"
                className="font-rubik text-[14px] text-[#6C25FF]"
              >
                Company name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            {/* Radio Buttons */}
            <div className="absolute top-[495px] left-[20px] w-[335px] flex flex-col gap-1">
              <label className="font-rubik text-[14px]">
                Are you an Agency?*
              </label>
              <div className="flex flex-row gap-6 ml-1">
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
          </div>
        </div>

        {/* Button fixed at bottom */}
        <div className="mt-auto w-full max-w-[335px] mx-auto">
          <Link to="/profile">
            <button className="w-full h-12 bg-[#6C25FF] rounded-md font-rubik font-medium text-[16px] text-white hover:bg-[#5721cc] transition-colors">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
