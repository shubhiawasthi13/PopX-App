import {Link} from "react-router-dom"
export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div
        className="relative flex flex-col justify-end p-5 border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px]"
      >
        {/* Content Container */}
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="font-rubik font-medium text-[6vw] sm:text-[28px] text-[#1D2226]">
            Welcome to PopX
          </h1>
          <p className="font-rubik text-[4vw] sm:text-[18px] text-[#1D2226] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Link to ="/register" className="w-full h-12 bg-[#6C25FF] rounded-md flex items-center justify-center mt-4">
            <span className="font-rubik font-medium text-[4vw] sm:text-[16px] text-white">
              Create Account
            </span>
          </Link>
          <Link to ="/login" className="w-full h-12 bg-[#6C25FF]/30 rounded-md flex items-center justify-center">
            <span className="font-rubik font-medium text-[4vw] sm:text-[16px] text-[#1D2226]">
              Already Registered? Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
