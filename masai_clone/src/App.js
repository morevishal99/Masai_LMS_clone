// import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';
// import {Navbar} from './Component/Navbar';

function App() {
  return (
    <Box>
      <Navbar/>
      <AllRoutes/>
    </Box>
  );
}

export default App;
