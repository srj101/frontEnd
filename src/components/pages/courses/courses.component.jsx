import React from 'react'
import { gql,useQuery } from '@apollo/client'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './courses.style.css'
import { Skeleton } from 'antd';

const GET_COURSEs = gql`
query getCourses{
  getCourses {
    id
    title
    rating
    image
    overview
    lessonCount
    description
  }
}
`;

function Course() {
    const { loading, error, data } = useQuery(GET_COURSEs);
    if(loading) return (<Container><Skeleton paragraph={{ rows: 20 }} /></Container>);
    if(error) return (<p>{error.message}</p>)
    return (
        <div className='course_page'>
            <Container>
            {/* <Row>
                    <Col>
                        <div className="top_latestPost">
                            <div className="postImage">
                                <img src={data?.getCourses[1]?.image} alt="" />
                            </div>
                            <div className="topPostContent">
                                <h3>{data?.getCourses[1]?.title}</h3>
                                <p>মরিচের অনেক স্থানীয় জাত আছে, কৃষকরা বাজারের চাহিদা ও স্থানীয় জাতের ফলনের ওপর জাত নির্বাচন করে থাকে। তবে মসলা গবেষণা কেন্দ্র, বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট বারি মরিচ-১ (বাংলা লংকা), বারি মরিচ-২ ও বারি মরিচ-৩ নামে রোগ ও পোকামাকড় প্রতিরোধী  উচ্চফলনশীল জাত উদ্ভাবন করেছে যা দেশের বিভিন্ন অঞ্চলে (মাগুরা, ফরিদপুর, বগুড়া, রংপুর, গাইবান্ধা, কুমিল্ল­া, রাজশাহী, নীলফামারী, ডোমার, পঞ্চগড়, পাবনা, জামালপুর ও লালমনিরহাটে) স্থানীয় জাতের পাশাপাশি সারা বছর ব্যাপকভাবে চাষাবাদ হয়। এছাড়াও দেশে বিভিন্ন হাইব্রিড মরিচ বীজ যেমন ঝিলিক, বিজলী ইত্যাদি নামে বাজারে পাওয়া যায়।</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
                <Row>
                    {data?.getCourses?.map(course => (
                        <Col sm={12} key={course.id}>
                            <div className="single-course">
                                <Link to={`/courses/${course.id}`}>
                                    <div className="course-thumbnail">
                                        <img src={course.image} alt="" />
                                    </div>
                                    <div className="course-content">
                                        <h4>{course.title}</h4>
                                        <p>{course.overview}</p> 
                                    </div>
                                    <div className="coursePlayButton">
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                <span className="seeMore"><Link  to={`/courses/`}>আরো পাঠ্যধারা দেখুন</Link></span> 
                </Row>
            </Container>
        </div>
    )
}
export default Course