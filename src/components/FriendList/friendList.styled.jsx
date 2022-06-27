import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendItem = styled.li`
  padding: 5px 10px;
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const FriendOnline = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
`;
export const FriendOffline = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;
export const FriendAvatar = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 10px;
`;
export const FriendName = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;
