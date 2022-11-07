
import { CardInfo } from "./CardInfo";
import {PlusCircle} from 'phosphor-react'

import {
  ContentContainer,
  DivContainer,
  DivContainerBusca
} from "./Cards.styles";
import { adicionarProcedimento } from "../../Pages/pagamentos";




export interface Cadastro {
    id: number;
    nome: string;

}

export const CardBuscaAtendimentos = ({id, nome }:Cadastro) => {
 
   

    return (
        <DivContainerBusca>
            <ContentContainer>
                <CardInfo title ="Codigo" data={id} />
                <CardInfo title="Nome" data={nome} />
                <PlusCircle className="adicionar"size={32} onClick={()=> {adicionarProcedimento(id)}}/>
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }

