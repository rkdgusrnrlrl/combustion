import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { inject } from 'mobx-react';
import autobind from 'autobind-decorator';

import ContextMenu from 'components/ContextMenu';

import styles from './styles/index.css';

@inject('view_store', 'torrents_store')
@CSSModules(styles)
class TorrentContextMenu extends Component {
  @autobind onAbout() {
    this.props.view_store.toggleAboutDialog();
  }

  @autobind onStatistics() {
    this.props.view_store.toggleStatisticsDialog();
  }

  @autobind onToggleContextMenu() {
    this.props.view_store.toggleSettingsContextMenu();
  }

  render() {
    return (
      <ContextMenu
        show={this.props.show}
        container={this.props.container}
        target={this.props.target}
        onHide={this.props.onHide}
      >
        <ul styleName='torrentMenu' onClick={this.onToggleContextMenu}>
          <li styleName='torrentMenuItem' onClick={this.onAbout}>About</li>
          <li styleName='torrentMenuSeparator' />
          <li styleName='torrentMenuItem' onClick={this.onStatistics}>Statistics</li>
        </ul>
      </ContextMenu>
    );
  }
}

export default TorrentContextMenu;
