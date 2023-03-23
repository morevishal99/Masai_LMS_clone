import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Notification = () => {
  return (
    <>
      <Box padding={"20px"} height={"100px"}>
        <Text margin={"20px 20px"} fontSize={"30px"} fontWeight={600} fontFamily="Inter, ui-sans-serif"> Notification</Text>
      </Box>
      <hr />
    </>
  )
}
export default Notification