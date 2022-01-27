import React, {useState} from 'react';
import './Main.scss'
export default function Main() {
    const [int, setInt] = useState(0)

    return (
        <div className="main">
            <span className="main__num" onClick={() => setInt(int + 1)}>Number {int}</span>
        </div>
    )
}
