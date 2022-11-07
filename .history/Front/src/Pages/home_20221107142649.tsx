import { Box, Flex, Grid, Text } from '@chakra-ui/react'


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
                border={"4px solid gray"}
                boxShadow= {"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                borderRadius= {8}
                w={"300px"}
                h={"400px"}
                >
                
                </Box>
                <Box
                 border={"4px solid gray"}
                 boxShadow= {"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                 borderRadius= {8}
                 w={"300px"}
                 h={"400px"}>

                </Box>
                <Box
                 border={"4px solid gray"}
                 boxShadow= {"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                 borderRadius= {8}
                 w={"300px"}
                 h={"400px"}>

                </Box>
               
            </Grid>
        </Flex>
    )

}
