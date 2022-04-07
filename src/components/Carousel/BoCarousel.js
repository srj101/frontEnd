import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css"
export function BoCarousel() {
  return (
      <div className='carousel-container'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>মাটি ছাড়াই হচ্ছে চাষ! হাইড্রোপনিক ফার্মিং উন্নত প্রযুক্তিতে এগিয়ে যাচ্ছে বাংলাদেশ</h3>
                    <p>ফসলের জন্য প্রয়োজনীয় খাদ্য উপাদান পানিতে যোগ করে সে পানিতে ফসল উৎপাদন করার প্রক্রিয়াকে বলা হয় হাইড্রোপনিক ফার্মিং। গাছের জন্য সরবরাহকৃত পানিতে প্রয়োজনীয় খাদ্য উপাদান বিদ্যমান থাকলে মাটি ছাড়াও গাছ উৎপাদন করা যায়।</p>
                    <p>হাইড্রোপনিক পদ্ধতিতে ফসল উৎপাদনের জন্য এ ধারণাকে কাজে লাগিয়ে মাটির পরিবর্তে পানিতে ফসল উৎপাদন করা হয়ে থাকে। এ প্রক্রিয়ায় ফসলের সব খাদ্য উপাদান দ্রবণে মিশিয়ে সেখানে গাছ রোপণ করা হয়।</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://i.ibb.co/TbWHN58/hydro-pomic.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>বর্ষার শুরুতেই গড়ে তুলুন শখের বাগান</h3>
                    <p>প্রকৃতিতে এখন বর্ষাকাল। গাছ লাগানোর উপযুক্ত সময়। বলা হয়ে থাকে—জুন, জুলাই ও আগস্টে রোপণ করা শতভাগ গাছ বাঁচানো সম্ভব।</p>
                    <p>ফলে যারা বাড়ির আঙিনা বা ছাদে শখের বসে ছোট্ট বাগান গড়ে ‍তুলতে চান, তাদের এখনই কাজে লেগে পড়া উচিত।</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://www.nationalforests.org/assets/header-images/_2000x2000_fit_center-center_none/16622/DSC_1472.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>বাড়িতে গাছপালা থাকলে চারপাশের বায়ু পরিষ্কারে সহায়তা করে</h3>
                    <p>আমরা জানি, গাছ বাতাসে কার্বন ডাই অক্সাইড হ্রাস করে এবং এটি অক্সিজেন ত্যাগ করে। তারই সাথে গাছপালা ধূলিকণা সংগ্রহ করে এবং বায়ুমণ্ডলে ক্ষতিকারক পদার্থগুলিও ভেঙে দেয়।</p>
                    <p>স্বাস্থ্যকর আর্দ্রতা বাড়ির বাতাসের গুণমানকেও উন্নত করে। এপিপ্রিমেনাম এবং স্পাথিফিলিয়ামের মতো ধরণের গাছপালা বায়ু-বিশোধক উদ্ভিদ।</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="https://i.ibb.co/ccYBbsz/indoor.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
      </Carousel>
      </div>

  )
}

export default BoCarousel;