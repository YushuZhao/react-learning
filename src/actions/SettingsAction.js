export const SELECT_SETTING = 'SELECT_SETTING'

export const ACCOUNT = 'Account'
export const REPORT = 'Report'
export const VERSION = 'Version'
export const selectSetting = (setting_id) => {
    return {
      type: SELECT_SETTING,
      setting_id
    };
};