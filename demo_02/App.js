import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
    render() {
        return (
          <AFrameRenderer inherent={true} onClick={() => document.body.webkitRequestFullscreen()}>
            <Marker parameters={{ 
                preset: 'custom',
                type: 'pattern',
                patternUrl: './rollingscopes.patt', 
                url: './rollingscopes.patt'
              }}>
              <a-box position='0 0.5 0' material='opacity: 0.5; side: double; color: #CA83FF;'>
                <a-torus-knot radius='0.26' radius-tubular='0.05'>
                  <a-animation attribute="rotation" to="360 0 0" dur="3000" easing='linear' repeat="indefinite"></a-animation>
                </a-torus-knot>
              </a-box>
            </Marker>
          </AFrameRenderer>
        )
    }
}

export default App;
