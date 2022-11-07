import { Plus } from "phosphor-react";
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

                <Plus className="adicionar"size={32} />
                
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }

