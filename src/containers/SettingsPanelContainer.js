import { connect } from 'react-redux';

import React from 'react';

import SettingsItemContainer from './SettingsItemContainer';

import {
    ACCOUNT,REPORT,VERSION
} from '../actions/SettingsAction';

const SettingsPanel = () => {
    return (
        <div>
            <tabel>
                <tbody>
                    <SettingsItemContainer title={ACCOUNT}/>
                    <SettingsItemContainer title={REPORT}/>
                    <SettingsItemContainer title={VERSION}/>
                </tbody>
            </tabel>
        </div>
    )
}

export default SettingsPanel;