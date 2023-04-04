import React from 'react'
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <Box height="100px"  >
        <Flex fontSize={"20px"} lineHeight={"21.25px"} fontWeight={"500"} fontFamily={" Inter, ui-sans-serif"} padding={"30px"} color={"grey"} /* "rgb(55, 65, 81)"*/ justifyContent={"space-around"}>

          <Box>
            <Text color={"black"} fontWeight={700} fontSize={"37px"}> masa<span style={{ color: 'red' }} >i</span></Text>
          </Box>

          <Link to="/lecture">Lecture </Link>
          <Link to="/assignment">Assignments </Link>
          <Link to="/quizes">Quizes </Link>
          <Link to="/discussion">Discussion </Link>
          <Link to="/notification">Notification </Link>
          <Link to="/message">Message </Link>
          <Link to="/elective">Elective </Link>
          <Link to="/courses">Courses </Link>
          <Link to="/tickets">Tickets </Link>
          <Link to="/announcements">Announcements </Link>

          {/* Box containg user details */}
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