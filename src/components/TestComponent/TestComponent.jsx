import React, { Component } from 'react';
import {
  Row, Col, Button, Icon, Radio, Progress, Steps,
} from 'antd';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import * as routes from '../../routes/path';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Step } = Steps;

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.TestCategoty);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.TestFinish);
  }


  handleResize() {
    this.setState({ clientWidth: window.innerWidth });
  }

  render() {
    const { clientWidth } = this.state;
    return (
      <Layout sidebar>
        <Row>
          <Col xs={24}>
            {clientWidth < 768 && (
              <div className="questionSteps responsive">
                <Steps current={3}>
                  <Step className="step1" />
                  <Step className="step2" />
                  <Step className="step3" />
                  <Step className="step4" />
                  <Step className="step5" />
                  <Step className="step6" />
                </Steps>
              </div>
            )}
            <div className="testCategoryHeading" style={{ background: '#0085C6' }}>
              Virtual Language
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={24} md={18}>
            <div className="mcqWrapper">
              <div className="mcqQuestion">
                <div className="questionNos" style={{ background: '#0085C6' }}>
                  1
                </div>
                <div className="question">
                  Cuando noto que tengo que hablar de un tema técnico relacionado a la tecnología…
                </div>
              </div>
              <div className="mcqAnswer">
                <RadioGroup defaultValue="a" size="large">
                  <RadioButton value="a">
                    Hangzhou
                  </RadioButton>
                  <RadioButton value="b">
                    Shanghai
                  </RadioButton>
                  <RadioButton value="c">
                    Beijing
                  </RadioButton>
                  <RadioButton value="d">
                    Chengdu
                  </RadioButton>
                </RadioGroup>
              </div>
              <div className="stepButtonWrapper">
                <Row>
                  <Col>
                    {clientWidth < 768 && (
                      <div className="progressWrapper responsive">
                        <Progress percent={50} strokeWidth={12} strokeColor="#1EA771" status="active" />
                      </div>
                    )}
                    <Button.Group>
                      <Button className="btn-default" onClick={this.onClickPreviousBtn}>
                        <Icon type="caret-left" />
                        {''}
                        Anterior
                      </Button>
                      <Button className="btn-default pull-right" onClick={this.onClickNextBtn}>
                        Siguiente
                        {''}
                        <Icon type="caret-right" />
                      </Button>
                    </Button.Group>
                  </Col>
                </Row>
              </div>
            </div>

            {clientWidth > 768 && (
              <React.Fragment>
                <div className="questionSteps">
                  <Steps direction="vertical" current={3}>
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                  </Steps>
                </div>
                <div className="progressWrapper">
                  <Progress percent={50} strokeWidth={12} strokeColor="#1EA771" status="active" />
                </div>
              </React.Fragment>
            )}
          </Col>
          <Col sm={24} md={6}>
            <div className="testSubCategory">
              <div className="card">
                <div className="card-head" style={{ background: '#0085C6' }}>
                  Virtual Language
                </div>
                <div className="card-body">
                  <p className="subCategory">
                    Technical-Language
                  </p>
                  <p className="subCategory">
                    Conocimiento específico del rol
                  </p>
                  <p className="subCategory">
                    Creación digital vs analógica
                  </p>
                  <p className="subCategory">
                    Aprendizaje digital y desarrollo
                  </p>
                  <p className="subCategory">
                    Aprendizaje digital y desarrollo
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default TestComponent;

TestComponent.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
