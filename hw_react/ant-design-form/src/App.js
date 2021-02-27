import logo from './logo.svg';
import './App.css';
import {Table,Row,Col,Form, Button} from "antd";

function App() {
  const layout = {
    labelCol : {
      xs: 6,sm: 8,md: 10
    },
    wrapperCol: {
      xs:18,sm:16,md:14
    }
  }
  
let onFinish = (values) => {
  console.log(values)
}

return (
  <div className="App">
    <Row justify="center">
      <Col xs={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
        <Form onFinish={onFinish} {...layout}>
          <Form.Item label="Name" name = "name" rules={[{required:true,message:"คุณต้องกรอกช่องนี้"},{max:6,min:3,message:"ชื่อต้องอยู่ระหว่าง 3-6 ตัวอักษร"}]}>
            <input placeholder = "Name"/>
          </Form.Item>
          <Form.Item label="Phonenumber" name="phonenumber" rules={[{required:true,message:"คุณต้องกรอกช่องนี้"},{len:10,message:"เบอร์โทรศัพท์ของคุณไม่ถูกต้อง"}]}>
            <input placeholder = "PhoneNumber"/>
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{type:"email",message:"อีเมล์ของคุณไม่ถูกต้อง"}]}>
            <input placeholder = "E-mail"/>
          </Form.Item>
          <Form.Item label="Password" password="password" rule={[{required:true,message:"คุณต้องใส่รหัสผ่าน"},{max:8,min:12,message:"ชื่อต้องอยู่ระหว่าง 8-12 ตัวอักษร"}]}>
            <input type="password" placeholder = "Password"/>
          </Form.Item>
          <Button htmlType="submit">Register</Button>
        </Form>
      </Col>
    </Row>
  </div>
)
    
}

export default App;
