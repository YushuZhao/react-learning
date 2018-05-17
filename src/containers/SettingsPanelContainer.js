import { connect } from 'react-redux';

import React from 'react';

import SettingsItemContainer from './SettingsItemContainer';

import {
    ACCOUNT,REPORT,VERSION
} from '../actions/SettingsAction';

const SettingsPanel = () => {
    return (
        <div>
            <table>
                <tbody>
                    <SettingsItemContainer title={ACCOUNT} item={ACCOUNT}/>
                    <SettingsItemContainer title={REPORT} item={REPORT}/>
                    <SettingsItemContainer title={VERSION} item={VERSION}/>
                </tbody>
            </table>
        </div>
    )
}

export default SettingsPanel;