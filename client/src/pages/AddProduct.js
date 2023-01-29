import React from "react";
import {Grid, Container, TextField, FormControlLabel, Button, Typography} from '@mui/material';


function AddProduct() {
    return (
        <>
            <Container sx={{mt:5}}>
                <Typography variant="h5" sx={{mb:4}}>FORM TO ADD NEW PRODUCT</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Product Title"
                placeholder='Rings'
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='family-name'
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Product Description"
                autoFocus
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete='="new-password'
                name="password"
                required
                fullWidth
                id="password"
                label="Product Rating"
                type="password"
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete='="new-password'
                name="password"
                required
                fullWidth
                id="password"
                label="Product Price"
                type="password"
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='email'
                name="email"
                required
                fullWidth
                id="email"
                label="Image URL"
                
            />
            </Grid>
            
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='="given-name'
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="firstName"
                autoFocus
            />
            </Grid> */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ p: 1, mt: 2}}
                >
                  Add Product
              </Button>
            </Grid>
          </Grid>
        </Container>
        </>
    )
}
export default AddProduct;