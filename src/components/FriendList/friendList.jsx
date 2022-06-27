import {
  FriendsList,
  FriendOnline,
  FriendOffline,
  FriendItem,
  FriendAvatar,
  FriendName,
} from 'components/FriendList/friendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            {friend.isOnline ? (
              <FriendOnline></FriendOnline>
            ) : (
              <FriendOffline></FriendOffline>
            )}

            <FriendAvatar src={friend.avatar} alt={friend.name} width="48" />
            <FriendName>{friend.name}</FriendName>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
}
