import * as React from 'react'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ChakraProvider, Flex, Grid, Text } from '@chakra-ui/react'
import { Header } from '../Components/Header'
import { BatteryCharging, Coffee, LightbulbFilament } from 'phosphor-react'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import imgCrie from '../assets/crieFlix.png'
import imgBook from '../assets/bookStore.png'
import imgfeed from '../assets/feed.png'



export const Home = () => {
    const handleDragStart = (e: any) => e.preventDefault();

    const items = [
      <Box
            ml={"7.25rem"}
            height={"600px"}
            width={"90"}
            border={"1px solid #0AC6EF"}
            borderRadius={8}
        >
            <img src={imgCrie} onDragStart={handleDragStart} role="presentation" />
        </Box>,
        <Box
            ml={"7.25rem"}
            height={"400px"}
            width={"90"}
            border={"1px solid #0AC6EF"}
            borderRadius={8}
        >
            <img src={imgBook} onDragStart={handleDragStart} role="presentation" />
        </Box>,
        <Box
            ml={"7.25rem"}
            height={"600px"}
            width={"90%"}
            border={"1px solid #0AC6EF"}
            borderRadius={8}
        >
            <img src={imgfeed} onDragStart={handleDragStart} role="presentation" />
        </Box>
       
       
    ];
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Grid
                templateColumns='repeat(2, 1fr)'
                gap={6}
                width='100%'
                height={600}
                bg='rgb(21,151,180) radial-gradient(circle, #266061 5%, #121b2e 90%)'>
                <div>

                </div>
                <div>
                    <Text
                        color="blue.300"
                        fontWeight={"semibold"}
                        fontSize="2.5rem"
                        textAlign={"left"}
                        mt="8.25rem"
                        ml="5rem"
                    >
                        Desenvolvedora

                    </Text>
                    <Text
                        color="blue.300"
                        fontWeight={"semibold"}
                        fontSize="2.5rem"
                        textAlign={"left"}

                        ml="5rem"
                    >

                        Full Stack
                    </Text>
                    <Flex
                        direction="row"
                        ml={"4rem"}
                        mt={"2.25rem"}
                        mb="2rem"
                        gap={16}
                    >
                        <LightbulbFilament
                            size={50}
                            color="#1597b4" />
                        <Coffee
                            size={50}
                            color="#1597b4" />
                        <BatteryCharging
                            size={50}
                            color="#1597b4" />
                    </Flex>
                </div>

            </Grid>
            <Grid
                width={"100%"}
                templateColumns='repeat(4, 1fr)'
            >
                <Accordion

                    allowToggle
                    alignItems={"center"}
                    ml={"11.25rem"}
                    mt={"3.5rem"}
                    display={"flex"}
                    gap={8}

                >
                    <AccordionItem w={72} border={"none"} >
                        <h2>
                            <AccordionButton >
                                <Box

                                    textAlign='left'
                                    _hover={{
                                        borderBottom: '4px solid  blue'
                                    }}  >
                                    Linguagens de Programação
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            display={'flex'}
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Link to={''}>
                                Java
                            </Link>
                            <Link to={''}>
                                JavaScript
                            </Link>
                            <Link to={''}>
                                TypeScript
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem w={60} border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box textAlign='left'
                                    _hover={{
                                        borderBottom: '4px solid  blue'
                                    }}  >
                                    Banco de dados
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            display={'flex'}
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Link to={''}>
                                PostgreSQL
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem w={60} border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box textAlign='left'
                                    _hover={{
                                        borderBottom: '4px solid  blue'
                                    }} >
                                    Bibliotecas
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            display={'flex'}
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Link to={''}>
                                React
                            </Link>
                            <Link to={''}>
                                Axios
                            </Link>
                            <Link to={''}>
                                Express
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem w={60} border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box textAlign='left'

                                    _hover={{
                                        borderBottom: '4px solid  blue'
                                    }}  >
                                    Frameworks
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            display={'flex'}
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Link to={''}>
                                Chakra UI
                            </Link>
                            <Link to={''}>
                                Bootstrap
                            </Link>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Grid>

            <Flex
                mt={"8.5rem"}
                direction={"column"}
            >
                <Text
                    fontSize={"2rem"}
                    textAlign={'center'}
                >Projetos</Text>
                <Flex
                    mt={"1.43rem"}
                    padding={"5rem"}
                    justify={'space-between'}
                    width='100%'
                >
                    <div>

                    </div>
                    <AliceCarousel animationDuration={3} animationType={"slide"} mouseTracking items={items} />

                </Flex>
            </Flex>

        </Flex>
    )
}
