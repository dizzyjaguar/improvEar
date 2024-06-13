export default function TapeSpinner() {
  return (
    <>
      <div
        className={`w-14 md:w-20 lg:w-20 h-[1.5px] border-1px bg-[#000000] mr-4`}
      ></div>
      <div
        className={`w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-[#989898] border-[1px] border-black shadow-md rounded-full relative flex items-center justify-center`}
      >
        <div className="relative w-full h-full ">
          <div
            className={`w-1 h-1 md:w-1.5 md:h-1.5 lg:w-1.5 lg:h-1.5 bg-[#000000] border-black rounded-full absolute`}
            style={{
              top: '15%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
          <div
            className={`w-1 h-1 md:w-1.5 md:h-1.5 lg:w-1.5 lg:h-1.5 bg-[#000000] border-black rounded-full absolute`}
            style={{
              top: '50%',
              left: '15%',
              transform: 'translate(-50%, 100%)',
            }}
          ></div>
          <div
            className={`w-1 h-1 md:w-1.5 md:h-1.5 lg:w-1.5 lg:h-1.5 bg-[#000000] border-black rounded-full absolute`}
            style={{
              top: '50%',
              left: '85%',
              transform: 'translate(-50%, 100%)',
            }}
          ></div>
        </div>
      </div>
      <div
        className={`w-14 md:w-20 lg:w-20 h-[1.5px] border-1 bg-[#000000] ml-4`}
      ></div>
    </>
  )
}
