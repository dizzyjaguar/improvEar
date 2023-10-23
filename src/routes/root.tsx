import Air from '../components/icons/Air'
import Sun from '../components/icons/Sun'
import Water from '../components/icons/Water'

export default function Root() {
  return (
    <div
      className={`w-full h-screen p-10 rainbow-gradient flex justify-center items-center`}
    >
      <div
        className={`bg-white w-screen max-w-2xl h-3/5 rounded-md shadow-md pt-16`}
      >
        <h1 className={`text-center h1 mb-8`}>Improve your Ear</h1>
        <h3 className={`h3 text-center mb-6`}>Go ahead and take a listen</h3>
        <div className={`w-full flex justify-center items-center space-x-4`}>
          <Sun />
          <Water />
          <Air />
        </div>
      </div>
    </div>
  )
}
