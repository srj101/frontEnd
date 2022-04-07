import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Skeleton} from 'antd';
import { Link } from 'react-router-dom';
import './videos.style.css'
const GET_VIDEO = gql`
query($getVideoId: String!) {
  getVideo(id: $getVideoId) {
    id
    videoUrl
    thumbnail
    tag
    title
  }
}
`;

const GET_VIDEOS = gql`
query {
  getVideos {
    id
    thumbnail
    title
    desc
  }
}
`;

function SingleVideo() {
    const {videoId} = useParams();
    const { loading, error, data } = useQuery(GET_VIDEO,{
        variables: {
            getVideoId: videoId
        }
    });

    const allVideos = useQuery(GET_VIDEOS);
    if(allVideos.loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    if(loading) return (<Container><Skeleton paragraph={{ rows: 8 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    
    if(error) return (<p>{error.message}</p>)
    if(allVideos.error) return (<p>{allVideos.error.message}</p>)
  return (
    <div className='single-video-page'>
       <Container>
           <Row>
                <Col>
                    <div className="the_video">
                        <iframe src={data?.getVideo?.videoUrl}
                                frameborder='0'
                                width="100%"
                                height="480px"
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title={data?.getVideo?.title}
                        />
                    </div>
                </Col>
           </Row>
           <Row className='relatedVideos'>
                <Col>
                    { allVideos?.data?.getVideos.map(video=> (
                        <div className="single_video_item">
                            <div className="video_image">
                                <img src={video.thumbnail} alt="" />
                            </div>
                            <div className="video_content">
                                <h3><Link to={`/videos/${video.id}`}>{video.title}</Link></h3>
                                <p>মরিচ একটি গুরুত্বপূর্ণ অর্থকরী ফসল। আমাদের দেশে মূলত মরিচ মসলা ফসল হিসেবে পরিচিত। কাঁচা ও পাকা উভয় অবস্থাতেই এর প্রচুর চাহিদা রয়েছে। পুষ্টিমানে কাঁচা মরিচ ভিটামিন এ ও সি সমৃদ্ধ। দৈনন্দিন রান্নায় রঙ, রুচি ও স্বাদে ভিন্নতা আনার জন্য মরিচ একটি অপরিহার্য উপাদান।</p>
                            </div>
                        </div>
                    )) }
                    
                </Col>
           </Row>
       </Container>
    </div>
  )
}

export default SingleVideo