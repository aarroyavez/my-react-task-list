import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import taskListIcon from '../assets/taskListIcon.png';
import {FaTasks} from "react-icons/fa"
function Home() {
  return (
    <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        p={[4, 6, 10]}
        color="white"
        fontFamily="Poppins"
        boxSizing="border-box"
        bgGradient="linear(to-b, #161B22, #0D1117)"
    >
        <Box 
            // mb={[2, 6]}
            >
            <Link to="/tasks">
                <img 
                    src={taskListIcon} 
                    alt="Home" 
                    width={200} 
                />
            </Link>
        </Box>
        <Heading 
        as="h1" 
        fontSize={['6xl', '4xl', '6xl']} 
        fontWeight="bold" 
        mb={[4, 6]}
        >
        My Task List
        </Heading>
        <Text 
            fontSize={['3xl', '2xl', '4xl']} 
            fontWeight="bold" 
            mb={[6, 100]}
            mt={['2rem', '2rem', '0rem']}
            textAlign={['center', 'center', 'center']}
            >
            <strong>
                La aplicación para administrar tareas
            </strong>
        </Text>
        <Box 
        position="fixed" 
        top="4rem" 
        left="1rem">
        <Link 
        to="/tasks"
        >
          <button >
            <FaTasks 
            size="40"
            color="rgb(0, 170, 255)"
            hover={{ opacity: '0.8' }}
            active={{ opacity: '0.6' }}
            /> 
        </button>
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
