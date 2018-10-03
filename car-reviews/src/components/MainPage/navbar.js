import React, { Component } from 'react';
import AuthService from '../Auth/authservice';
import './navbar.css';
import LoginRegisterModal from '../Modals/loginregistermodal';


const Auth = new AuthService();

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalState: {
        isOpen: false,
        type: 'login'
      },

     }
  }

  // handleModalState = (modalType, status) => () => {
  //   const newState = Object.assign({}, this.state);
  //   newState.modalState.type = modalType;
  //   newState.modalState.isOpen = status;
  //   this.setState(newState);
  // }

  // handleChangeModalType = modalType => {
  //   const newState = Object.assign({}, this.state);
  //   newState.modalState.type = modalType;
  //   this.setState(newState);
  // }

  // handleSetJwtState = (type, jwt) => {
  //   localStorage.setItem('jwt', jwt);
  //   this.props.handleLogin(true);
  //   this.setState({ modalState: { isOpen: false, type } })
  // }

  renderSignout = () => {
    if (!this.props.isLoggedIn) {
      return (
        <div className="navbar-container">
          <a className="navbar-item" href="/">
            Home
          </a>
    
          {/* <a className="navbar-item" href="/searchpage">
            Search
          </a> */}
    
          <a className="navbar-item" href="/MyReviews">
            My Reviews
          </a>
    
          <a className="navbar-item" href="/Billing">
            Billing
          </a>
          <a className="navbar-item" href="/Settings">
            Settings
          </a>
          {/* <a className="navbar-item" href="/" onClick={this.signOut}>
            Sign Out
          </a> */}
        </div>
      );
    } else {
      return (
        <div className="navbar-container">
          <a className="navbar-item" href="/">
            Home
          </a>
    
          {/* <a className="navbar-item" href="/searchpage">
            Search
          </a> */}
    
          <a className="navbar-item" href="/MyReviews">
            My Reviews
          </a>
    
          <a className="navbar-item" href="/Billing">
            Billing
          </a>
          <a className="navbar-item" href="/Settings">
            Settings
          </a>
          <a className="navbar-item" href="/" onClick={this.signOut}>
            Sign Out
          </a>
        </div>
      );
    }
  }

  signOut = () => {
    Auth.logout();
  };

  render() { 
    return (
      <div>
        {this.renderSignout()}
      </div>
    );
  }
}
 
export default Navbar;
// export default props => {
//   const signOut = () => {
//     Auth.logout();
//   };

//   return (
//     <div {...props} className="navbar-container">
//       <a className="navbar-item" href="/">
//         Home
//       </a>

//       {/* <a className="navbar-item" href="/searchpage">
//         Search
//       </a> */}

//       <a className="navbar-item" href="/MyReviews">
//         My Reviews
//       </a>

//       <a className="navbar-item" href="/Billing">
//         Billing
//       </a>
//       <a className="navbar-item" href="/Settings">
//         Settings
//       </a>
//       <a className="navbar-item" href="/" onClick={signOut}>
//         Sign Out
//       </a>
//     </div>
//   );
// };