import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Links = styled(Link)``;

export const Img = styled.img``;

export const Title = styled.h1`
  margin: 0.5rem 0;
`;
