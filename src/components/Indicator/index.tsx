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
      <div className={`space-y-1 bg-black hover:bg-alabaster-900 p-2 rounded-lg`}>
        <h2 className={`h2 text-white uppercase text-left`}>{variant}</h2>
        <div className={`flex flex-row space-x-2 items-center`}>
          <p className={`text-white p`}>{settingOne}</p>
          <div className={`bg-alabaster-100 p-1 rounded`}>
            <p className={`text-black p`}>{settingTwo}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
