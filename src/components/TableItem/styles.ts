import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string}>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #CCC;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string}>`
  color:  ${props => props.color};
`;