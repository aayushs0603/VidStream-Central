import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to Video Hub, your go-to platform for a diverse collection of high-quality videos across various genres. 
            Whether you're looking to learn something new, stay updated with the latest trends, get inspired, or simply 
            relax with entertaining content, Video Hub has it all.<br/>
            <b>Educational Content:</b> Dive into a vast library of educational videos covering topics from science and technology 
            to history and literature.Tutorials and How-Tos: Master new skills with our comprehensive tutorials and step-by-step guides 
            on everything from coding and cooking to fitness and DIY projects.<br/>
            <b>Reviews:</b> Make informed decisions with our in-depth reviews and comparisons of the latest gadgets, software, and consumer products.<br/>
            <b>Travel and Lifestyle:</b> Explore new destinations, discover lifestyle tips, and enjoy the best of food, fashion, and wellness content.<br/>
            <b>Entertainment:</b> Unwind with a variety of entertaining videos, including movie trailers, music videos, comedy sketches, and more.<br/>
            <b>Motivational and Inspirational:</b> Stay motivated with our collection of inspirational talks, success stories, and personal development videos.<br/>
            <b>Tech Insights:</b> Keep up with the latest advancements in technology with expert analysis, trend predictions, and explainer videos.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;