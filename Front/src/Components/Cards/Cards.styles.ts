import styled from "styled-components";


export const DivContainer = styled.div`

  width: 100%;
  height: 5.5rem;
  background: #f1f5f9;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 8px;
 
  strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    margin-left: 3rem;
  }
  &:hover{
    width: 100%;
  height: 7rem;
  transition: 0.3s ease-in-out;
  }
`;
export const DivContainerBusca = styled.div`

  width: 100%;
  height: 3.5rem;
  background: #f1f5f9;
  border: 1px solid #cecece;
  border-radius: 8px;
  margin-top: 0.34em;
 
  strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    margin-left: 3rem;
  }
  
`;

export const ContentContainer = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .adicionar{
    margin-right:1rem;
    color: greenyellow;
    cursor: pointer;
  }
`;

