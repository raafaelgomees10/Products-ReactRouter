import React from "react";
import * as S from "./styles.js";

const Header = () => {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <S.Links to="/" end>
            Produtos
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to="/contato">Contato</S.Links>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
};

export default Header;
