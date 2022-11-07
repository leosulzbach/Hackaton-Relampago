import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { Bluetooth } from 'phosphor-react'


export const Home = () => {



    return (
        <Flex>
            <Grid
                templateColumns='repeat(3, 1fr)'
                ml={"6rem"}
                mt={"5rem"}
                alignItems={"center"}
                width='100%'
                height="100%"
            >
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"300px"}
                    h={"400px"}
                >
                    <Text
                    p={"1rem"}
                    fontSize={"1.5rem"}
                    fontWeight={"semibold"}
                    color={"blue.500"}
                    >A fazer</Text>

                </Box>
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"300px"}
                    h={"400px"}>
                    <Text>Fazendo</Text>
                </Box>
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"300px"}
                    h={"400px"}>
                    <Text>Feito</Text>
                </Box>

            </Grid>
        </Flex>
    )

}
