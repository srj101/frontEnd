import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import "./MiniShop.css"
import { Skeleton} from 'antd';

const GET_10_PLANTS = gql`
    query {
        getPlants12 {
            id
            price
            image
            name
        }
    }
`;

function MiniShop() {
    const { loading, error, data } = useQuery(GET_10_PLANTS);
    if(loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /></Container>);
    if(error) return (<p>{error.message}</p>)
    return (
      <div className='plantMiniShopArea'>
          <Container className="plantShop-container">
                <Row>
                {
                        data?.getPlants12?.map(plant => (
                          <Col xs={6} sm={6} md={4} lg={2} key={plant.id}><span className='single-plant'><img src={plant.image}/>
                          <div className="shop-hover-content">
                                <p className="name">{plant.name}</p>
                              <p className="price">মূল্য: {plant.price} টাকা</p>
                              <Link className='buyNow' to={`/plant/${plant.id}`}>অর্ডার করুন</Link>
                          </div>
                          </span></Col>
                        ))
                      }
                </Row>
                <Row>
                <span className="seeMore"><Link  to={`/plant/`}>আরও পণ্য দেখুন</Link></span> 
                </Row>
          </Container>
      </div>
    )
}

export default MiniShop