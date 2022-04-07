import React from 'react';
import { gql ,useMutation} from '@apollo/client'
import {
  Form,
  Input,
  notification,
  Rate,
  Button,
} from 'antd';
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

  const CREATE_REVIEW = gql`
  mutation($type: String!, $plantOrCourseId: String!, $createReviewInput: ReviewContents!){
    createReview(type: $type, plantOrCourseId: $plantOrCourseId, input: $createReviewInput) {
            id
        }
    }
  `;

function CreateReview({type,id}) {
    const [createReview, { data, loading, error }] = useMutation(CREATE_REVIEW);

    const [form] = Form.useForm();
    const onFinish = async(values) => {
        console.log(values);
        await createReview({
            variables: {
                type: type,
                plantOrCourseId: id,
                createReviewInput:{
                    ...values
                }
            }
        })

      };

      if(loading) return "please give us a moment";
      if(error) return <p>{error.message}</p>
      

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="col-8"
      scrollToFirstError
    >
        {data?.createReview && notification.open({
            message: 'Thanks',
            description:
              'Thanks for the valuale review!',
          })}
        
      <Form.Item
        name="name"
        label="Your Name"
        rules={[
                {
                    required:true
                }
            ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="rating"
        label="Rating"
        rules={[
            {
              required: true,
            },
        ]}
      >
        <Rate />
      </Form.Item>
     



      <Form.Item
        name="email"
        label="Email"
        type= "email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>





      <Form.Item
        name="Comment"
        label="Comment"
        rules={[
          {
            message: 'Please input Comment',
            required: true
          },
        ]}
      >
        <Input.TextArea showCount />
      </Form.Item>



      


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          Add Review
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateReview