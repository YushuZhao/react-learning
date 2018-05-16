import React from 'react';

const SettingsItem = ({ title, clicked, selected }) => {
    const style = {
        row: {
            width: '50%',
            height: '2em',
            cursor: 'pointer'
        },
        title: {
            color: selected ? 'black' :'red',
            backgroundColor: selected ? '#FFFFFF': '#FFE4E1',
            textAlign: 'left',
            width: '67%',
            borderRadius: '20px',
            paddingTop: '4px',
            paddingLeft: '27px',
            paddingRight: '3px',
          }
    };

    return (
        <tr style={style.row} onClick={clicked}>
            <td style={style.title}>{title} test </td>
        </tr>
    )
}

export default SettingsItem;