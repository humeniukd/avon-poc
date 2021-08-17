import React, { Component } from 'react';

import Selectbox from '../Selectbox';

const sortBy = [
  { value: '',           label: 'Select'  },
  { value: 'lowestprice', label: 'Lowest price' },
  { value: 'highestprice', label: 'Highest price' },
]

class Sort extends Component {

  handleSort = (value) => {
    this.props.updateSort(value);
  }

  render() {
    return (
      <div className="sort">
       Sort by <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

export default Sort
