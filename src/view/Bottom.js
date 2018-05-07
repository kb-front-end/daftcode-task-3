import React from 'react';
import PropTypes from 'prop-types';
import '../styles/footer.sass';

class Bottom extends React.Component {

  render() {
    const { link1 } = this.props;
      const { link2 } = this.props;
      const { link3 } = this.props;
      const { link4 } = this.props;
      const { link5 } = this.props;

    return (
      <footer className='footer'>
        <ul className="footer__btncont">
         <li className="footer__link footer__link--link1"><a href="https://www.google.com/">{link1}</a></li> |
       <li className="footer__link"><a href="https://www.google.com/">{link2}</a></li>
       <li className="footer__link"><a href="https://www.google.com/">{link3}</a></li>
       <li className="footer__link"><a href="https://www.google.com/">{link4}</a></li>
       <li className="footer__link"><a href="https://www.google.com/">{link5}</a></li>
        </ul>
        <h3 className='footer__text'>2018 space exploration technologies corp.</h3>
        </footer>
    );
  }
}

export default Bottom;
