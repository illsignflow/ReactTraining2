import React, { Component } from 'react';
import './USMap.css';

class USMap extends Component {
    render() {
        return (
            <div>
            <p><b>CLICK A STATE!</b></p>
                <iframe className="iframe" src="http://localhost:3000//iframeMap/usStates.html" title="USMAP"></iframe>
            </div>
        )
    }
}

export default USMap;