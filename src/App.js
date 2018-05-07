import { hot } from 'react-hot-loader';
import * as React from 'react';
import './styles/theme.sass';
import LaunchDetails from 'view/LaunchDetails';
import Top from 'view/Top';
import Navbottom from 'view/Navbottom';
import Bottom from 'view/Bottom';



class App extends React.Component { // eslint-disable-line react/prefer-stateless-function


    
    render() {
        
    return (
      <main>
        <Top textBtn="go back" />
        <LaunchDetails />
        <Navbottom mislink ='mission links' link1 = 'reddit campaign' link2 = 'presskit' link3 = 'mission video'/>
        <Bottom link1 ='follow spacex' link2 = 'twitter' link3 = 'youtube' link4 = 'flickr' link5 = 'instagram'/>
      </main>
    );
  }
}

export default hot(module)(App);