import styled from 'styled-components';

export const Button = styled.button`
  border-bottom: ${props=>props.active ? "2px solid black" : "inherit"};
`;

export const Container = styled.div`
  width: 100%;
  background:blue;
`;
