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
    


    useEffect(() => {
        axios.get<Cadastro[]>("http://localhost:3000/tarefas").then((response) => {
            setCadastroList(response.data);
        });
    }, []);

        console.log(CadastroList)



    return (
        <Flex>
            <Header />


            <Flex
                direction={"column"}
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
                    w={"100%"}
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
                    w={"100%"}
                    h={"400px"}
                    >
                    <Text
                        p={"1rem"}
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"blue.700"}
                    >Fazendo
                       </Text>
                </Box>
                <Box
                    border={"4px solid #cecece"}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                    borderRadius={8}
                    w={"100%"}
                    h={"400px"}>
                    <Text
                        p={"1rem"}
                        fontSize={"1.5rem"}
                        fontWeight={"semibold"}
                        color={"blue.700"}
                    >Feito</Text>
                </Box>

            </Flex>
        </Flex>
    )

}
