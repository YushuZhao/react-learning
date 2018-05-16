import {  } from 'redux';
import { combineReducers } from 'redux';
import {
    SELECT_SETTING, ACCOUNT, REPORT, VERSION
} from '../../actions/SettingsAction';

function currentSettingSelected(state = REPORT, action) {
    switch (action.type) {
      case SELECT_SETTING:
        return action.setting_id;
      default:
        return state;
    }
  }
  
  const SettingsReducer = combineReducers({
    currentSettingSelected
  });
  
  export default SettingsReducer;