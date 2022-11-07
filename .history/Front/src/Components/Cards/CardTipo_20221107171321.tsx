import { Pencil, Plus, Trash } from "phosphor-react";
import { Cadastro } from "../../Pages/home";
import { CardInfo } from "./CardInfo";
import { ContentContainer, DivContainerBusca } from "./Cards.styles";



export const CardTipo = ({id, descricao, data_vencimento, situacao, prioridade }:Cadastro) => {
 
    const clienteEdit = async (vId?: number, vNome?: string, vIdade?: number, vdataNascimento?: string, vEmail?: string, vCidade?: number, vCpf?: string, vTelefone?: string) => {


        console.log(vId, vNome)
        const id = vId
        const nome = vNome
        const idade = vIdade
        const datanascimento = vdataNascimento
        const email = vEmail
        const cidade = vCidade
        const cpf = vCpf
        const telefone = vTelefone
    
    
        axios.put(`${ENDPOINT}/tipos/` + id, {
          nome: nome,
          idade: idade,
          dataNascimento: datanascimento,
          email: email,
          cidade: cidade,
          telefone: telefone,
          cpf: cpf
    
    
        })
          .then((response) => {
            console.log(response)
            Swal.fire(`cliente ${vNome} atualizado(a)`);
            window.location.reload()
    
          }, (error) => {
            Swal.fire(`Erro ao atualizar cliente: ${vNome} `)
    
          });
      }

    return (
        <DivContainerBusca>
            <ContentContainer>
                <CardInfo title ="id" data={id} />
                <CardInfo title="Descrição" data={descricao} />
                <CardInfo title="Data vencimento" data={data_vencimento} />
                <CardInfo title="Situação" data={situacao} />
                <CardInfo title="Prioridade" data={prioridade} />

                <Pencil size={32} color="#0c0d0d" onClick={e => {
          MySwal.fire({
            title: '<strong>Editar cliente</u></strong>',
            html: (
              <div>
                <input className="swal2-input" id={"id"} type={"hidden"} name={vId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} defaultValue={vId} />

                <input id={"nome"} className="swal2-input" name={vNome} placeholder={"nome"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => vNome = (e.target.value)} defaultValue={vNome} />

                <input id={"idade"} className="swal2-input" name={vIdade} onChange={(e: React.ChangeEvent<HTMLInputElement>) => vIdade = (e.target.value)} placeholder={"idade"} defaultValue={vIdade} />

                <input id={"dataNascimento"} className="swal2-input" name={vdataNascimento} onChange={(e: React.ChangeEvent<HTMLInputElement>) => vdataNascimento = (e.target.value)} placeholder={"data nascimento"} defaultValue={vdataNascimento} />

                <input id={"email"} className="swal2-input" name={vEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => vEmail = (e.target.value)} placeholder={"e-mail"} defaultValue={vEmail} />

                <input id="telefone" className="swal2-input" name={vTelefone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => vTelefone = (e.target.value)} placeholder="telefone" defaultValue={vTelefone} />
                <Trash size={32} color="#0c0d0d" />
                
            
            </ContentContainer>
        </DivContainerBusca>
    )
            }
        

