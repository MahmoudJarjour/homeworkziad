import React from "react"
import {Link} from 'react-router-dom';
import { CssBaseline,AppBar,Toolbar,Typography,  } from "@material-ui/core";
import useStyles from "../Styles/styleHomeMaterialUi";
import { PhotoCamera } from "@material-ui/icons";
import { styled , alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const HeaderPage = () =>{
    const classes = useStyles();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
    return (
    
    <div>
        <CssBaseline>
                <AppBar position="relative">
                    <Toolbar>
                        
                        <PhotoCamera className={classes.icon}/> 
                             <Link to="/Team" className={classes.Links}>
                                <Typography veriant="h6" gutterBottom> 
                                Team Members </Typography>
                             </Link>
                        

                        
                            <Typography variant="h6" gutterBottom>
                            <Link to='/Home' className={classes.Links} >Home
                            </Link>
                            </Typography>
                        
                        <Link to="/Social" className={classes.Links}>
                             <Typography variant="h6" gutterBottom>Texts</Typography>
                        </Link>
                    
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                    
                </AppBar>
        </CssBaseline>


              
                
    </div>
    );
    }



export default HeaderPage;