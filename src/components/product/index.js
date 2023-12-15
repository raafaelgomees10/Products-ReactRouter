import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Head from "../head/index.js";
import { useParams } from "react-router-dom";

const Product = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (e) {
        setError("Um Erro Ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading" />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (!product) {
    return null;
  }

  return (
    <S.Section className="animeLeft">
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek | Esse é um produto ${product.nome}`}
      />
      <S.Div>
        {product.fotos.map((foto) => (
          <S.Img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </S.Div>

      <S.Div>
        <h1>{product.nome}</h1>
        <S.Price>R$ {product.preco}</S.Price>
        <S.Details>{product.descricao}</S.Details>
      </S.Div>
    </S.Section>
  );
};

export default Product;
