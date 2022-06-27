import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsWrap = styled.section`
  width: 270px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const StatisticTitle = styled.h2`
  text-align: center;
`;
export const StatisticList = styled.ul`
  display: flex;
`;
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 60px;
`;
export const StatisticLabel = styled.span`
  color: #e4e4e4;
`;
