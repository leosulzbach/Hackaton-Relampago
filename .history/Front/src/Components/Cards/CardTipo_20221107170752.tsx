import { Pencil, Plus, Trash } from "phosphor-react";
import { Cadastro } from "../../Pages/home";
import { CardInfo } from "./CardInfo";
import { ContentContainer, DivContainerBusca } from "./Cards.styles";



export const Card = ({id, descricao, data_vencimento, situacao, prioridade }:Cadastro) => {
 
   

    return (
        <DivContainerBusca>
            <ContentContainer>
                <CardInfo title ="id" data={id} />
                <CardInfo title="Descrição" data={descricao} />
                <CardInfo title="Data vencimento" data={data_vencimento} />
                <CardInfo title="Situação" data={situacao} />
                <CardInfo title="Prioridade" data={prioridade} />

                <Pencil size={32} color="#0c0d0d" />
                <Trash size={32} color="#0c0d0d" />
                
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }

