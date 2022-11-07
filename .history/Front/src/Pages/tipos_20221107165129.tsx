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

    const [CadastroList, setCadastroList] = useState<Cadastro[]>([]);
    


    useEffect(() => {
        axios.get<Cadastro[]>("http://localhost:3000/tipos").then((response) => {
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
                <Box
             mt={"10rem"}
            ml={"5rem"}
            borderRadius={8}
            mr={"5rem"}
            border={"4px solid #cecece"}
            w={'90%'}
            h={'800px'}>
            </Box>
            </Flex>
           

           </Flex>
               
    )

}
