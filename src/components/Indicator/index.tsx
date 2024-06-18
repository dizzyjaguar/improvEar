interface IndicatorProps {
  variant: 'note' | 'chord' | 'time'
  settingOne: string
  settingTwo: string
}

export default function Indicator({
  variant,
  settingOne,
  settingTwo,
}: IndicatorProps) {
  return (
    <button>
      <div
        className={`space-y--1 bg-black hover:bg-alabaster-900 py-2 px-3 rounded-lg md:px-8 lg:px-8`}
      >
        <h2
          className={`h2 text-white uppercase text-left font-semibold text-sm sm:text-base md:text-3xl lg:text-3xl`}
        >
          {variant}
        </h2>
        <div className={`flex flex-row space-x-2 items-center justify-start`}>
          <p
            className={`text-white p text-xs sm:text-sm md:text-lg lg:text-2xl`}
          >
            {settingOne}
          </p>
          <div className={`bg-alabaster-100 p-1 rounded`}>
            <p
              className={`text-black p text-xs sm:text-sm md:text-lg lg:text-xl`}
            >
              {settingTwo}
            </p>
          </div>
        </div>
      </div>
    </button>
  )
}
