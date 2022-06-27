import styled from 'styled-components';

export const ProfileWrap = styled.div`
  padding-top: 30px;
  background-color: aqua;
  width: 250px;
  margin: 0 auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  overflow: hidden;
`;
export const Description = styled.div`
  text-align: center;
`;
export const UserAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const UserName = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
`;
export const UserTag = styled.p`
  color: #82909e;
  margin-bottom: 10px;
`;
export const UserLocation = styled.p`
  color: #82909e;
  margin-bottom: 25px;
`;
export const StatsList = styled.ul`
  background-color: #f3f6f9;
  display: flex;

  /* justify-content: space-around; */
`;
export const StatsItem = styled.li`
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 70px;
  border-top: 1px solid #e4e9f0;
  border-right: 1px solid #e4e9f0;

  :last-child {
    border-right: none;
  }
`;
export const Statslabel = styled.span`
  color: #82909e;
  margin-bottom: 5px;
`;
export const StatsQuantity = styled.span`
  font-weight: 600;
`;
