import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />

    </Box>
  );
}

export default App;
