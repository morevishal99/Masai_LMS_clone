import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Input, Select } from '@chakra-ui/react'


const Lecture = () => {
  return (<>
    <Box padding={"20px"} height={"100px"}>
      <Text margin={"20px 20px"} fontSize={"30px"} fontWeight={600} fontFamily="Inter, ui-sans-serif">Lectures</Text>
    </Box>
    <hr />

    <Box padding={"20px"} bg="rgb(243,244,246)">
      <Box width={"95%"} margin="auto">

        <Box bg={"white"} padding={"15px"}>
          <Text fontSize="20px" fontWeight={450}>Title</Text>
          <Input placeholder='Search...' />
        </Box>
        <Flex bg={"white"} padding={"15px"} justifyContent={"space-between"}>
          <Box width={"33%"}>
            <Text fontSize="20px" fontWeight={450}>Category</Text>
            <Select placeholder='Choose'>
              <option value='option1'>Coding</option>
              <option value='option2'>Problem</option>
              <option value='option3'>Dsa</option>
              <option value='option3'>Coding Platform</option>
              <option value='option3'>Csbt</option>
              <option value='option3'>Scrum</option>

            </Select>
          </Box>
          <Box width={"33%"}>
            <Text fontSize="20px" fontWeight={450}>Type</Text>
            <Select placeholder='Choose'>
              <option value='option1'>Live</option>
              <option value='option2'>Video</option>
              <option value='option3'>Reading</option>
            </Select>
          </Box>
          <Box width={"33%"}>
            <Text fontSize="20px" fontWeight={450}>Instructors</Text>
            <Select placeholder='Choose'>
              <option value='option1'>Albert Sebastian</option>
              <option value='option2'>Ankush Chimnani</option>
              <option value='option3'>Akshay Gupta</option>
              <option value='option3'>Aditya</option>
              <option value='option3'>Pulkit Tyagi</option>
              <option value='option3'>Prabhanjan </option>
              <option value='option3'>Swananad Kadam</option>
              <option value='option3'>Tanya</option>
              <option value='option3'>Manish Kumar</option>
            </Select>
          </Box>
        </Flex>
        <Box >
          <Flex gap={"7px"} bg={"white"} padding={"15px"} justifyContent={"left"}>
            <Box width={"33%"}>
              <Text>Scheduled</Text>
              <Input type={"date"} />

            </Box>
            <Box width={"33%"}>
              <Text fontSize="20px" fontWeight={450}>Optional</Text>
              <Select placeholder='Choose'>
                <option value='option2'>Yes</option>
                <option value='option3'>No</option>
              </Select>
            </Box>

          </Flex>
        </Box>
        <Box padding={"15px"} bg="white" alignContent={"right"} >
          <Button colorScheme={"red"} color={"white"} bg="blue">Reset Filter</Button>
        </Box>

        <Box> data to be mapped here</Box>
      </Box>

    </Box>


  </>
  )
}

export default Lecture