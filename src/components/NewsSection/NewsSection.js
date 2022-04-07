import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import "./NewsSection.css"
import { Skeleton } from 'antd';

const GET_VIDEOS = gql`
query {
  getNews{
    id
    title
    featuredImage
    postedBy
    date
  }
}
`;

function VideoCarousel() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  if(loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /></Container>);
  
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='newsCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true}  dynamic={true} useArrowKeys={false} show={4}>
                    {
                      data?.getNews?.map(news => (
                        <Link key={news.id} to={`/news/${news.id}`}><span><img src={news.featuredImage}/><div className="hover-contents">
                        <span>{news.title.split(' ').slice(0, 4).join(' ')}...</span>
                        <span className="postedBy">Posted By : {news.postedBy}</span>
                      </div></span></Link>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default VideoCarousel