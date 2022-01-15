
import {Container, Row, Col, Stack } from 'react-bootstrap'
import Logotipo from '../assets/logo_brand.png'

export default function Header(){
    const myContainer = {
        border: '2px solid red', 
    }
    const myRow = {
        border: '2px solid blue', 
    }
    const myCol = {
        border: '2px solid yellow', 
    }
    const myElement = {
        border: '2px solid white', 
    }
    const myElementLogotipo = {
        //border: '2px solid white', 
        width: '72px',
        height: '72px',
    }
    const myElementLogotipoText = {
        //marginLeft: '-12px',
    }
    return(
        <>
        <Container className="" style={myContainer}> 
                <Row className=" px-2" style={myRow}> 
                    <Col className='mx-1 d-flex ' style={myCol} xs={5} sm={4} md={4} lg={3}> 
                        <img className='m-n1' style={myElementLogotipo}  src={Logotipo} alt="logotipo"  /> 
                        <h6 className='m-n5 align-self-center' style={myElementLogotipoText} > Borgesux </h6> 
                    </Col>

                    <Col className='mx-2 justify-content-center align-self-center' style={myCol} xs={5} sm={4} md={4} lg={3}> <span> bloco 2 </span> </Col>
                </Row>
        </Container>
            <h1>Hello World</h1>
        </>
    )
}
