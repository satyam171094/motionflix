import { Box, Container, Heading , Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../asset/1.jpg'
import img2 from '../asset/2.jpg'
import img3 from '../asset/3.jpg'
import img4 from '../asset/4.jpg'
import img5 from '../asset/5.png'


const headingOption = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    padding:"4",
    size:"4xl"
}

const Home = () => {
  return (
    <Box>
    <MyCarousel />
    <Container minH={'100vh'} minW={'container.xl'} p={"16"}>
        <Heading 
        textTransform={'uppercase'} 
        py={'2'} 
        w={"fit-content"}
        borderBottom={'2px solid'} 
        m="auto"
        >
            Services
        </Heading>
        <Stack
        h='full'
        p={'4'}
        alignItems ={"center"}
        direction={["column", 'row']}
        >
        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>

        <Text letterspacing ={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa corporis rem. Placeat pariatur sapiente similique quidem non a modi maxime. Et fugiat reprehenderit quod vel porro perspiciatis, quaerat, accusamus ullam natus fuga laboriosam, iste provident eveniet tempora sit. Quaerat, quasi aliquam voluptas incidunt sint perferendis, explicabo sit, repellendus veniam facere rerum. Corporis quod, odit maxime officia voluptatibus molestias eius minima facilis accusamus eligendi aspernatur temporibus non! Alias praesentium beatae, reprehenderit quo aspernatur dignissimos sunt voluptates maiores explicabo cupiditate facere aut quidem nihil tempore obcaecati aliquid! Veritatis officia dignissimos impedit, corporis soluta rem eveniet quisquam. Commodi sint fugit ducimus nesciunt.
        </Text>
        </Stack>

    </Container>

    </Box>
  )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bg={'blackAlpha.600'} color={'white'} {...headingOption}>
                Watch The Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOption}>
                VR Gaming is Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOption}>
            Virtual gaming replaces physical games
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOption}>
            The old days fade, leaving space for new horizons
            </Heading>
        </Box>
        
    </Carousel>
);

export default Home
