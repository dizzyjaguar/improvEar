import {
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  Box,
  Flex,
} from '@chakra-ui/react'

export default function VolumeSlider({ volume, setVolume }: any) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      position="relative"
      minH="32"
      width="35px"
    >
      <Box position="relative">
        {Array.from({ length: 12 }).map((_, index) => (
          <Box
            key={index}
            position="absolute"
            top={`calc(${(index / 12) * 86}% + 8px)`}
            left={0}
            right={0}
            height="1px"
            backgroundColor="black"
          />
        ))}

        <Slider
          aria-label="slider-ex-3"
          value={volume}
          onChange={val => setVolume(val)}
          orientation="vertical"
          minH="20"
          colorScheme="blackAlpha"
          position="relative"
          width="22px"
        >
          <SliderTrack width="5px">
            <SliderFilledTrack bg="black" />
          </SliderTrack>
          <SliderThumb boxSize={5} width={4} height={4} />
        </Slider>
      </Box>
    </Flex>
  )
}
