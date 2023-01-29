import React, { useState, useEffect } from "react";
import {Grid, Container, TextField, FormControlLabel, Button, Typography} from '@mui/material';
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddProduct() {
    const [data, setData] = useState({
        
            title: "",
            price: "",
            description: "",
            image: "",
            rating: {
              rate: 4,
            },
    })

    const history=useHistory();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setData(prev=> {
            return {...prev, [name]:value};
        })
    }

    const handleSubmit = async (event) => {
        const response = await axios.post("/posts",data)  
        setData({
            title: "",
            price: "",
            description: "",
            image: "",
            rating: {
              rate: 4,
            },
        })
        history.push("/");
    }

    return (
        <>
            <Container sx={{mt:5}}>
                <Typography variant="h5" sx={{mb:4}}>FORM TO ADD NEW PRODUCT</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name="title"
                required
                fullWidth
                id="firstName"
                label="Product Title"
                placeholder='Rings'
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='family-name'
                name="description"
                required
                fullWidth
                id="lastName"
                label="Product Description"
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete='="new-password'
                name="rating"
                required
                fullWidth
                id="password"
                label="Product Rating"
                onChange={(event)=> {
                    // setData((prev)=> {
                    //     return {...prev,["rating.rate"]:event.target.value}
                    // })
                }}
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete='="new-password'
                name="price"
                required
                fullWidth
                id="password"
                label="Product Price"
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='email'
                name="image"
                required
                fullWidth
                id="email"
                label="Image URL"
                onChange={handleChange}
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
                onClick={handleSubmit}
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