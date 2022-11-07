import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../Components/Header'


export interface Cadastro {
    id: number;
    descricao: string;
    situacao: string;
    data_vencimento: string;
    prioridade: string;
    email: string

}

export const Home = () => {
    export function CadastroList() {
        const [CadastroList, setCadastroList] = useState<Cadastro[]>([]);
        const [CadastroFilter, setCadastroFilter] = useState<Cadastro[]>(CadastroList);


        useEffect(() => {
            axios.get<Cadastro[]>("http://localhost:3000/tarefas").then((response) => {
                setCadastroList(response.data);
            });
        }, []);


        const [tarefa, settarefa] = useState<any>();

        useEffect(() => {


            setCadastroFilter(

                CadastroList.filter(cadastro =>
                    cadastro.descricao.toLowerCase().includes(tarefa) || cadastro.email.toLocaleLowerCase().includes(tarefa) || cadastro.prioridade.includes(tarefa) || cadastro.data_vencimento.includes(tarefa))
            )

        }, [tarefa])


        useEffect(() => {


            setCadastroFilter(

                CadastroList);
        }, [CadastroList])

    }
    return (
        <Flex>
            <Header />


            <Grid
                templateColumns='repeat(3, 1fr)'
                ml={"6rem"}
                mt={"10rem"}
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
                        color={"blue.700"}
                    >A fazer</Text>

                </Box>
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"300px"}
                    h={"400px"}>
                    <Text
                        p={"1rem"}
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"blue.700"}
                    >Fazendo</Text>
                </Box>
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"300px"}
                    h={"400px"}>
                    <Text
                        p={"1rem"}
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"blue.700"}
                    >Feito</Text>
                </Box>

            </Grid>
        </Flex>
    )

}
