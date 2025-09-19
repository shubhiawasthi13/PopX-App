export default function Profile() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex flex-col border border-gray-200 bg-[#F7F8F9] w-full max-w-[375px] h-full max-h-[812px]">
        {/* Header */}
        <div className="relative w-full h-[68px] bg-white shadow-[0_3px_6px_#00000007]">
          <h2 className="absolute top-[27px] left-[15px] w-[146px] h-[22px] font-rubik font-normal text-[18px] text-[#1D2226] text-left">
            Account Settings
          </h2>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col gap-4 p-4">
          {/* Row: Image + Name + Email */}
          <div className="flex items-center gap-4">
            {/* Profile Picture */}
            <div className="relative w-[76px] h-[76px]">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-[76px] h-[76px] rounded-full object-cover"
              />
              {/* Edit Icon Overlay */}
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#6C25FF] rounded-full flex items-center justify-center">
                <img src="/camera.svg" alt="" />
              </span>
            </div>

            {/* Name + Email */}
            <div className="flex flex-col">
              <span className="font-rubik font-semibold text-[17px] text-[#1D2226]">
                Marry Doe
              </span>
              <span className="font-rubik text-[15px]">Marry@Gmail.Com</span>
            </div>
          </div>

          {/* Description */}
          <p className="absolute top-[204px] left-[20px] w-[337px] h-[63px] font-rubik text-[14px] leading-[22px] text-[#1D2226] capitalize opacity-100">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
