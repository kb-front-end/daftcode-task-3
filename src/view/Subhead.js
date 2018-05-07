import React from 'react';
import PropTypes from 'prop-types';
import '../styles/subhead.sass';

class Subhead extends React.Component {
  static propTypes = {
    subheadText: PropTypes.string.isRequired,
  }

  render() {
    const { subheadText } = this.props;

    return (
        <div className='subhead'>
        <h3 className='subhead__text'>{subheadText}</h3>
        <hr className='subhead__line' />
        </div>
    );
  }
}

export default Subhead;
