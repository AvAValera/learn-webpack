import React from 'react';
import Main from './Main'
import logo from './img/main/webpack.png'
export default function App() {
    return (
        <div>
            <span>Hello react</span>
                <Main />
                
                <img src={logo} alt="webpack" />
        </div>
    )
}
