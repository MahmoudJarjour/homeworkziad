import React from "react";
import { AppBar, Button, Card,CardActions,CardContent,CardMedia, Container, CssBaseline, Grid, Toolbar, Typography  } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import TeamData from '../TeamComponent/TeamData';
import useStyles from "../Styles/styleHomeMaterialUi";




const HomeMaterialUI=()=>{

    const classes = useStyles();
    const info =[
        {id:1,  img:'https://picsum.photos/320',    name:'dede',    nick:'lele',    address:'Hamra',    email:'dodododo@googogogog.com',    phone: '654654683',     website:'www.lkavdlb.com' },
        {id:2,  img:'https://picsum.photos/304',    name:'lolo ',   nick:'fofo',    address:'Hamra',    email:'dodododo@googogogog.com',    phone: '6546874983',    website:"" },
        {id:3,  img:'https://picsum.photos/305',    name:'meme',    nick:'soso',    address:'Hamra',    email:"",                           phone: '32168465168',   website:'www.lkavdlb.com' },
        {id:4,  img:'https://picsum.photos/306',    name:'dada',    nick:'koko',    address:'Hamra',    email:'dodododo@googogogog.com',    phone: '3643216846',    website:""},
        {id:5,  img:'https://picsum.photos/309',    name:'dada',    nick:'koko',    address:'Hamra',    email:"",                           phone: '3643216846',    website:'www.lkavdlb.com'},
        {id:6,  img:'https://picsum.photos/307',    name:'fofo',    nick:'nana',    address:'Hamra',    email:'dodododo@googogogog.com',    phone: '3643216846',    website:""},
    
    ];
    return (
        <>
        

                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm"  >
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>

                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Hello everyone this is a photo album and i'm trying to make this sentence as long as possible so we can see how does it look like on the screen
                             </Typography>
                            <div className={classes.buttons}>
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
                    <Container className={classes.CardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {TeamData.call().map((mamber) => (
                                    <Grid item>
                                    <Card className={classes.Card}>
                                        <CardMedia 
                                        className={classes.CardMedia}
                                            image={mamber.img}
                                            style={{maxWidth:'100%'}}
                                            title={mamber.img}
                                        />


                                        <CardContent className={classes.cardContent}>
                                            <Typography variant="h3">{`Name: ${mamber.name} ${mamber.nick}`}</Typography>
                                            <Typography variant="p">{`Address: ${mamber.address}`}</Typography>
                                            <Typography style={{color:mamber.email ? "blue" : "red"}}>
                                                {`Email: ${mamber.email}`}
                                            </Typography>
                                            <Typography>{`Phone Number: ${mamber.phone}`}</Typography>
                                            <Typography>{`Website: ${mamber.website}`}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary"> View </Button>
                                            <Button size="small" color="primary"> Edit </Button>

                                        </CardActions>

                                    </Card>
                                    </Grid>
                            ))}
                            
                        </Grid>
                    </Container>
                    
                </main>
           

        </>
    )
}

export default HomeMaterialUI;