import React from 'react'
import { gql,useQuery,useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';

import {  Tabs,  Form,
  Input,
  Select,
  Button } from 'antd';

import "./Checkout.css";
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;
const { TabPane } = Tabs;

const SINGLE_PRODUCT = gql`
query getPlant($getPlantId: String!){
  getPlant(id: $getPlantId) {
    id
    SKU
    stock
    name
    description
    image
    rating
    price
    tags
    offer
    relatedPlant {
      id
      name
      image
      offer
      tags
    }
  }
}
`;

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

const CREATE_ORDER = gql`
  mutation($createOrderInput: OrderInput!) {
    createOrder(input: $createOrderInput) {
      trackingID
    }
  }
`;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Checkout({type}) {
    const [form] = Form.useForm();
    const {courseId} = useParams();
    const {plantId} = useParams();
    const navigate = useNavigate();

    const [createOrder, orderCreated] = useMutation(CREATE_ORDER);
    
      const courses = useQuery(GET_COURSE,{
          variables: {
            getCourseId: courseId
          }
      });
    
      const plants = useQuery(SINGLE_PRODUCT,{
        variables: {
          getPlantId: plantId
          }
      });
    
      const onFinish = async(values) => {
        await createOrder({
          variables: {
            createOrderInput:{
              ...values,
              type:type,
              plantOrCourseId: plantId||courseId
            }
          }
        });
        navigate(`/orders/success`);
      }
  return (
    <div className='checkout_page'>
      
      <Container>
        <Row>
          <Col md={8}>
            <div className="checkout_form">
            <Form
              {...formItemLayout}
              form={form}
              name="addPlants"
              onFinish={onFinish}
              className="col-8"
              scrollToFirstError
            >
        


            <Row>
              <Col>
                <Form.Item
                name="fname"
                label="First Name"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              </Col>
              <Col>
                <Form.Item
                name="lname"
                label="Last Name"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
              <Input />
            </Form.Item>
              </Col>
            </Row>

            <Form.Item
                name="cname"
                label="Company Name (Optional)"
              >
              <Input />
            </Form.Item>




            <Form.Item
              name="country"
              label="Country/Region"
              rules={[
                {
                  required:true,
                },
              ]}
            >
                <Select placeholder="Select Country" >
                  <Option value="Afganistan">Afghanistan</Option>
                  <Option value="Albania">Albania</Option>
                  <Option value="Algeria">Algeria</Option>
                  <Option value="American Samoa">American Samoa</Option>
                  <Option value="Andorra">Andorra</Option>
                  <Option value="Angola">Angola</Option>
                  <Option value="Anguilla">Anguilla</Option>
                  <Option value="Antigua and Barbuda">Antigua and Barbuda</Option>
                  <Option value="Argentina">Argentina</Option>
                  <Option value="Armenia">Armenia</Option>
                  <Option value="Aruba">Aruba</Option>
                  <Option value="Australia">Australia</Option>
                  <Option value="Austria">Austria</Option>
                  <Option value="Azerbaijan">Azerbaijan</Option>
                  <Option value="Bahamas">Bahamas</Option>
                  <Option value="Bahrain">Bahrain</Option>
                  <Option value="Bangladesh">Bangladesh</Option>
                  <Option value="Barbados">Barbados</Option>
                  <Option value="Belarus">Belarus</Option>
                  <Option value="Belgium">Belgium</Option>
                  <Option value="Belize">Belize</Option>
                  <Option value="Benin">Benin</Option>
                  <Option value="Bermuda">Bermuda</Option>
                  <Option value="Bhutan">Bhutan</Option>
                  <Option value="Bolivia">Bolivia</Option>
                  <Option value="Bonaire">Bonaire</Option>
                  <Option value="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
                  <Option value="Botswana">Botswana</Option>
                  <Option value="Brazil">Brazil</Option>
                  <Option value="British Indian Ocean Ter">British Indian Ocean Ter</Option>
                  <Option value="Brunei">Brunei</Option>
                  <Option value="Bulgaria">Bulgaria</Option>
                  <Option value="Burkina Faso">Burkina Faso</Option>
                  <Option value="Burundi">Burundi</Option>
                  <Option value="Cambodia">Cambodia</Option>
                  <Option value="Cameroon">Cameroon</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="Canary Islands">Canary Islands</Option>
                  <Option value="Cape Verde">Cape Verde</Option>
                  <Option value="Cayman Islands">Cayman Islands</Option>
                  <Option value="Central African Republic">Central African Republic</Option>
                  <Option value="Chad">Chad</Option>
                  <Option value="Channel Islands">Channel Islands</Option>
                  <Option value="Chile">Chile</Option>
                  <Option value="China">China</Option>
                  <Option value="Christmas Island">Christmas Island</Option>
                  <Option value="Cocos Island">Cocos Island</Option>
                  <Option value="Colombia">Colombia</Option>
                  <Option value="Comoros">Comoros</Option>
                  <Option value="Congo">Congo</Option>
                  <Option value="Cook Islands">Cook Islands</Option>
                  <Option value="Costa Rica">Costa Rica</Option>
                  <Option value="Cote DIvoire">Cote DIvoire</Option>
                  <Option value="Croatia">Croatia</Option>
                  <Option value="Cuba">Cuba</Option>
                  <Option value="Curaco">Curacao</Option>
                  <Option value="Cyprus">Cyprus</Option>
                  <Option value="Czech Republic">Czech Republic</Option>
                  <Option value="Denmark">Denmark</Option>
                  <Option value="Djibouti">Djibouti</Option>
                  <Option value="Dominica">Dominica</Option>
                  <Option value="Dominican Republic">Dominican Republic</Option>
                  <Option value="East Timor">East Timor</Option>
                  <Option value="Ecuador">Ecuador</Option>
                  <Option value="Egypt">Egypt</Option>
                  <Option value="El Salvador">El Salvador</Option>
                  <Option value="Equatorial Guinea">Equatorial Guinea</Option>
                  <Option value="Eritrea">Eritrea</Option>
                  <Option value="Estonia">Estonia</Option>
                  <Option value="Ethiopia">Ethiopia</Option>
                  <Option value="Falkland Islands">Falkland Islands</Option>
                  <Option value="Faroe Islands">Faroe Islands</Option>
                  <Option value="Fiji">Fiji</Option>
                  <Option value="Finland">Finland</Option>
                  <Option value="France">France</Option>
                  <Option value="French Guiana">French Guiana</Option>
                  <Option value="French Polynesia">French Polynesia</Option>
                  <Option value="French Southern Ter">French Southern Ter</Option>
                  <Option value="Gabon">Gabon</Option>
                  <Option value="Gambia">Gambia</Option>
                  <Option value="Georgia">Georgia</Option>
                  <Option value="Germany">Germany</Option>
                  <Option value="Ghana">Ghana</Option>
                  <Option value="Gibraltar">Gibraltar</Option>
                  <Option value="Great Britain">Great Britain</Option>
                  <Option value="Greece">Greece</Option>
                  <Option value="Greenland">Greenland</Option>
                  <Option value="Grenada">Grenada</Option>
                  <Option value="Guadeloupe">Guadeloupe</Option>
                  <Option value="Guam">Guam</Option>
                  <Option value="Guatemala">Guatemala</Option>
                  <Option value="Guinea">Guinea</Option>
                  <Option value="Guyana">Guyana</Option>
                  <Option value="Haiti">Haiti</Option>
                  <Option value="Hawaii">Hawaii</Option>
                  <Option value="Honduras">Honduras</Option>
                  <Option value="Hong Kong">Hong Kong</Option>
                  <Option value="Hungary">Hungary</Option>
                  <Option value="Iceland">Iceland</Option>
                  <Option value="Indonesia">Indonesia</Option>
                  <Option value="India">India</Option>
                  <Option value="Iran">Iran</Option>
                  <Option value="Iraq">Iraq</Option>
                  <Option value="Ireland">Ireland</Option>
                  <Option value="Isle of Man">Isle of Man</Option>
                  <Option value="Israel">Israel</Option>
                  <Option value="Italy">Italy</Option>
                  <Option value="Jamaica">Jamaica</Option>
                  <Option value="Japan">Japan</Option>
                  <Option value="Jordan">Jordan</Option>
                  <Option value="Kazakhstan">Kazakhstan</Option>
                  <Option value="Kenya">Kenya</Option>
                  <Option value="Kiribati">Kiribati</Option>
                  <Option value="Korea North">Korea North</Option>
                  <Option value="Korea Sout">Korea South</Option>
                  <Option value="Kuwait">Kuwait</Option>
                  <Option value="Kyrgyzstan">Kyrgyzstan</Option>
                  <Option value="Laos">Laos</Option>
                  <Option value="Latvia">Latvia</Option>
                  <Option value="Lebanon">Lebanon</Option>
                  <Option value="Lesotho">Lesotho</Option>
                  <Option value="Liberia">Liberia</Option>
                  <Option value="Libya">Libya</Option>
                  <Option value="Liechtenstein">Liechtenstein</Option>
                  <Option value="Lithuania">Lithuania</Option>
                  <Option value="Luxembourg">Luxembourg</Option>
                  <Option value="Macau">Macau</Option>
                  <Option value="Macedonia">Macedonia</Option>
                  <Option value="Madagascar">Madagascar</Option>
                  <Option value="Malaysia">Malaysia</Option>
                  <Option value="Malawi">Malawi</Option>
                  <Option value="Maldives">Maldives</Option>
                  <Option value="Mali">Mali</Option>
                  <Option value="Malta">Malta</Option>
                  <Option value="Marshall Islands">Marshall Islands</Option>
                  <Option value="Martinique">Martinique</Option>
                  <Option value="Mauritania">Mauritania</Option>
                  <Option value="Mauritius">Mauritius</Option>
                  <Option value="Mayotte">Mayotte</Option>
                  <Option value="Mexico">Mexico</Option>
                  <Option value="Midway Islands">Midway Islands</Option>
                  <Option value="Moldova">Moldova</Option>
                  <Option value="Monaco">Monaco</Option>
                  <Option value="Mongolia">Mongolia</Option>
                  <Option value="Montserrat">Montserrat</Option>
                  <Option value="Morocco">Morocco</Option>
                  <Option value="Mozambique">Mozambique</Option>
                  <Option value="Myanmar">Myanmar</Option>
                  <Option value="Nambia">Nambia</Option>
                  <Option value="Nauru">Nauru</Option>
                  <Option value="Nepal">Nepal</Option>
                  <Option value="Netherland Antilles">Netherland Antilles</Option>
                  <Option value="Netherlands">Netherlands (Holland, Europe)</Option>
                  <Option value="Nevis">Nevis</Option>
                  <Option value="New Caledonia">New Caledonia</Option>
                  <Option value="New Zealand">New Zealand</Option>
                  <Option value="Nicaragua">Nicaragua</Option>
                  <Option value="Niger">Niger</Option>
                  <Option value="Nigeria">Nigeria</Option>
                  <Option value="Niue">Niue</Option>
                  <Option value="Norfolk Island">Norfolk Island</Option>
                  <Option value="Norway">Norway</Option>
                  <Option value="Oman">Oman</Option>
                  <Option value="Pakistan">Pakistan</Option>
                  <Option value="Palau Island">Palau Island</Option>
                  <Option value="Palestine">Palestine</Option>
                  <Option value="Panama">Panama</Option>
                  <Option value="Papua New Guinea">Papua New Guinea</Option>
                  <Option value="Paraguay">Paraguay</Option>
                  <Option value="Peru">Peru</Option>
                  <Option value="Phillipines">Philippines</Option>
                  <Option value="Pitcairn Island">Pitcairn Island</Option>
                  <Option value="Poland">Poland</Option>
                  <Option value="Portugal">Portugal</Option>
                  <Option value="Puerto Rico">Puerto Rico</Option>
                  <Option value="Qatar">Qatar</Option>
                  <Option value="Republic of Montenegro">Republic of Montenegro</Option>
                  <Option value="Republic of Serbia">Republic of Serbia</Option>
                  <Option value="Reunion">Reunion</Option>
                  <Option value="Romania">Romania</Option>
                  <Option value="Russia">Russia</Option>
                  <Option value="Rwanda">Rwanda</Option>
                  <Option value="St Barthelemy">St Barthelemy</Option>
                  <Option value="St Eustatius">St Eustatius</Option>
                  <Option value="St Helena">St Helena</Option>
                  <Option value="St Kitts-Nevis">St Kitts-Nevis</Option>
                  <Option value="St Lucia">St Lucia</Option>
                  <Option value="St Maarten">St Maarten</Option>
                  <Option value="St Pierre and Miquelon">St Pierre and Miquelon</Option>
                  <Option value="St Vincent and Grenadines">St Vincent and Grenadines</Option>
                  <Option value="Saipan">Saipan</Option>
                  <Option value="Samoa">Samoa</Option>
                  <Option value="Samoa American">Samoa American</Option>
                  <Option value="San Marino">San Marino</Option>
                  <Option value="Sao Tome and Principe">Sao Tome and Principe</Option>
                  <Option value="Saudi Arabia">Saudi Arabia</Option>
                  <Option value="Senegal">Senegal</Option>
                  <Option value="Seychelles">Seychelles</Option>
                  <Option value="Sierra Leone">Sierra Leone</Option>
                  <Option value="Singapore">Singapore</Option>
                  <Option value="Slovakia">Slovakia</Option>
                  <Option value="Slovenia">Slovenia</Option>
                  <Option value="Solomon Islands">Solomon Islands</Option>
                  <Option value="Somalia">Somalia</Option>
                  <Option value="South Africa">South Africa</Option>
                  <Option value="Spain">Spain</Option>
                  <Option value="Sri Lanka">Sri Lanka</Option>
                  <Option value="Sudan">Sudan</Option>
                  <Option value="Suriname">Suriname</Option>
                  <Option value="Swaziland">Swaziland</Option>
                  <Option value="Sweden">Sweden</Option>
                  <Option value="Switzerland">Switzerland</Option>
                  <Option value="Syria">Syria</Option>
                  <Option value="Tahiti">Tahiti</Option>
                  <Option value="Taiwan">Taiwan</Option>
                  <Option value="Tajikistan">Tajikistan</Option>
                  <Option value="Tanzania">Tanzania</Option>
                  <Option value="Thailand">Thailand</Option>
                  <Option value="Togo">Togo</Option>
                  <Option value="Tokelau">Tokelau</Option>
                  <Option value="Tonga">Tonga</Option>
                  <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
                  <Option value="Tunisia">Tunisia</Option>
                  <Option value="Turkey">Turkey</Option>
                  <Option value="Turkmenistan">Turkmenistan</Option>
                  <Option value="Turks and Caicos Is">Turks and Caicos Is</Option>
                  <Option value="Tuvalu">Tuvalu</Option>
                  <Option value="Uganda">Uganda</Option>
                  <Option value="United Kingdom">United Kingdom</Option>
                  <Option value="Ukraine">Ukraine</Option>
                  <Option value="United Arab Erimates">United Arab Emirates</Option>
                  <Option value="United States of America">United States of America</Option>
                  <Option value="Uraguay">Uruguay</Option>
                  <Option value="Uzbekistan">Uzbekistan</Option>
                  <Option value="Vanuatu">Vanuatu</Option>
                  <Option value="Vatican City State">Vatican City State</Option>
                  <Option value="Venezuela">Venezuela</Option>
                  <Option value="Vietnam">Vietnam</Option>
                  <Option value="Virgin Islands (Brit)">Virgin Islands (Brit)</Option>
                  <Option value="Virgin Islands (USA)">Virgin Islands (USA)</Option>
                  <Option value="Wake Island">Wake Island</Option>
                  <Option value="Wallis and Futana Is">Wallis and Futana Is</Option>
                  <Option value="Yemen">Yemen</Option>
                  <Option value="Zaire">Zaire</Option>
                  <Option value="Zambia">Zambia</Option>
                  <Option value="Zimbabwe">Zimbabwe</Option>
              </Select>
                
            </Form.Item>

            <Form.Item
                name="saddress"
                label="Street Address"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
              <Input placeholder='House Number and Street Name'/>
            </Form.Item>


            <Form.Item
                name="city"
                label="Town/City"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
              <Input />
            </Form.Item>

            <Form.Item
                name="district"
                label="District"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
              <Input />
            </Form.Item>


            <Form.Item
                name="postCode"
                label="Postcode/ZIP (Optional)"
                
              >
              <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required:true,
                  },
                ]}
              >
              <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required:true,
                    type:'email'
                  },
                ]}
              >
              <Input />
            </Form.Item>
            <br />
            <h2>Additional information</h2>
            <hr />

            <Form.Item
                name="notes"
                label="Order Notes (Optional)"
                
              >
              <TextArea placeholder='Notes about your order, e.g. special notes for delivery' />
            </Form.Item>




            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" disabled={orderCreated.loading}>
                Buy Now
              </Button>
            </Form.Item>
          </Form>
            </div>
          </Col>
          <Col md={4}>
            <div className="order_info">
              <h3>Your Order</h3>
              {type === "plant" ? (
                <div className='ordered_item'>
                  <div className="ordered_itemImage">
                    <img src={plants.data?.getPlant?.image} alt={plants.data?.getPlant?.name} />
                  </div>
                  <div className="order_info_content">
                    <h4>{plants.data?.getPlant?.name}</h4>
                    <span className="price">মূল্য : {plants.data?.getPlant?.price}</span>
                  </div>
                </div>
              ): (
                <div className='ordered_item'>
                  <div className="ordered_itemImage">
                    <img src={courses.data?.getCourse?.image} alt={courses.data?.getCourse?.title} />
                  </div>
                  <div className="order_info_content">
                    <h4>{courses.data?.getCourse?.title}</h4>
                    <span className="price">মূল্য : {courses.data?.getCourse?.price} টাকা</span>
                  </div>
                </div>
              )}
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Checkout