import React from 'react'
import { Box, 
  // Button, 
  Flex, 
  // Image, 
  // Stack,
   Text } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  // PopoverAnchor,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <Box height="100px"  >
        <Flex fontSize={"20px"} lineHeight={"21.25px"} fontWeight={"500"} fontFamily={" Inter, ui-sans-serif"} padding={"30px"} color={"grey"} /* "rgb(55, 65, 81)"*/ justifyContent={"space-around"}>
       <Box> 

        <Text color={"black"} fontWeight={700} fontSize={"37px"}> masa<span style={{ color:'red'}} >i</span></Text>
       </Box>
          <Text><Link to="/lecture">Lecture </Link> </Text>
          <Text> <Link to="/assignment">Assignments </Link> </Text>
          <Text> <Link to="/quizes">Quizes </Link> </Text>
          <Text><Link to="/discussion">Discussion </Link> </Text>
          <Text><Link to="/notification">Notification </Link> </Text>
          <Text><Link to="/message">Message </Link> </Text>
          <Text><Link to="/elective">Elective </Link> </Text>
          <Text><Link to="/courses">Courses </Link> </Text>
          <Text><Link to="/tickets">Tickets </Link> </Text>
          <Text><Link to="/announcements">Announcements </Link> </Text>
          <Box>
            <Popover>
              <PopoverTrigger>
                <Text>Vishal(fw20_1205)</Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Manage Account</PopoverHeader>
                <PopoverBody>Profile</PopoverBody>
                <PopoverBody>Transcript</PopoverBody>
                <hr />
                <PopoverBody>Log Out</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Flex>
      </Box>
      <hr />
    </>
  )
}

export default Navbar