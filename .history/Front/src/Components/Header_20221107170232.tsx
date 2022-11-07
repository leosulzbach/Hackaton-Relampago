import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
import { Sun } from "phosphor-react";



export const Header = () => {
    return (
        <Flex

            as="header"
            w="100%"
            h="20"
            justify="space-between"

            borderBottomWidth={1}
            borderColor="blue.900"
            bg="blue.900"
            position={"fixed"}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
            <Flex
                p="1rem"
                justify="flex-start"
                ml="4rem"
            >
                <Text
                    fontSize="1.8rem"
                    fontWeight="bold"
                    color="gray.200"
                >
                    Controle de tarefas
                </Text>
            </Flex>
            <Flex
                p="1.7rem"
                mr="3rem"
                justify="flex-end"
                gap={10}
            >
                <Link
                    href="/home"
                    color="gray.200"
                    fontSize={18}
                    _hover={{
                        borderBottom: '4px solid  blue', transition: 'all 0.3s ease-out', transform: 'translate(-11px, 0px)'
                    }}

                >
                    Inicio
                </Link>
                <Link

                    href="/tipos"
                    color="gray.200"
                    fontSize={18}
                    _hover={{
                        borderBottom: '4px solid  blue', transition: 'all 0.3s ease-out', transform: 'translate(-11px, 0px)'
                    }}
                >
                    Tipos
                </Link>
               
                <Sun size={24} color={"white"} />
            </Flex>



        </Flex>
    );
}