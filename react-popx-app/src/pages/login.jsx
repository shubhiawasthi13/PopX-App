import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex flex-col p-6 border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px] mx-auto">
        {/* Content Wrapper */}
        <div className="flex flex-col gap-6 w-full max-w-[335px] mx-auto mt-8">
          {/* Heading */}
          <div>
            <h1 className=" top-[40px] left-[20px] w-[188px] h-[69px] font-rubik font-semibold text-[24px] leading-[32px] text-[#1D2226] text-left">
              Signin to your <br /> PopX account
            </h1>

            <p className="top-[123px] left-[20px] w-[232px] h-[48px] font-rubik text-[18px] leading-[26px] text-[#1D2226] opacity-60 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col">
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
                className="w-[335px] h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] opacity-100 focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="flex flex-col gap-2 mt-[10px]">
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
                className="w-[335px] h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] opacity-100 focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <Link to="/profile">
              <button className="w-[335px] h-[46px] mt-[20px] bg-[#CBCBCB] rounded-[6px] font-rubik font-medium text-[16px] text-white cursor-pointer opacity-100">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
