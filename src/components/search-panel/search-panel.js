import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
  render() {
    return <input type='text' className='form-control search-input' placeholder='Type here to search' />
  }
}
