import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// import SettingsPanel from '../containers/SettingsPanelContainer';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState
);

export default store