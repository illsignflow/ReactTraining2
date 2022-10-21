import React, { Component } from 'react';
import './AppInfo.css';

class AppInfo extends Component {
    render() {
        return (
            <div>
                <h2>App Information</h2>
                    <p>This web-app was created for training purposes! Clicking on a state will show
                        you more information about it. Enjoy!</p>
                    <p>Created: October 2022</p>
            </div>
            
        )
    }
}

export default AppInfo;