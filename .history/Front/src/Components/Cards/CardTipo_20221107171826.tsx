import axios from "axios";
import { Pencil, Plus, Trash } from "phosphor-react";
import { Cadastro } from "../../Pages/home";
import { CardInfo } from "./CardInfo";
import { ContentContainer, DivContainerBusca } from "./Cards.styles";



export const CardTipo = ({id, descricao, data_vencimento, situacao, prioridade }:Cadastro) => {
 
//     const ENDPOINT = 'http://localhost:3000';

//   const getCliente = (id: any) => {
//     return axios.get(`${ENDPOINT}/tipos/` + id);
//   }

//     const clienteEdit = async ({vId, vDescricao, vData_vencimento, vSituacao, vPrioridade }:Cadastro) => {


        
//         const id = vId
//         const descricao = vDescricao
//         const data_vencimento = vData_vencimento
//         const situacao = vSituacao
//         const prioridade = vPrioridade
        
    
    
//         axios.put(`${ENDPOINT}/tipos/` + id, {
//          decricao: descricao,
//          data_vencimento: data_vencimento,
//          situacao: situacao,
//          prioridade: prioridade
         
    
    
//         })
//           .then((response) => {
//             console.log(response)
//             Swal.fire(` ${vdescricao} atualizado(a)`);
//             window.location.reload()
    
//           }, (error) => {
//             Swal.fire(`Erro ao atualizar cliente: ${vdescricao} `)
    
//           });
      

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
        

