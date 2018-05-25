import React from 'react';
import Modal from 'react-modal';
import AboutMeModalContent from './about-me-modal-content';
import logo from './img/aram-logo.png';
import hamburger from './img/bars.svg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '60%',
    maxHeight             : '90%',
    overflow              : 'scroll'
  }
};

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalOpen: false
    })
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  render() {
    return (
      <div className="header">
        <div className="logo-box">
          <img src={logo} alt="logo " className="logo" />
        </div>
        <div className="hamburger-box">
          <img
            src={hamburger}
            alt="logo"
            className="hamburger-menu"
            onClick={this.openModal}
          />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">aram anderson</span>
            <span className="heading-primary-sub">full stack software engineer</span>
          </h1>
          <button className="btn btn-white" onClick={this.openModal}>About Me</button>
          <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
            contentLabel="About Me"
          >
            <AboutMeModalContent
              closeModal={this.closeModal}
            />
          </Modal>
        </div>
      </div>
    )
  }
}

export default Header;
