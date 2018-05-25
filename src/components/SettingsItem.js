import React from 'react';

const SettingsItem = ({ item, title, clicked, selected }) => {
    const style = {
        row: {
            width: '50%',
            height: '2em',
            cursor: 'pointer'
        },
        title: {
            color: item == selected ? 'red' : 'black',
            backgroundColor: item == selected ? '#FFE4E1': '#FFFFFF',
            textAlign: 'left',
            width: '70%',
            borderRadius: '20px',
            paddingTop: '4px',
            paddingLeft: '50px',
          }
    };

    return (
        <tr style={style.row} onClick={clicked}>
            <td style={style.title}>{title} test </td>
        </tr>
    )
}

export default SettingsItem;