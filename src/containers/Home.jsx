import React from 'react';
import { Row, Col, Button } from 'antd';
import logo from '../images/logo.svg';
import bodyBg from '../images/bodybg.png';
import Layout from '../components/Layout/Layout';

const Home = () => (
  <Layout sidebar={false} >
    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col span={12}>
        <img src={logo} alt="logo" className="logo" />
      </Col>
    </Row>
    <div className="home">
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={14}>
          <img src={bodyBg} alt="" style={{ width: '100%' }} />
        </Col>
        <Col span={10} className="right-block">
          <h1 style={{ marginBottom: '40px', fontSize: '40px' }}>Test de <br/>Habilidades <br />Digitales</h1>
          <Button className="btn-green">Comenzar</Button>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default Home;
