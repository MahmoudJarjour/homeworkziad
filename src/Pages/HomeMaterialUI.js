import React from "react";
import { AppBar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

const HomeMaterialUI=()=>{


    return (
        <>
            <CssBaseline>
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCamera />
                        <Typography veriant="h6"> Team viewed with material UI </Typography>
                    </Toolbar>
                </AppBar>

                <main>
                    <div>
                        <Container maxWidth="sm" style={{marginTop:'100px'}}>
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>

                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Hello everyone this is a photo album and i'm trying to make this sentence as long as possible so we can see how does it look like on the screen
                             </Typography>
                            <div>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Photo Section
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Other Sections
                                        </Button>
                                    </Grid>

                                </Grid>
                            </div>


                        </Container>
                    </div>
                    
                </main>
            </CssBaseline>

        </>
    )
}

export default HomeMaterialUI;