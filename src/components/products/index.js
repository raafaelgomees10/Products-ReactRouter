import React, { useEffect, useState } from "react";
import * as S from "./styles.js";
import Head from "../head";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return null;
  }
  return (
    <S.Section className="animeLeft">
      <Head title="Ranek" description="Descrição do site Ranek" />
      {products.map((product) => (
        <S.Links to={`/produto/${product.id}`} key={product.id}>
          <S.Img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <S.Title>{product.nome}</S.Title>
        </S.Links>
      ))}
    </S.Section>
  );
};

export default Products;
