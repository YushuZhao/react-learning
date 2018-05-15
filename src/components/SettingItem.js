import React from 'react';

const SettingsItem = ({ title, clicked, selected }) => {
    const style = {
        row: {
            width: '50%',
            height: '2em',
            cursor: 'pointer'
        },
        title: {
            color: selected ? 'red' :'green',
            backgroundColor: selected ? '#C1FFC1': '#FFEFDB',
            textAlign: 'left',
            width: '67%',
            borderRadius: '20px',
            paddingTop: '4px',
            paddingLeft: '27px',
            paddingRight: '3px',
          }
    };

    return (
        <tr style={style.row}>
            <td style={style.title}>title</td>
        </tr>
    )
}

export default SettingsItem;