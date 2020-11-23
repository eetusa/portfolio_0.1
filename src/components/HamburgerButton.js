import React from 'react';


const styles = {
    container: {
        width: "50px",
        height: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        // border: "2px solid rgba(0,0,0,0.4)",
        opacity: "0.7",
        margin:"5px",
        padding: "0"

    },
    bar : {
        width: "70%",
        height: "3px",
        backgroundColor: "grey",
        margin:"3px",
        borderRadius:"5px"
    }
}

const HamburgerButton = () => {
    return (
        <div style={styles.container}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
        </div>
    );
}

export default HamburgerButton;