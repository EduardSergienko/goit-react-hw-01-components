import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
