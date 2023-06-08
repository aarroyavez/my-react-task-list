import { Box, Heading, Text, Image, Divider, Flex, WrapItem, Wrap, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import taskListIcon from '../assets/taskListIcon.png';
import { motion } from "framer-motion";
import {RiReactjsFill} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi";
import {IoMdCall} from "react-icons/io";
function Home() {
  const whatsappMessage = "¡Hola! Estoy interesado en contactarte.";
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
        bgGradient="linear(to-b, #0D1117, #161B22)"
    >
      <Link to="/tasks">
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={taskListIcon} alt="Home" width={200} />
        </motion.div>
      </Link>
        <Heading 
        as="h1" 
        fontSize={['5xl', '4xl', '6xl']} 
        fontWeight="bold" 
        mb={[4, 6]}
        align="center"
        >
        My Task List
        </Heading>
        <Text 
            fontSize={['3xl', '2xl', '4xl']} 
            fontWeight="bold" 
            mb={[6, 10]}
            mt={['2rem', '2rem', '0rem']}
            textAlign={['center', 'center', 'center']}
            >
            <strong>
                La aplicación para administrar tareas
            </strong>
        </Text>
        <Divider maxWidth="1000px" 
        my={[2, 4, 4]} 
        borderBottomWidth="2px" b
        orderBottomColor="white" 
        opacity="0.2" 
        flexDirection="column" 
        />

        <Flex fontSize={["xl", "xl", "xl"]}
              maxWidth="800px"
            >
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="white" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]}>
                ¡No dudes en contactarme!
              </Text>
            </Flex>
        
            <Box py={1} mb={0}>
              <Wrap spacing={8} justify={["center", "center", "start"]} width="100%">
                <WrapItem>
                  <Link to="mailto:aarroyavez@unal.edu.co">
                    <Button colorScheme='teal' variant='solid'><HiOutlineMail />email</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="tel:++573113248955">
                    <Button colorScheme='blue'><IoMdCall />Llámame</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to={`https://wa.me/3113248955?text=${encodeURIComponent(whatsappMessage)}`}>
                    <Button colorScheme='whatsapp'>Whatsapp</Button>
                  </Link>
                </WrapItem>
                </Wrap>
                </Box>

        <Divider maxWidth="1000px" my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="white" opacity="0.2" flexDirection="column" />
          <Box mt={10} textAlign="center">
            <Link to="/">
              <ButtonGroup spacing={4}>
                <Button colorScheme="whiteAlpha" size="lg" leftIcon={<RiReactjsFill />} variant="outline">
                  Volver al Inicio
              </Button>
              
            </ButtonGroup>
          </Link>
        </Box>

    </Box>
  );
}

export default Home;
