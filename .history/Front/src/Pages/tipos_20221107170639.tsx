import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import axios from 'axios';
import { CalendarPlus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Card } from '../Components/Cards/Card';
import { Header } from '../Components/Header'


export interface Cadastro {
    id: number;
    descricao: string;
    situacao: string;
    data_vencimento: string;
    prioridade: string;
    email?: string

}

export const Tipos = () => {

    const [CadastroList, setCadastroList] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:3000/tipos").then((response) => {
            setCadastroList(response.data);
        });
    }, []);

    console.log(CadastroList)
    return (
        <Flex>
            <Header />
          
            <Flex
                w={'100%'}
                align={"center"}

            >  
            <Button
            w={"150px"}
            color={"white"}
            _hover={{bg: "blue.500"}}
            bg={"blue.400"}
            ml={"30rem"}>Adicionar</Button>
                <Box
                    mt={"10rem"}
                    ml={"5rem"}
                    borderRadius={8}
                    mr={"5rem"}
                    border={"4px solid #cecece"}
                    w={'90%'}
                    h={'800px'}>
                    {CadastroList.map((cadastro: any) => {
                        return (
                            <Card id={cadastro.id} descricao={cadastro.descricao} situacao={cadastro.situacao} data_vencimento={cadastro.data_vencimento} prioridade={cadastro.prioridade} />
                        )
                        }
                        )
                    }

                </Box>
            </Flex>


        </Flex>

    )

}
