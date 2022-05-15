import { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello world!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
              amet ad dolor odio cumque numquam accusamus sapiente ea optio.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              possimus modi consequatur a! In accusamus nulla veritatis officia
              velit sed exercitationem temporibus voluptas quibusdam! Impedit
              fuga cum et odio rem?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
