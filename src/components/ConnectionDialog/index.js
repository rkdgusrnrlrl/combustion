import React, { Component} from 'react';
import CSSModules from 'react-css-modules';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

import Dialog from '../Dialog'
import logoImage from '../../images/logo.png';

import styles from './styles/index.css';

@inject('view_store')
@observer
@CSSModules(styles)
class ConnectionDialog extends Component {

  @autobind onDismiss(event) {
    event.preventDefault();
    this.props.view_store.toggleConnectionDialog();
  }

  @autobind onHide() {
    this.props.view_store.toggleConnectionDialog();
  }

  render() {
    return (
      <Dialog
        show={this.props.view_store.isConnectionDialogShown}
        onHide={this.onHide}
      >
        <div styleName='body'>
          <div styleName='logo'>
            <img src={logoImage} alt='logo'></img>
          </div>
          <div styleName='form'>
            <h2>Connection Failed</h2>
            <span>
              Could not connect to the server. You may need to reload the page to reconnect.
            </span>
            <section>
              <button onClick={this.onDismiss}>Dismiss</button>
            </section>
          </div>
        </div>

      </Dialog>
    );
  }
}

export default ConnectionDialog;
