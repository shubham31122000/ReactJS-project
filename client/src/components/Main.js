import React from "react";
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import {Box, Container, Typography, Button} from "@mui/material";

function Main() {
    return (
        <Box>
            <Container 
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    height:"70vh"
                    }}>
                <Typography variant="h3">Home Layout</Typography>
                <Typography variant="subtitle1" sx={{width:"450px", textAlign:"center", my:4, fontSize:"1.2rem"}}>
                Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </Typography>
                <Button variant="contained">Contact Me</Button>
            </Container>
        </Box>
    )
}

export default Main