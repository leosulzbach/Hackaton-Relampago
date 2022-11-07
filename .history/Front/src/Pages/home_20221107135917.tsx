import { Flex, Grid, Text } from '@chakra-ui/react'
import * as React from 'react'




export const Home = () => {
    return(
        <Flex>
            <Grid
                templateColumns='repeat(3, 1fr)'
                gap={6}
                width='200px'
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
                       
                    </Flex>
                </div>

            </Grid>
        </Flex>
    )
    
}
