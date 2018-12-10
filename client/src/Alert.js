import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>User Exists</ModalHeader>
          <ModalBody>
            This user already exists.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Alert;