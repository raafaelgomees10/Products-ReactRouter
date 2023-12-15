import React from "react";
import * as S from "./styles.js";
import Head from "../head/index.js";
import foto from "../../img/contato.jpg";

const Contact = () => {
  return (
    <S.Section className="animeLeft">
      <Head title="Ranek | Contato" description="Entre em contato" />
      <S.Img src={foto} alt="Maquina de escrever" />
      <S.Container>
        <h1>Entre em contato</h1>
        <S.Ul>
          <S.Li>raafaelgomees10@gmail.com</S.Li>
          <S.Li>+353 83 469 9649</S.Li>
          <S.Li>Rua Logo Ali 999</S.Li>
        </S.Ul>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
