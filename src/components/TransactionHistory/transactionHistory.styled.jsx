import styled from 'styled-components';

export const Table = styled.table`
  width: 870px;
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Thead = styled.thead`
  height: 50px;
  background-color: #00bcd5;
  color: white;
  text-transform: uppercase;
`;

export const TheadTh = styled.th`
  border: 1px solid #e4e4e4;
`;

export const TbodyTr = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const TbodyTd = styled.td`
  border: 1px solid #e4e4e4;
  color: #545559;
  height: 50px;
  text-transform: capitalize;
`;
