import { Box, Flex, Grid, Text } from '@chakra-ui/react'


export const Home = () => {
    return (
        <Flex>
            <Grid
                templateColumns='repeat(3, 1fr)'
                ml={"6rem"}
                gap={6}
                alignItems={"center"}
                width='100%'
                height="100%"
            >
                <Box
                border={"2px solid gray"}
                borderRadius= {8}
                w={"200px"}
                h={"400px"}
                >
                
                </Box>
                <Box
                 border={"2px solid gray"}
                 borderRadius= {8}
                 w={"200px"}
                 h={"400px"}>

                </Box>
                <Box
                 border={"2px solid gray"}
                 borderRadius= {8}
                 w={"200px"}
                 h={"400px"}>

                </Box>
               
            </Grid>
        </Flex>
    )

}
