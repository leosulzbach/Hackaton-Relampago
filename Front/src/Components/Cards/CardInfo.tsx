import { Title, Data } from "./CadInfo.styles";
import { DivContainer } from "./Cards.styles";


interface CardInfoProps {
  title: string;
  data: any;

}

export function CardInfo({ title, data }: CardInfoProps) {
  return (
    <DivContainer>
      <Title>{title}</Title>
      <Data>{data}</Data>
       
    </DivContainer>
   
  );
}