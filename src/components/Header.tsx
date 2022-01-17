
import {Container, Row, Col} from 'react-bootstrap'

import { Paper, Grid, styled} from '@mui/material'
import { makeStyles } from '@material-ui/styles'
//import { Logotipo } from '../assets/logobrand'

const Logotipo = require('../assets/logobrand.png')

export default function Header(){

    const myContainerRow = {
        border: '2px solid blue', 
    }
    const myContainerRowCol = {
        border: '2px solid yellow',
        alignSel: 'end',
    }
    const myElement = {
        border: '2px solid white', 
    }

    const landingtopv2header = {
        border: '2px solid green', 
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }

    const classes = useStyles();
    return(
        <>
        <Grid>
            <Grid  className={`${classes.root} ${'d-frex'}`}  alignItems='center'>
                <Item >
                    <img src={Logotipo} alt="Logotipo" />
                </Item >
                <Item >
                    <h6>BorgesUX</h6>
                </Item>
            </Grid>

            <Grid item xs="auto">
                <Item>xs=6</Item>
            </Grid>
        </Grid>


        <Container> 
                <Row className="px-1 mx-0" style={myContainerRow}>

                    <Col className='py-4 px-1 mx-0' style={myContainerRowCol} xs={6} sm={4} md={4} lg={3}> 
                        <span className='align-items-end' style={myElement}>bloco 2</span> 
                    </Col>

                    <Col className='py-4 px-1 mx-2 my-2' style={myContainerRowCol} xs={5} >
                        <div  >
                            <span style={landingtopv2header}>bloco 3</span>
                        </div>
                    </Col>
                </Row>
        </Container>

 
        </>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
      },
    grid: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: "flex",
        justifyContent: "space-between",
      },
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
