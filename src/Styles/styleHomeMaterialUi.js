import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles( (Theme) => ({
        container:{ 
            backgroundColor:Theme.palette.background.paper,
            padding: Theme.spacing(8,0,6)
        },
        icon:{
            marginRight : '20px',
        },
        buttons:{
            marginTop: '40px',
        },
        CardGrid:{
            padding :'20px 0',
        },
        Card:{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        CardMedia:{
            paddingTop: '56.25%' , // aspect ratio of 16:9
            
        },
        cardContent:{
            flexGrow: 1 , 
        },

        Links:{
        textDecoration:"none",
        color:"inherit",
        underline:"none",
        padding:'20px',
        
        },
    }
));

export default useStyles;