import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <FriendListItem
        isOnline={friend.isOnline}
        name={friend.name}
        avatar={friend.avatar}
        key={friend.id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
