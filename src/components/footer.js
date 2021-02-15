import React from 'react';
import AppBar from '@material-ui/core/AppBar';

function Footer(props) {

    return (
        <AppBar style={{ textAlign: "center",
         bottom: 0,
          height: 50,
           lineHeight: 3,
            clear: "both",
            position:"relative",
            marginTop: 200 
        }}>
            COPYRIGHTS FOR @MOHAMMAD ALMOKDAD
        </AppBar>
    )
}


export default Footer;
