import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
