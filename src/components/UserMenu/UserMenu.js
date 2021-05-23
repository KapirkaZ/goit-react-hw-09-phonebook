import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.png';
import styles from './UserMenu.module.css';

const { getUserEmail } = authSelectors;

const UserMenu = ({ email, avatar, onLogout }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" width="30" />
      <span className={styles.name}>Welcome, {email}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  email: getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
