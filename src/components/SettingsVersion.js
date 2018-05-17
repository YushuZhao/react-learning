import React, { Component } from 'react';

const style = {
    rightpart: {
        height: '100%',
        position: 'absolute',
        marginLeft: '10%',
        backgroundColor: 'pink',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    }
}
class SettingsVersion extends Component {
    render() {
        return (
            <div style={style.rightpart}>
                yushu
            </div>
        );
    }
}

export default SettingsVersion;