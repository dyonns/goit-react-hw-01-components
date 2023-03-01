import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (<FriendListItem
      isOnline={friend.isOnline}
      name={friend.name}
      avatar={friend.avatar}
      id={friend.id}
    />))}
  </ul>
)

export default FriendList;