import React,{useState} from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import {  Tabs } from 'antd';
import { Modal } from 'react-bootstrap';
import "./Checkout.css";
const { TabPane } = Tabs;

const SINGLE_PRODUCT = gql`
query getPlant($getPlantId: String!){
  getPlant(id: $getPlantId) {
    id
    SKU
    stock
    name
    description
    image
    rating
    price
    tags
    offer
    relatedPlant {
      id
      name
      image
      offer
      tags
    }
  }
}
`;

const GET_COURSE = gql`
query($getCourseId: String!){
  getCourse(id: $getCourseId) {
    id
    title
    rating
    instructorName
    description
    duration
    lessonCount
    level
    sectionCount
    quizCount
    enrolledStudents
    image
    price
    overview
  }
}
`


function Checkout({type}) {
    const {courseId} = useParams();
    const {plantId} = useParams();

    
      const courses = useQuery(GET_COURSE,{
          variables: {
              getCourseId: courseId
          }
      });
    
      const plants = useQuery(SINGLE_PRODUCT,{
        variables: {
          getPlantId: plantId
          }
      });
    
  
  return (
    <div className='checkout_page'>
      
      <Container>
        <Row>
          <Col md={8}>
            <div className="checkout_form">
              checkout form
            </div>
          </Col>
          <Col md={4}>
            <div className="order_info">
              <h3>Your Order</h3>
              {type === "plant" ? (
                <div className='ordered_item'>
                  <div className="ordered_itemImage">
                    <img src={plants.data?.getPlant?.image} alt={plants.data?.getPlant?.name} />
                  </div>
                  <div className="order_info_content">
                    <h4>{plants.data?.getPlant?.name}</h4>
                    <span className="price">মূল্য : {plants.data?.getPlant?.price}</span>
                  </div>
                </div>
              ): (
                <div className='ordered_item'>
                  <div className="ordered_itemImage">
                    <img src={courses.data?.getCourse?.image} alt={courses.data?.getCourse?.title} />
                  </div>
                  <div className="order_info_content">
                    <h4>{courses.data?.getCourse?.title}</h4>
                    <span className="price">মূল্য : {courses.data?.getCourse?.price} টাকা</span>
                  </div>
                </div>
              )}
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Checkout