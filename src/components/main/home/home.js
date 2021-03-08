import React, { useState, useEffect } from 'react'
import Dropdown from './dropdown';
import ContentComponent from './content';

function Home() {
    const [selectedKey, setSelectedKey] = useState('1');

    let onkeySelect = (e) => {
        setSelectedKey(e)
        console.log(e, selectedKey);
    }
    return (
        <div>
            <Dropdown onkeySelect={onkeySelect} />
            <ContentComponent selectedKey={selectedKey} />
        </div>
    )
}

export default Home
