import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          className="Navlink"
          activeClassName="Navlink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
