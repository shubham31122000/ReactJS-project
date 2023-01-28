import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Card from "./components/Card";
import {Grid, Container, TextField, FormControlLabel, Button} from '@mui/material';

function App() {
  const [posts,setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
      const { data } = await axios.get("/posts");
      setPosts(data);
    }
    fetchData();
  },[])
  return (
    <>
      <Navbar />
      <Main />

      <Container>
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


      <Container sx={{mt: 6}}>
      <Grid container spacing={5}>
        {posts &&
          posts.map((item) => {
            return (
              <Grid key={item.id} item xs={4} sx={{height: "650px"}}>
                <Card item={item} />
              </Grid>
            )
        })}
        </Grid>
      </Container>

    </>
  );
}

export default App;
