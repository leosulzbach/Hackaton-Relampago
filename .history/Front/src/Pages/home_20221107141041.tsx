import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import * as React from 'react'




export const Home = () => {
    return (
        <Flex>
            <Grid
                templateColumns='repeat(3, 1fr)'
                gap={6}
                width='100%'
                height="100%"
            >
                <Box
                border={"2px solid gray"}
                >
                
                </Box>
                <Box>

                </Box>
                <Box>

                </Box>
                <Box>

                </Box>


            </Grid>
        </Flex>
    )

}
