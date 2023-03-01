const FriendListItem = ({avatar, name, isOnline, id}) => (
  <li className="item" key={id}>
    <span className="status">{isOnline === true ? "red" : "blue" }</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name }</p>
  </li>
)

export default FriendListItem;