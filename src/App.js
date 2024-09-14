import logo from './logo.svg';
import './App.css';
import { Center, Grid, GridItem, Heading, Box, Button, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function App() {
  let [screen, setScreen] = useState('camera');
  let [image, setImage] = useState(null);

  return (
    <Grid minHeight="100vh" w="100%" templateRows={"4em 1fr 10em"} templateColumns={"1fr"}>
      <GridItem h="100%" w="100%" bg="blue.500" alignContent={'center'}>
        <Center>
        <Heading>
          Chatatoulli
        </Heading>
        </Center>
      </GridItem>
      <GridItem h="100%" w="100%" bg="blue.500">
        {screen == 'camera' ?  (<CameraView />)
                            :  (<ChatMenu />) }
      </GridItem>
      <GridItem h="100%" w="100%" bg="red.500" alignContent="center">
        <Center h="100%" w="100%">
          <Button borderRadius="1em" m="20px" h="calc(100% - 40px)" w="calc(100% - 40px)" fontSize="larger">
              What do I make???
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
}

function CameraView() {
  let [stream, setStream] = useState(null);
  useEffect(async () => {
    let maybeStream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: "environment"} });
    setStream(maybeStream);
    return () => {
      stream.getTracks().forEach(function(track) {
        track.stop();
      });
    };
  }, []);
  return stream ? (
  <Box borderRadius="1em" m="20px" h="calc(100% - 40px)" w="calc(100% - 40px)" bg="yellow.400">
    
  </Box>) : (<Box borderRadius="1em" m="20px" h="calc(100% - 40px)" w="calc(100% - 40px)" bg="yellow.400">
      <Center>
        <Heading>
          We need camera permissions to work.
        </Heading>
      </Center>
    </Box>);
}
function ChatMenu() {
  return (
  <Box borderRadius="1em" m="20px" h="calc(100% - 40px)" w="calc(100% - 40px)" bg="green.400">
    
  </Box>);
}

export default App;
