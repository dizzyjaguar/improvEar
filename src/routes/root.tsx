import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div
      className={`w-full h-screen p-10 rainbow-gradient flex justify-center items-center`}
    >
      <div
        className={`bg-white w-screen max-w-2xl h-3/5 rounded-md shadow-md pt-16`}
      >
        <Outlet />
      </div>
    </div>
  )
}
