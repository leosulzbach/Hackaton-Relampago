import { Plus } from "phosphor-react";
import { Cadastro } from "../../Pages/home";
import { CardInfo } from "./CardInfo";
import { ContentContainer, DivContainerBusca } from "./Cards.styles";



export const Card = ({id, descricao, data_vencimento, situacao, prioridade }:Cadastro) => {
 
   

    return (
        <DivContainerBusca>
            <ContentContainer>
                <CardInfo title ="Codigo" data={id} />
                <CardInfo title="Nome" data={descricao} />
                <Plus className="adicionar"size={32} />
                <
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }

