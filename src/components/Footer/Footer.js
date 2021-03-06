import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <div className='footerArea'>
        <Container>
            <Row>
                <Col lg={7}>
                    <Row>
                        <Col>
                            <div className="team_members footer-widget">
                                <h2>টিমের সদস্যরা</h2>
                                <div className="teammates_images">
                                    <img src="https://i.ibb.co/K6cR41y/IMG-20200510-010716-674.jpg" alt="" />
                                    <img src="https://i.postimg.cc/K8XgqmtH/274989892-493596848843608-6440486483695449741-n.jpg" alt="" />
                                    <img src="https://i.ibb.co/jftFtSn/salim.jpg" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                তালিকা
                                </h3>
                                <ul>
                                    <li><Link to="/">মূল পাতা</Link></li>
                                    <li><Link to="/videos">ভিডিও</Link></li>
                                    <li><Link to="/news">সংবাদ</Link></li>
                                    <li><Link to="/courses">পাঠ্যধারা</Link></li>
                                    <li><Link to="/shop">পণ্য সামগ্রী</Link></li>
                                    <li><Link to="/about">আমাদের সম্পর্কে</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col> 
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                সংবাদ
                                </h3>
                                <ul>
                                    <li><Link to="/news/624b40fdaec54526c5598984">গমের ব্লাস্ট রোগের লক্ষণ ও প্রতিকার</Link></li>
                                    <li><Link to="/news/624b3fbcaec54526c559897b">ইড্রোপনিক পদ্ধতিতে চাষযোগ্য ফসল</Link></li>
                    
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                ভিডিও
                                </h3>
                                <ul>
                                    <li><Link to="/videos/624b0827c7edc1d31436053c">মাছ চাষ - সবজি চাষ - ৩৫০০০০ টাকা আয় ৬মাসে</Link></li>
                                    <li><Link to="/videos/624b0898c7edc1d314360543">পেঁপে আবাদে ভাগ্য পাল্টেছে আবু বক্কর সিদ্দিকের </Link></li>
                                    
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                পাঠ্যধারা
                                </h3>
                                <ul>
                                    <li><Link to="/courses/624c4abe82435018cdeb2e25">দুগ্ধবতী গাভী লালন পালন বিষয়ক প্রশিক্ষণ</Link></li>
                                    <li><Link to="/courses/624b4fb5aec54526c5598a53">কিভাবে রাম্বুটান গাছ রোপন করতে হয়</Link></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <Row>
                        <Col>
                           <div className="footer-download-app">
                            <Link to={"/"}  className='app_download'>Download App</Link>
                                <span>হটলাইন: +৮৮০১৫৩৩৫১৫</span>
                                <span>ইমেইল : plantbagan@email.com</span>
                           </div>
                        </Col>
                        <Col>
                            <div className="footer_contact">
                                <input type="email" placeholder='Type your email' />
                                <input type="submit" value={`submit`} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="footer_bottom">
                    <Container>
                        <Row>
                            <span>Powered By Divlap Soft</span>
                        </Row>
                    </Container>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
