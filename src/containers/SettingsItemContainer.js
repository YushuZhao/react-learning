import { connect } from 'react-redux';
import SettingsItem from '../components/SettingsItem';
import { selectSetting } from '../actions/SettingsAction';

const mapStateToProps = (state) => {
    return {
      selected: state.setting.currentSettingSelected,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      clicked: () => {
        dispatch(selectSetting(ownProps.item));
      }
    };
};

const SettingsItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsItem);
  
export default SettingsItemContainer;