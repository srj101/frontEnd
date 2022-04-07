import React, { useEffect, useState } from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { gql,useLazyQuery, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import { Skeleton } from 'antd';
import "./Shop.css"

const GET_PLANT = gql`
query getPlants($catId: String){
  getPlants(catId: $catId) {
            id
            SKU
            stock
            new
            categoryId
            rating
            price
            tags
            name
            image
            offer
            relatedPlant {
                id
                image
                price
                name
            }
        }
    }
`;


const GET_CATEGORIES = gql`
query getCategories {
  getCategories {
    id
    name
  }
}
`;


const Shop = () => {
    const [getCatId,setCatId] = useState(null);
    const {data,loading,error} = useQuery(GET_PLANT,{
        variables: {
            catId: getCatId
        }
    });
    const categories = useQuery(GET_CATEGORIES);
    const [getPlants,setPlants] = useState([]);

    

    useEffect(()=> {
        if(!loading) {
            setPlants(data)
        }
    },[loading,categories.loading,getCatId])

    if(loading) return (<Container><Row><Col md={3}><Skeleton paragraph={{ rows: 15 }} /></Col><Col md={9}><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row></Col></Row></Container>);
    if(categories.loading) return (<Container><Row><Col md={3}><Skeleton paragraph={{ rows: 15 }} /></Col><Col md={9}><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row><Row><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col><Col md={3}><Skeleton paragraph={{ rows: 3 }} /></Col></Row></Col></Row></Container>);
    if(error) return (<p>{error.message}</p>);
    if(categories.error) return (<p>{categories.error.message}</p>);

    return (
        <div className='shop_page'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="sideBar">
                            <h3>Categories</h3>
                            <div className="listOfCats">
                                <span className='categoryName' onClick={() => {
                                        setCatId(null)
                                    }}>All</span>
                                {categories.data?.getCategories?.map(category=> (
                                    <span className='categoryName' key={category.id} onClick={() => {
                                        setCatId(category.id)
                                    }}>{category.name}</span>
                                ))}
                            </div>
                            <div className="related_products">
                                <h3>সর্বশেষ প্রোডাক্টগুলি</h3>
                                {getPlants?.getPlants ? getPlants?.getPlants[0]?.relatedPlant?.map(plant=> (
                                    <Link to={`/plants/${plant.id}`} className='single_relatedProduct'>
                                        <div className="relatedPlantImage">
                                            <img src={plant.image} alt={plant.name} />
                                        </div>
                                        <div className="related_productsContents">
                                            <h3>{plant.name}</h3>
                                            <p>মূল্য: {plant.price} টাকা</p>
                                        </div>
                                    </Link>
                                )): "loading.."}
                            </div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="shopPlants">
                            <div className="breadcrumb">
                                <p>Home / Shop</p>
                                <h4>SHOP</h4>
                            </div>
                            <Row>
                                {getPlants?.getPlants?.map(plant => (
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
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;