// import { connect } from 'react-redux';
// import React from 'react';
// // import { selectSetting } from '../actions/SettingsAction';

// import SettingVersion from '../components/SettingVersion';

// import {
//     ACCOUNT, REPORT, VERSION
// } from '../actions/SettingsAction';

// const style = {
//     root: {
//       display: 'inline-block',
//       width: '100%',
//       backgroundColor: 'white',
//       height: '100vh',
//       overflow: 'auto'
//     }
//   };

//   const SettingsContent = ({selected}) => {

//     return (
//             <div style={style.root}>
//                 {
//                   (() => {
//                       switch (selected) {
//                         case ACCOUNT:
//                           return <SettingVersion />;
//                         case REPORT:
//                           return <SettingVersion />;
//                         case VERSION:
//                           return (<SettingsVersion/>)
//                         default:
//                           console.log(`unknown selected setting: ${selected}`)
//                           return <SettingVersion />;
//                       }
//                     })()
//                   }
//             </div>
//         );
// }

// const mapStateToProps = (state) => {
//   return {
//     selected: state.setting.currentSettingSelected,
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {

//   };
// };
// const SettingsContentContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(SettingsContent);

// export default SettingsContentContainer;