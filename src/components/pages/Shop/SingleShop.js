import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Image, Skeleton,Tabs} from 'antd';
import { Link } from 'react-router-dom';
import CreateReview from '../../createReview';
import "./Shop.css"
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

const GET_REVIEWS = gql`
  query($getReviewsType: String!, $getReviewsPlantOrCourseId: String!) {
  getReviews(type: $getReviewsType, plantOrCourseId: $getReviewsPlantOrCourseId) {
    id
    name
    Comment
    rating
    plantOrCourseId
  }
}
`;

function SingleShop() {
  const {plantId} = useParams();
    const { loading, error, data } = useQuery(SINGLE_PRODUCT,{
        variables: {
          getPlantId: plantId
        }
    });
    const plantReviews = useQuery(GET_REVIEWS,{
      variables: {
        getReviewsType: "plant",
        getReviewsPlantOrCourseId:plantId
      }
  });
    if(loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    if(plantReviews.loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    if(error) return (<p>{error.message}</p>)
    if(plantReviews.error) return (<p>{plantReviews.error.message}</p>)

  return (
    <div className='singleShop'>
      <Container>
        <Row>
          <Col md={5}>
            <div className="single_plant_image">
              <Image src={data?.getPlant?.image}/>
            </div>
          </Col>
          <Col md={7}>
            <div className="product_info">
              <div className="breadcrumb">
                <p>Shop / {data?.getPlant?.name}</p>
              </div>
              <h3>{data?.getPlant?.name}</h3>
              <p>Stock : {data?.getPlant?.stock}</p>
              <p>{Array(data?.getPlant?.rating)
                        .fill(1)
                        .map((el, i) => (
                            <span>⭐</span>
                        ))}</p>
              <Link to={`/plants/checkout/${plantId}`}>Buy Now</Link>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
            <Col>
            <Tabs defaultActiveKey="1" className='shop_tab_single'>
              <TabPane tab="Description" key="1">
                <span className='description_' dangerouslySetInnerHTML={{__html: data?.getPlant?.description}}></span>
              </TabPane>
              <TabPane tab="Reviews" key="2">
                <Row>
                  <Col>
                    <h2>Reviews</h2>
                    {
                      plantReviews.data?.getReviews?.length > 0 ? 
                      plantReviews.data?.getReviews?.map(review=> (
                        <div className='singleReview'>
                          <p>{review.name} : <span>{review.Comment}{` ( `}{Array(review.rating)
                        .fill(1)
                        .map((el, i) => (
                            <span>⭐</span>
                        ))} {` ) `}</span></p>
                        </div>
                      )) : "There are no reviews yet!"
                    }        
                  </Col>
                  <Col>
                      <CreateReview type="plant" id={data?.getPlant?.id} />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
            </Col>
        </Row>
        <Row>
            <div className="relatedPlants">
              <h3>Related Products</h3>
              {data?.getPlant?.relatedPlant?.map(plant=> (
                <Col key={plant.id} lg={3}>
                    <div className="single_plant">
                        <div className="plant_image">
                            <img src={plant.image} alt={plant.name} />
                        </div> 
                        <div className="plant_desc">
                            <Link to={`/plants/${plant.id}`}><h3>{plant.name}</h3></Link>
                            <p>{plant.price} টাকা</p>
                        </div>
                    </div>    
                </Col>
              ))}
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default SingleShop
