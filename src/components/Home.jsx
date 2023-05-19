import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../asset/1.jpg';
import img2 from '../asset/2.jpg';
import img3 from '../asset/3.jpg';
import img4 from '../asset/4.jpg';
import img5 from '../asset/5.png';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  padding: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH="100vh" maxW="container.xl" p="16" mx="auto">
        <Heading
          textTransform="uppercase"
          py="2"
          w="fit-content"
          borderBottom="2px solid"
          m="auto"
          maxW={['100%', '820px']}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={['2', '4']}
          alignItems="center"
          justifyContent="center"
          direction={['column', 'column']}
        >
          <Image src={img5} h={['20', '400']} filter="hue-rotate(-130deg)" />
          <Text
            letterSpacing="wide"
            lineHeight={['160%', '190%']}
            p={['2', '4', '16']}
            textAlign="center"
            maxW={['100%', '820px']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo tempora deleniti
            quod, est eos veniam autem asperiores rem, nam laudantium ut, similique ducimus amet
            sequi et voluptas iusto rerum at aliquid numquam corporis ipsa reprehenderit? Porro
            iusto magnam, sit vero deleniti, non nemo rem accusamus neque, quibusdam ab. Libero,
            reprehenderit recusandae labore eaque, aspernatur aliquid modi soluta ullam voluptatum
            unde repellat in molestias quod? Doloribus ratione illum quisquam earum consequuntur
            nam voluptatem, velit culpa maiores. Inventore esse illum excepturi dolores est natus
            aliquid maiores sunt omnis deserunt accusantium amet enim eos adipisci minima hic, nam
            provident quo aperiam quasi vel? Dignissimos accusantium aliquid aut vel explicabo
            voluptatum molestias fugit harum reprehenderit incidunt. Quis cumque explicabo omnis
            officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <CarouselSlide image={img1} background="blackAlpha.600" color="white" heading="Watch The Future" />
    <CarouselSlide image={img2} background="whiteAlpha.600" color="black" heading="VR Gaming is Future" />
    <CarouselSlide
      image={img3}
      background="whiteAlpha.600"
      color="black"
      heading="Virtual gaming replaces physical games"
    />
    <CarouselSlide
      image={img4}
      background="whiteAlpha.600"
      color="black"
      heading="The old days fade, leaving space for new horizons"
    />
  </Carousel>
);

const CarouselSlide = ({ image, background, color, heading }) => (
  <Box w="full" h="100vh">
    <Image src={image} h="full" w="full" objectFit="cover" />
    <Heading bg={background} color={color} {...headingOption}>
      {heading}
    </Heading>
  </Box>
);

export default Home;
