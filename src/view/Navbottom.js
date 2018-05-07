import React from 'react';
import '../styles/navbottom.sass';

class Navbottom extends React.Component {

  render() {
    const {mislink} = this.props;
    const { link1 } = this.props;
      const { link2 } = this.props;
      const { link3 } = this.props;

    return (
        <section className = 'navbottom'>
        <h1 className = 'navbottom__header'>{mislink}</h1>
        <div className = 'btncont'>
        <a href='http://eelslap.com/' className = 'btncont__link'>{ link1 }</a>
        <a href='https://corgiorgy.com/' className = 'btncont__link'>{ link2 }</a>
        <a href='https://www.youtube.com/watch?v=eh7lp9umG2I' className = 'btncont__link'>{ link3 }</a>
        </div>
        </section>
    );
  }
}

export default Navbottom;
