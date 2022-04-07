import React,{useState} from 'react'
import { gql,useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import  './courses.style.css'
import {  Tabs } from 'antd';
import { Modal } from 'react-bootstrap';
const { TabPane } = Tabs;



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

const GET_SECTION = gql`
    query($getSectionsCourseId: String!) {
  getSections(courseId: $getSectionsCourseId) {
    id
    title
    shortDescription
    courseId
    lessons{
        id
        title
        locked
        video
    }
  }
}
`;


function SingleCourse() {
    const {courseId} = useParams();
    
    const { loading, error, data } = useQuery(GET_COURSE,{
        variables: {
            getCourseId: courseId
        }
    });

    const sections = useQuery(GET_SECTION,{
        variables: {
            getSectionsCourseId: courseId
        }
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(loading) return (<Container><Skeleton paragraph={{ rows: 15 }} /></Container>);
    if(sections.loading) return (<Container><Skeleton paragraph={{ rows: 15 }} /></Container>);
    
    if(error) return (<p>{error.message}</p>)
    if(sections.error) return (<p>{sections.error.message}</p>)


  return (
    <div className='single-course-page'>
        <Container>
            <Row>
                <div className="single-course">
                    <div className="single-course-header">
                        <Row>
                            <Col md={9}>
                                <div className="course_instructor">
                                    <img src="https://secure.gravatar.com/avatar/21de95f329c1b5e6d0fab63aac913048?s=96&d=mm&r=g" alt="" />
                                    <span>
                                        {data?.getCourse?.instructorName}
                                    </span>
                                </div>
                                <h3>{data?.getCourse?.title}</h3>
                                <div className="course_meta">
                                    <div className="single-course_meta">
                                    <i class="fa fa-timer"></i>
                                        <span>
                                            {data?.getCourse?.duration}
                                        </span>
                                    </div>
                                    <div className="single-course_meta">
                                    <i class="fa fa-chart-network" area-hidden={true}></i>
                                        <span>
                                            {data?.getCourse?.sectionCount} টি সেকশন
                                        </span>
                                    </div>
                                    <div className="single-course_meta">
                                    <i class="fa fa-book-copy"></i>
                                        <span>
                                            {data?.getCourse?.lessonCount} Lessons
                                        </span>
                                    </div>
                                    <div className="single-course_meta">
                                    <i class="fa fa-camera-movie"></i>
                                        <span>
                                            {data?.getCourse?.quizCount} Quizzes
                                        </span>
                                    </div>
                                    <div className="single-course_meta">
                                    <i class="fa fa-graduation-cap"></i>
                                        <span>
                                            {data?.getCourse?.enrolledStudents}  Students
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="course-body">
                        <Row>
                            <Col md={9}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Overview" key="1">
                                    <span dangerouslySetInnerHTML={{__html: data?.getCourse?.description}} ></span>
                                    </TabPane>
                                    <TabPane tab="Curriculum" key="2">
                                        <div className="sections_list">
                                            {sections.data?.getSections?.map(section=> (
                                                <div className="single_section">
                                                    <h3>{section.title}</h3>
                                                    <p>{section.shortDescription}</p>
                                                    <div className="section_lessons">
                                                        {section.lessons?.map(lesson => (
                                                            <div className='single_lesson'>
                                                                <div className="lesson_icon">
                                                                    <i class="fa fa-copy"></i>
                                                                </div>
                                                                <div className="lesson_name">
                                                                    {lesson.locked? (<h3><Link to={`/courses/checkout/${data?.getCourse?.id}`}>{lesson.title}</Link></h3>): <h3><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></h3>}
                                                                </div>
                                                                <div className="lesspreview">
                                                                    {lesson.locked? (<i class="fa fa-lock"></i>): (<span className='previewLesson' onClick={handleShow}>Preview</span>)}
                                                                    <Modal show={show} onHide={handleClose}>
                                                                        
                                                                        <Modal.Body >
                                                                            <iframe src={lesson.video && lesson.video}
                                                                                frameborder='0'
                                                                                width='750'
                                                                                height="480"
                                                                                allow=' encrypted-media'
                                                                                allowfullscreen
                                                                                title={lesson.video && lesson.title}
                                                                        />
                                                                        </Modal.Body>
                                                                        
                                                                    </Modal>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                            
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Instructor" key="3">
                                        <div className="instructorInfo">
                                            <img src="https://secure.gravatar.com/avatar/21de95f329c1b5e6d0fab63aac913048?s=96&d=mm&r=g" alt="" />
                                        <span>
                                            {data?.getCourse?.instructorName}
                                        </span>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </Col>
                        </Row>
                    </div>
                    <div className="course-details">
                        <div className="course_image">
                            <img src={data?.getCourse?.image} alt="" />
                        </div>
                        <div className="course_details_info">
                            <p>{data?.getCourse?.price} টাকা</p>
                            <Link
                            to={`/courses/checkout/${data?.getCourse?.id}`} className="lessonPage">
                                Start Now
                            </Link>
                            <span>Featured Review</span>
                            <span className="rating">
                            {Array(data?.getCourse?.rating)
                            .fill(1)
                            .map((el, i) => (
                                <span>⭐</span>
                            ))}
                            </span>
                            <span>
                                আমি এই কোর্সটি করে  অনেক উপকৃত হয়েছি এবং অনেক কিছু শিখতে পেরেছি , অনেক অনেক  ধন্যবাদ
                            </span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default SingleCourse