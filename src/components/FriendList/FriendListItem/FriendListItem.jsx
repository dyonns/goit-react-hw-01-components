import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>

    <span  className = {isOnline === true ? styles.red : styles.blue}></span>
    
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name }</p>
  </li>
)

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,  
  id: PropTypes.number,
  
}

export default FriendListItem;