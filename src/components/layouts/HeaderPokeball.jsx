const HeaderPokeball = () => {
  return (
    <header>
      <div className="bg-[#DD1A1A] h-[100px] w-full relative">
        <div className="absolute z-10 left-[10%] top-[40%] h-[75px]">
          <img className="h-[50px] sm:h-full " src="/images/logo.png" alt="Pokemon logo" />
        </div>
      </div>
      <div className="bg-[#0C0C0C] h-[50px] w-full relative">
        <div className="absolute right-[2%] top-[-50%] w-[95px] h-[95px] sm:w-[105px] sm:h-[105px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 117 117"
            fill="none"
          >
            <circle
              cx="58.5"
              cy="58.5"
              r="52.5"
              fill="white"
              stroke="black"
              strokeWidth="12"
            />
            <circle
              cx="58.5"
              cy="58.5"
              r="25.5"
              fill="#212121"
              stroke="black"
              strokeWidth="12"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default HeaderPokeball;
