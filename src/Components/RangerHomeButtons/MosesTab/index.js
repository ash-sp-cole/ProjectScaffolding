import React from 'react'
import {Grid, Container} from "@material-ui/core";

const MosesAppBar = () => {

    return (
        <Grid Container xs={12} >

            <Grid item xs= {12} sm={6} >
            <h1> one</h1>
            </Grid>
            <Grid item xs={12}  sm={6}>
                <h1>
                    two
                </h1>
            </Grid>
        </Grid>
        
    )



}

export default MosesAppBar;