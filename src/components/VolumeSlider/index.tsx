import {
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  Box,
  Flex
} from '@chakra-ui/react'
export default function VolumeSlider() {
  return (
    <Flex direction="column" alignItems="center" position="relative" minH="32" width="35px">
      <Box position="relative">
        {Array.from({ length: 10 }).map((_, index) => (
          <Box
            key={index}
            position="absolute"
            top={`${(index / 10) * 100}%`}
            left={0}
            right={0}
            height="1px"
            backgroundColor="black"
          />
        ))}

        <Slider
          aria-label="slider-ex-3"
          defaultValue={30}
          orientation="vertical"
          minH="28"
          colorScheme="blackAlpha"
          position="relative"
        >
          <SliderTrack>
            <SliderFilledTrack bg="black" />
          </SliderTrack>
          <SliderThumb boxSize={6}/>
        </Slider>
      </Box>
    </Flex>
  )
}
