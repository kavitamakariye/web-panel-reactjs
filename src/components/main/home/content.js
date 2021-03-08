import React, { useState, useEffect } from 'react'

const Data = [
    {
        key: '1',
        value: 'key1'
    },
    {
        key: '2',
        value: 'key2'
    },
    {
        key: '3',
        value: 'key3'
    }
]
function ContentComponent({ selectedKey }) {

    const [data, setData] = useState('');

    useEffect(() => {
        Data.forEach(element => {
            if (element.key == selectedKey) {
                setData(element.value);
            }
        });
    }, [selectedKey])

    return (
        <div style={{ padding: 30 }}>
            <p>{data}</p>
        </div>
    )
}

export default ContentComponent
