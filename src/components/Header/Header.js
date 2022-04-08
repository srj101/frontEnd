import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas,Row ,Col} from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_area'>
          <Container >
              <Row>
              <Navbar bg="light" expand={false} className="navigation" sticky="top">
                
                <Col lg={12}>
                <div className="searchBox">
                  <Link className='logo' to="/"><img src="https://i.ibb.co/t81MQDx/logo-plant-bagan.png" alt="" /></Link>
                  <input type="text" placeholder='অনুসন্ধান করার জন্য কিছু লিখুন...'/>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" className='navigationToggleController' children="তালিকা" label="MENU"/>
                </div>
                </Col>
                  
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    className="offCanvasNavigation"
                    scroll= {true}
                    backdrop= {true}
                  >
                    <Offcanvas.Header closeButton>
                    <Link to="/"><img src="https://i.ibb.co/t81MQDx/logo-plant-bagan.png" alt="" /></Link>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to="/">মূল পাতা</Link>
                        <Link to="/videos">ভিডিও</Link>
                        <Link to="/news">সংবাদ</Link>
                        <Link to="/courses">পাঠ্যধারা</Link>
                        <Link to="/shop">পণ্য সামগ্রী</Link>
                        <Link to="/about">আমাদের সম্পর্কে</Link>
                        
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Navbar>
              </Row>
          </Container>
        </div>
    );
};

export default Header;