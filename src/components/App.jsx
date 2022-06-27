import { GlobalStyle } from './globalStyles';
import { AppWrap } from './App.styled';

import Profile from './Profile/profile';
import Statistic from './Statistics/statistics';
import FriendList from './FriendList/friendList';
import TransactionHistory from 'components/TransactionHistory/transactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
console.log(user);
export const App = () => {
  return (
    <AppWrap>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppWrap>
  );
};
