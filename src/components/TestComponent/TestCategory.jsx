import React from 'react';
import {
  Row, Col, Button, Icon,
} from 'antd';
import Layout from '../Layout/Layout';

const TestCategotyDescription = () => (
  <Layout sidebar color="#0085C6">
    <div className="testcategorywrapper">
      <Row>
        <Col xs={24} className="testcategory">
          <h1>
            Virtual
            <br />
            Language
          </h1>
          <p>
            El dominio de la terminología tech especifica para tu rol
          </p>
          <ul>
            ¿Qué analizaremos?
            <li>
              Technical-Language
            </li>
            <li>
              Conocimiento específico del rol
            </li>
            <li>
              Creación digital vs analógica
            </li>
            <li>
              Aprendizaje digital y desarrollo
            </li>
            <li>
              Aprendizaje digital y desarrollo
            </li>
          </ul>
        </Col>
      </Row>
    </div>
    <div className="stepButtonWrapper">
      <Row>
        <Col>
          <Button className="btn-default transparent">
            <Icon type="caret-left" />
            {''}
            Anterior
          </Button>
          <Button className="btn-default transparent pull-right">
            Siguiente
            {''}
            <Icon type="caret-right" />
          </Button>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default TestCategotyDescription;
