import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin-bottom: 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Li = styled.li`
  margin-right: 1rem;
`;

export const Links = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &.active,
  &:hover {
    background: #ddd;
  }
`;
