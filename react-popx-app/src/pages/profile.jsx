export default function Profile() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex flex-col border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px] p-6">
        {/* Account Settings Header */}
        <h2 className="font-rubik font-semibold text-[18px] text-[#1D2226] mb-6">
          Account Settings
        </h2>

        {/* Profile Card */}
        <div className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-sm">
          {/* Profile Picture + Status */}
          <div className="relative w-16 h-16">
            <img
              src="/vite.svg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#6C25FF] border-2 border-white rounded-full"></span>
          </div>

          {/* Name and Email */}
          <div className="flex flex-col">
            <span className="font-rubik font-semibold text-[16px] text-[#1D2226]">
              Marry Doe
            </span>
            <span className="font-rubik text-[14px] text-[#6C25FF]">
              Marry@gmail.com
            </span>
          </div>

          {/* Description */}
          <p className="font-rubik text-[14px] text-[#1D2226] opacity-80 leading-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
