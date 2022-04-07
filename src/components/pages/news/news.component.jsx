import React from 'react'
import './news.style.css'
import { gql,useQuery } from '@apollo/client'
import { Container,Row,Col} from 'react-bootstrap';
import {Skeleton} from 'antd';
import { Link } from 'react-router-dom';
const GET_NEWS = gql`
    query {
    getNews{
            id
            featuredImage
            title
            postedBy
            date
        }
    }
`;

function News() {
    const { loading, error, data } = useQuery(GET_NEWS)

    if(loading) return (<Container><Skeleton paragraph={{ rows: 12 }} /><br/><br/><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /><Skeleton paragraph={{ rows: 4 }} /></Container>);
    
    if(error) return (<p>{error.message}</p>)

    return (
        <div className='news_page page'>
            <Container>
                <Row>
                    <Col>
                        <div className="top_latestPost">
                            <div className="postImage">
                                <img src={data?.getNews[0]?.featuredImage} alt="" />
                            </div>
                            <div className="topPostContent">
                                <h3>{data?.getNews[0]?.title}</h3>
                                <p>মরিচের অনেক স্থানীয় জাত আছে, কৃষকরা বাজারের চাহিদা ও স্থানীয় জাতের ফলনের ওপর জাত নির্বাচন করে থাকে। তবে মসলা গবেষণা কেন্দ্র, বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট বারি মরিচ-১ (বাংলা লংকা), বারি মরিচ-২ ও বারি মরিচ-৩ নামে রোগ ও পোকামাকড় প্রতিরোধী  উচ্চফলনশীল জাত উদ্ভাবন করেছে যা দেশের বিভিন্ন অঞ্চলে (মাগুরা, ফরিদপুর, বগুড়া, রংপুর, গাইবান্ধা, কুমিল্ল­া, রাজশাহী, নীলফামারী, ডোমার, পঞ্চগড়, পাবনা, জামালপুর ও লালমনিরহাটে) স্থানীয় জাতের পাশাপাশি সারা বছর ব্যাপকভাবে চাষাবাদ হয়। এছাড়াও দেশে বিভিন্ন হাইব্রিড মরিচ বীজ যেমন ঝিলিক, বিজলী ইত্যাদি নামে বাজারে পাওয়া যায়।</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="blogPosts">
                        {data?.getNews?.map(news=> (
                            <div className="singleBlogPostItem" key={news.id}>
                                <div className="newsPostImage">
                                    <img src={news.featuredImage} alt="" />
                                </div>
                                <div className="newsPostContent">
                                    <Link to={`/news/${news.id}`}><h3>{news.title}</h3></Link>
                                    <p>সাধারণত জাতভেদে পাতলা ত্বক ও শুষ্ক পদার্থের পরিমাণ কম এই জাতীয় মরিচ তাড়াতাড়ি শুকানো যায় কিন্তু পুরু মাংসল ত্বক বিশিষ্ট মরিচ শুকানো বেশ সময়সাপেক্ষ এবং কঠিন। মরিচ শুকানোর  পরে ছায়াযুক্ত স্থানে ঠা-া করে সংরক্ষণ করতে হবে। ছয় মাস হতে এক বছর সময় পর্যন্ত মরিচ সংরক্ষণের জন্য টিনের পাত্র, পলিথিন ব্যাগ, মাটির পাত্র, ডুলি বা ছালার ব্যাগ ব্যবহার করা হয়। তবে দ্বিস্তর বিশিষ্ট পলিথিন ব্যাগ ও টিনের পাত্রের মধ্যে পলিথিন দিয়ে তার ভেতর মরিচ রাখলে মরিচের রঙ ও গুণগতমান ভালো থাকে। সংরক্ষিত মরিচ মাঝে মাঝে রৌদ্রে দিলে ভালো থাকে .... </p>

                                    
                                    <Link className='readMore' to={`/news/${news.id}`}>
                                        আরো পড়ুন
                                    </Link>
                                </div>
                        </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default News