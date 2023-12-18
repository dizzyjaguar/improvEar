export default function Player() {
  return (
    <>
      {/* quick menus */}
      <div className={`flex flex-row justify-around`}>
        <div className={`w-40 h-10 bg-black`}></div>
        <div className={`w-40 h-10 bg-black`}></div>
        <div className={`w-40 h-10 bg-black`}></div>
      </div>
      {/* spinner */}
      <div
        className={`w-60 h-60 bg-alabaster-100 border-[1px] border-black shadow-md rounded-full self-center`}
      ></div>
      <div className={`flex flex-row justify-around`}>
        <div className={`w-40 h-10 bg-black`}></div>
        <div className={`w-40 h-10 bg-black`}></div>
      </div>
    </>
  )
}
