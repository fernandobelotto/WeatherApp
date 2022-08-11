import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function App() {
  const [cityName, setCityName] = useState<string | null>(null);

  useEffect(() => {
    if(cityName) {
      localStorage.setItem("cityName", cityName);
    }
  }, [cityName]);

  useEffect(() => {
    console.log('localStorage.getItem(', localStorage.getItem("cityName"));
    if (localStorage.getItem("cityName")) {
      setCityName(localStorage.getItem("cityName"));
    }
  }, [])


  // TODO: make call to weather api at https://developer.accuweather.com/apis
  function getWeatherData() {}

  return (
    <>
      <Center h="100vh">
        <Box>
          <VStack spacing={3}>
            <Heading>Weather App</Heading>
            <Flex flexDir="row">
              <Input value={cityName ?? ""} onChange={e => setCityName(e.target.value)} placeholder="Enter a city" />
              <Button onClick={getWeatherData}>Check</Button>
            </Flex>
          </VStack>
        </Box>
      </Center>
    </>
  );
}
