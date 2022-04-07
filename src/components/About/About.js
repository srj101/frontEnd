import React from 'react';
import{Form,FormGroup,Button,Row,Col} from 'react-bootstrap'
import './About.css'
const About = () => {
    return (
        <div>
            <div><h1 className='h1about'>Our Team Members</h1>
<div className='div1about'>
</div>
<h1 className='h2about'>Our Mission</h1>
<p className='p1about'>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where<br/> 
what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience,
 and succeed with a soul<br/> — and that they can do it with inbound. That's why we've created an 
 ecosystem uniting software, education, and community to<br/> help businesses grow better every day. </p>
<h1 className='h3about'>About Our Project</h1>
<p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where<br/> 
what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience,
 and succeed with a soul<br/> — and that they can do it with inbound. That's why we've created an 
 ecosystem uniting software, education, and community to<br/> help businesses grow better every day.</p> </div>
            
 <div className='form1about'><Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className='emailabout'>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter your address" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Send
  </Button>
</Form></div>
</div>
    );
};

export default About;