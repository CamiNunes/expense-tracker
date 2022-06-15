import styled from 'styled-components';

export const Table = styled.table `
  width: 100%;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 0px 2px #CCC;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 0.5rem 0;
  text-align: left;
`;