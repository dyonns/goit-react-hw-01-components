import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (<FriendListItem
      isOnline={friend.isOnline}
      name={friend.name}
      avatar={friend.avatar}
      key={friend.id}
    />))}
  </ul>
)


FriendList.propTypes = {
   friends: PropTypes.array
}

export default FriendList;