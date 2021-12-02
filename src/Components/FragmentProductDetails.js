import React from 'react';
import { Modal,Button,Row,Col } from 'react-bootstrap';
import imgDefault from '../images/redeemDefault.png';

const FragmentProductDetails = () =>{
    return(    
        <>
        <div className="container" style={{paddingTop:40, width:"65%"}}>
            <Row>
                <Col>
                <div className="container">
                    <img style={{width:"100%"}} src={imgDefault}></img>
                </div>
                </Col>
                <Col>
                    <h4>Termo metalico 255ml</h4>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br/>
                                                     Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/>
                                                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut a</p>
                    <div className="container" style={{textAlign:"right"}}>
                        <Button variant="secondary" style={{marginRight:20}}>Regresar</Button>
                        <Button variant="danger" onClick={event =>  window.location.href='/sendProduct'}>Escoge este regalo</Button>

                    </div>
                </Col>
            </Row>
        </div>
         


        </>
    )

}
export default FragmentProductDetails;