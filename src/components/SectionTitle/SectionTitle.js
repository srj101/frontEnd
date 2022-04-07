import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import "./SectionTitle.css"
function SectionTitle({title}) {
  return (
    <div className="section-title-area">
        <Container>    
            <div className="videosection-title">
                <h3 className='mainvideotitle'>{title}</h3>
                {/* <div className='line1'></div> */}
            </div>
        </Container>
    </div>
  )
}

export default SectionTitle