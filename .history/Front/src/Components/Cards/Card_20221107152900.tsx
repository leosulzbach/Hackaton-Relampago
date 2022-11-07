import { Plus } from "phosphor-react";
import { CardInfo } from "./CardInfo";
import { ContentContainer, DivContainerBusca } from "./Cards.styles";




export interface Cadastro {
    id: number;
    nome: string;

}

export const Card = ({id, nome }:Cadastro) => {
 
   

    return (
        <DivContainerBusca>
            <ContentContainer>
                <CardInfo title ="Codigo" data={id} />
                <CardInfo title="Nome" data={nome} />
                <Plus className="adicionar"size={32} />
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }

