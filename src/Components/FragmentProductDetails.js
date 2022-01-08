import React from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import imgDefault from '../images/redeemDefault.png';
import { useHistory } from "react-router-dom";

const FragmentProductDetails = () =>{
    let history = useHistory();

    return(    
        <>
        <div className="height-100">
        <div className="container" style={{paddingTop:40, width:"65%"}}>
                <Row>
                    <Col>
                    <div className="container">
                        <img className="imgtest" alt="" src={imgDefault}></img>
                    </div>
                    </Col>
                    <Col>
                        <h4>Termo metalico 255ml</h4>
                        <p style={{textAlign:"justify", fontFamily: 'Montserrat'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br/>
                                                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/>
                                                        </p>
                        <div className="container" style={{textAlign:"right"}}>
                            <Button variant="secondary" onClick={() => history.goBack()} style={{marginRight:20,fontFamily: 'Montserrat'}}>Regresar</Button>
                            <Button variant="danger" onClick={event =>  window.location.href='/sendProduct'} style={{fontFamily: 'Montserrat'}}>Escoge este regalo</Button>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )

}
export default FragmentProductDetails;