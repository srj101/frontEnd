import React from 'react';
import{Form,FormGroup,Button,Row,Col} from 'react-bootstrap'
import './About.css'
const About = () => {
    return (
        <div className='pridivabout'>
          <div>
<section id="our-testimonial" class="padding">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 text-center">
        <div class="heading-title bottom30 wow fadeInUp" data-wow-delay="300ms">
          <h2 class="darkcolor">আমাদের দলের সদস্যরা</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div id="testimonial-slider" class="owl-carousel">
          <div class="item">
            <div class="testimonial-wrapp"> <span class="quoted"><i class="fa fa-quote-right"></i></span>
              <div class="testimonial-text">
                <p class="bottom40">Donec semper euismod nisi quis feugiat. Nullam finibus metus eget orci volutpat porta. Morbi quis arcu vulputate, dignissim mi ac, varius magna.</p>
              </div>
              <div class="testimonial-photo"><img alt="" src="https://i.ibb.co/K6cR41y/IMG-20200510-010716-674.jpg"/></div>
              <h4 class="darkcolor">Sam David</h4>
              <small class="defaultcolor">Backend Developer</small> </div>
          </div>
          <div class="item">
            <div class="testimonial-wrapp"> <span class="quoted"><i class="fa fa-quote-right"></i></span>
              <div class="testimonial-text">
                <p class="bottom40">Donec semper euismod nisi quis feugiat. Nullam finibus metus eget orci volutpat porta. Morbi quis arcu vulputate, dignissim mi ac, varius magna.</p>
              </div>
              <div class="testimonial-photo"><img alt="" src="https://i.ibb.co/K6cR41y/IMG-20200510-010716-674.jpg"/></div>
              <h4 class="darkcolor">Jams Shah</h4>
              <small class="defaultcolor">Businessman</small> </div>
          </div>
          <div class="item">
            <div class="testimonial-wrapp"> <span class="quoted"><i class="fa fa-quote-right"></i></span>
              <div class="testimonial-text">
                <p class="bottom40">Donec semper euismod nisi quis feugiat. Nullam finibus metus eget orci volutpat porta. Morbi quis arcu vulputate, dignissim mi ac, varius magna.</p>
              </div>
              <div class="testimonial-photo"><img alt="" src="https://i.ibb.co/K6cR41y/IMG-20200510-010716-674.jpg"/></div>
              <h4 class="darkcolor">Zubin Zucker</h4>
              <small class="defaultcolor">Businessman</small> </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<div>

<h1 className='h2about'>আমাদের লক্ষ্য</h1>
<p className='p1about'>আমরা কৃষক এবং জনসাধারণের জন্য একটি ওয়েব অ্যাপ্লিকেশন তৈরি করছি<br/>এই অ্যাপ্লিকেশনটি কৃষক এবং জনসাধারণকে কীভাবে গাছের যত্ন নিতে হয় তা জানতে সাহায্য করবে।<br/> গাছ লাগানোর নির্দেশাবলীর জন্য আমরা আমাদের ওয়েব অ্যাপ্লিকেশনে কিছু বিনামূল্যের ভিডিও বানাতে পারি। <br/>আমরা বিদেশী উদ্ভিদের সর্বশেষ খবর, ভিডিও, কোর্স এবং ইকমার্স প্রদান করব। আমরা কৃষকদের জন্য আমাদের ওয়েব অ্যাপ্লিকেশনে ইকমার্স বৈশিষ্ট্য বিকাশ<br/> পারি এবং জনসাধারণ কৃষি আইওটি মেশিন, প্ল্যান্ট কিনবে
আমরা আমাদের প্রকল্পের জন্য রিয়েক্ট জেএস ফ্রেমওয়ার্ক ব্যবহার করা হয়. </p>
<h1 className='h3about'>আমাদের অ্যাপ্লিকেশন সম্পর্কে</h1>
<p className='p2about'>আমরা কৃষক এবং জনসাধারণের জন্য একটি ওয়েব অ্যাপ্লিকেশন তৈরি করছি<br/>এই অ্যাপ্লিকেশনটি কৃষক এবং জনসাধারণকে কীভাবে গাছের যত্ন নিতে হয় তা জানতে সাহায্য করবে।<br/> গাছ লাগানোর নির্দেশাবলীর জন্য আমরা আমাদের ওয়েব অ্যাপ্লিকেশনে কিছু বিনামূল্যের ভিডিও বানাতে পারি। <br/>আমরা বিদেশী উদ্ভিদের সর্বশেষ খবর, ভিডিও, কোর্স এবং ইকমার্স প্রদান করব। আমরা কৃষকদের জন্য আমাদের ওয়েব অ্যাপ্লিকেশনে ইকমার্স বৈশিষ্ট্য বিকাশ<br/> পারি এবং জনসাধারণ কৃষি আইওটি মেশিন, প্ল্যান্ট কিনবে
আমরা আমাদের প্রকল্পের জন্য রিয়েক্ট জেএস ফ্রেমওয়ার্ক ব্যবহার করা হয়.</p> </div>
<div className='form7'><div class="container mt-5">
<form class="row g-3">
<div class="col-md-6">
  <label for="firstName" class="form-label">নামের প্রথম অংশ</label>
  <input type="text" class="form-control" id="firstname" required></input>
</div>
<div class="col-md-6">
  <label for="firstName" class="form-label">নামের শেষাংশ</label>
  <input type="text" class="form-control" id="firstname" required></input>
</div>
<div class="col-md-8">
  <label for="emailInfo" class="form-label">ইমেইল</label>
  <input type="Email" class="form-control" id="emailInfo" required></input>
</div>
<div class="col-md-4">
  <label for="phoneNumber" class="form-label">ফোন</label>
  <input type="text" class="form-control" id="phoneNumber" placeholder="+৮৮"></input>
</div>
<div class="col-md-12">
  <label for="comments" class="form-label">মন্তব্য, প্রশ্ন?</label>
  <textarea class="form-control" id="comments" row="3"></textarea>
</div>
<div  class="col-md-12">
  <button type="submit" class="btn btn-secondary">মন্তব্য পাঠান</button>
</div>
</form>
</div></div>


</div>
    );
};

export default About;