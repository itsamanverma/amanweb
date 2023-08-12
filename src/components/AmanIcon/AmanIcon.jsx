import React, { Component } from 'react';

class AmanIcon extends Component {
    render() {
        const styles = [
            { color: '#FF5733', fontSize: '30px', fontWeight: 600, },
            { color: '#FFC300', fontSize: '32px', fontWeight: 600 },
            { color: '#33FFBD', fontSize: '28px', fontWeight: 600 },
            { color: '#3380FF', fontSize: '34px', fontWeight: 600 }
        ];

        const letters = ['A', 'M', '@', 'N'];

        return (
            <div className="iconContainer">
                {letters.map((letter, index) => (
                    <span key={index} style={styles[index]}>
                        {letter}
                    </span>
                ))}
            </div>
        );
    }
}

export default AmanIcon;
