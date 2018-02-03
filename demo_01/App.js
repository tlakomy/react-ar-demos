import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
    render() {
        return (
          <AFrameRenderer inherent={true} onClick={() => document.body.webkitRequestFullscreen()}>
            <Marker parameters={{ preset: "hiro" }}>
              <a-box position='0 0.5 0' material='opacity: 0.5; side: double; color: #38DBFF;'>
                <a-animation
                  attribute="rotation"
                  to="360 360 0"
                  dur="5000"
                  easing="linear"
                  repeat="indefinite"
                />
              </a-box>
            </Marker>
          </AFrameRenderer>
        )
    }
}

export default App;
