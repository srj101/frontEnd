import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import './news.style.css'
import { Comment, Avatar } from 'antd';
const GET_NEWS = gql`
query($getSingleNewsId: String!){
  getSingleNews(id: $getSingleNewsId) {
    id
    title
    featuredImage
    postedBy
    description
    date
  }
}
`;

const ExampleComment = ({ children }) => (
    <Comment
      actions={[<span key="comment-nested-reply-to">প্রতি উত্তর</span>]}
      author={<a>শাহজাহান আলী বিশ্বাস</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          মরিচ একটি গুরুত্বপূর্ণ অর্থকরী ফসল। আমাদের দেশে মূলত মরিচ মসলা ফসল হিসেবে পরিচিত।
        </p>
      }
    >
      {children}
    </Comment>
  );

function SingleNews({ children }) {
    const {newsId} = useParams();
    const { loading, error, data } = useQuery(GET_NEWS,{
        variables: {
            getSingleNewsId: newsId
        }
    });

    if(loading) return (<Container><Skeleton paragraph={{ rows: 15 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    
    if(error) return (<p>{error.message}</p>)

  return (
    <div className='single-news-page'>
       <Container>
           <Row>
                <Col>
                    <div className="the_news">
                        <div className="news_image">
                            <img src={data?.getSingleNews?.featuredImage} alt="" />
                        </div>
                        <div className="news_content">
                            <h3>{data?.getSingleNews?.title}</h3>
                            <span dangerouslySetInnerHTML={{__html: data?.getSingleNews?.description}} ></span> 
                        </div>
                    </div>
                </Col>
           </Row>
            <Row>
                <Col>
                    <div className="comment_section">
                        <span>মন্তব্য</span>
                        <ExampleComment>
                            <ExampleComment>
                            <ExampleComment />
                            <ExampleComment />
                            </ExampleComment>
                        </ExampleComment>
                    </div>
                </Col>
            </Row>
       </Container>
    </div>
  )
}

export default SingleNews