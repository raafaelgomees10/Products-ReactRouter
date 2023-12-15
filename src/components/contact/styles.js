import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const Img = styled.img``;

export const Container = styled.div``;

export const Ul = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ddd;
    margin-right: 10px;
  }
`;
