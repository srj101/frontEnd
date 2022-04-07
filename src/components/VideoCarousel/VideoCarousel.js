import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Container} from 'react-bootstrap';
import { gql,useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import "./VideoCaoursel.css"
import { Skeleton} from 'antd';
const GET_VIDEOS = gql`
query {
  getVideos {
    id
    thumbnail
    title
  }
}
`;

function VideoCarousel() {
  const { loading, error, data } = useQuery(GET_VIDEOS);
  /*f(loading) return "loading...";*/
  if(loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /></Container>);
  if(error) return (<p>{error.message}</p>)
  return (
    <div className='videoCarousel'>
        <Container className="caoursel-container">
            <Carousel swiping={true} leftArrow={<LeftArrow/>} rightArrow={<RightArrow/>} show={3}>
                    {
                      data?.getVideos?.map(video => (
                        <div class="video-carousel-item"><Link key={video.id} to={`/videos/${video.id}`}><span><img src={video.thumbnail}/><div className="hover-contents">
                            {video.title}
                          </div></span></Link></div>
                      ))
                    }
            </Carousel>
        </Container>
    </div>
  )
}

export default VideoCarousel