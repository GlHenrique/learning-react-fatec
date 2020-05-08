import React from 'react';


export default function Header({props, children}) {

    console.log(props);
    const styles = {
        header: {
            height: '36px',
            backgroundColor: 'red',
        }
    }

    return (
        <header style={styles.header}>
            {children}
        </header>
    )
}