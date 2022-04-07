import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
function Banner() {
  return (
    <div className='bannerSection'>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <div className="banner">
                        <div className="banner_bg">
                            <img src="https://i.ibb.co/sPkr3Z0/large-Bangladesh-Three-Women-04.jpg" alt="" />
                        </div>
                        <div className="banner_content">
                            <h3>গরুর খামার থেকে<br />
                            প্রতিমাসে আয়<br />
                            দেড় লাখ টাকা</h3>
                            <Link className='buyNow' to="/news/624b3b6ff347dc6e95d817ad">বিস্তারিতো</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="banner">
                        <div className="banner_bg">
                            <img src="https://i.ibb.co/gdbKyJS/Photo-Credit-IFPRI-1.jpg" alt="" />
                        </div>
                        <div className="banner_content">
                            <h3>হাইব্রিড অটো শিম<br />
                            কিনুন
                            ১০% ডিসকাউন্ট এ</h3>
                            <Link className='buyNow' to="/shop">অনলাইনে অর্ডার করুন</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner