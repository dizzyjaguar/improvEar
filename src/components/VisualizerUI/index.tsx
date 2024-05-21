import { Slider, SliderTrack, SliderFilledTrack } from '@chakra-ui/react'

export default function VisualizerUI({ volume }: any) {
  return (
    <div style={{ display: 'flex' }}>
      <Slider
        aria-label="slider-ex-3"
        value={volume}
        orientation="vertical"
        minH="20"
        colorScheme="blackAlpha"
        position="relative"
        marginRight={2}
      >
        <SliderTrack width="5px">
          <SliderFilledTrack bg="#5EC775" />
        </SliderTrack>
      </Slider>

      <Slider
        aria-label="slider-ex-4"
        value={volume}
        orientation="vertical"
        minH="20"
        colorScheme="blackAlpha"
        position="relative"
      >
        <SliderTrack width="5px">
          <SliderFilledTrack bg="#5EC775" />
        </SliderTrack>
      </Slider>
    </div>
  )
}
