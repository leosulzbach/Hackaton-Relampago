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

export const Home = () => {

    const [CadastroList, setCadastroList] = useState<Cadastro[]>([]);
    const [CadastroFilter, setCadastroFilter] = useState<Cadastro[]>(CadastroList);


    useEffect(() => {
        axios.get<Cadastro[]>("http://localhost:3000/tarefas").then((response) => {
            setCadastroList(response.data);
        });
    }, []);

        console.log(CadastroList)




    useEffect(() => {


        setCadastroFilter(

            CadastroList);
    }, [CadastroList])


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
                    {
                        
                        CadastroList.map((tarefa: any)  => {
                            
                            return (
                                <Card id={tarefa.id} descricao={tarefa.descricao} situacao={tarefa.situacao} data_vencimento={tarefa.data_vencimento} prioridade={tarefa.prioridade} /> 
                            ) 
                    })}

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
                    >Fazendo
                        <Button
                            colorScheme='blue'
                            w={"2rem"}
                            ml={2}
                        >+</Button>

                        <Button colorScheme='blue'>Adicionar</Button></Text>
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
