import {
  ProfileWrap,
  Description,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  Statslabel,
  StatsQuantity,
} from 'components/Profile/profile.styled';
import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <StatsItem>
          <Statslabel>Followers</Statslabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Statslabel>Views</Statslabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Statslabel>Likes</Statslabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
