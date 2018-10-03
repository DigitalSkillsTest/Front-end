import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Icon, Radio, Button,
} from 'antd';
import PropTypes from 'prop-types';
import {
  Page, Text, View, Document, StyleSheet, Image, BlobProvider,
} from '@react-pdf/renderer';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import {
  getCategory,
  getBgColor,
  renderLongDesc,
  renderStrenth,
  renderWeakness,
} from '../utility/common';
import { sendMailReq } from '../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 10,
  },
  Column: {
    flexDirection: 'column',
    paddingRight: 15,
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#22212E',
    color: '#FFF',
  },
  content: {
    width: '80%',
  },
  Section: {
    paddingLeft: 15,
  },
  longtext: {
    fontSize: 11,
    color: '#605F62',
    textAlign: 'justify',
  },
  categoryheader: {
    padding: '10px 30px 0px;',
    color: '#FFF',
    fontSize: 12,
    marginTop: 30,
    marginBottom: 20,
    width: '200px',
  },
  cardhead: {
    backgroundColor: '#DDDCDD',
    color: '#22212E',
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  cardbody: {
    color: '#605F62',
    fontSize: 11,
    padding: 15,
    border: '1px solid #DDDCDD',
    textAlign: 'justify',
  },
  card: {
    marginTop: 15,
  },
  chartWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
});

const Sidebar = () => (
  <View style={[styles.Column, styles.sidebar]}>
    <Image
      src="/assets/images/sidebar_logo1.png"
      style={{ width: 75, marginTop: 40, marginLeft: 20 }}
    />
    <Image
      src="/assets/images/sidebar_logo2.png"
      style={{ width: 50, marginTop: 570, marginLeft: 30 }}
    />
  </View>
);

const ResultContent = ({ props }) => {
  const {
    data, chartImg, scoreImg,
  } = props;
  return (
    <View style={[styles.Column, styles.content]}>
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Image
          src={scoreImg}
          style={{ width: 350 }}
        />
      </View>
      <View style={styles.Section}>
        <Text style={styles.longtext}>
          {renderLongDesc(data)}
        </Text>

        <View style={styles.container}>
          <View style={[styles.card, { width: 215, marginRight: 15 }]}>
            <Text style={styles.cardhead}>
              Fortalezas
            </Text>
            <Text style={styles.cardbody}>
              {renderStrenth(data).every(x => x === false) ? 'None' : renderStrenth(data)}
            </Text>
          </View>

          <View style={[styles.card, { width: 215 }]}>
            <Text style={styles.cardhead}>
              Debilidades
            </Text>
            <Text style={styles.cardbody}>
              {renderWeakness(data).every(x => x === false) ? 'None' : renderWeakness(data)}
            </Text>
          </View>
        </View>

        <View style={[styles.container, styles.chartWrapper]}>
          <View style={[styles.Column, styles.chartImg]}>
            <Image
              src={chartImg}
              style={{ width: 250, marginLeft: 20 }}
            />
          </View>

          <View style={styles.Column}>
            <Image
              src="/assets/images/result-category.png"
              style={{ width: 100, marginLeft: 10, marginTop: 40 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const CategoryContent = ({ props }) => {
  const { data, chartImg, scoreImg } = props;
  return (
    <View style={[styles.Column, styles.content]}>
      <View>
        <Text style={[styles.categoryheader, { backgroundColor: getBgColor(data[0].categories_COD) }]}>
          {getCategory(data[0].categories_COD)}
        </Text>
      </View>
      <View style={styles.Section}>
        <Text style={styles.longtext}>
          {renderLongDesc(data)}
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardhead}>
            Fortalezas
          </Text>
          <Text style={styles.cardbody}>
            {renderStrenth(data).every(x => x === false) ? 'None' : renderStrenth(data)}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardhead}>
            Debilidades
          </Text>
          <Text style={styles.cardbody}>
            {renderWeakness(data).every(x => x === false) ? 'None' : renderWeakness(data)}
          </Text>
        </View>

        <View style={[styles.container, styles.chartWrapper]}>
          <View style={[styles.Column, styles.chartImg]}>
            <Image
              src={chartImg}
              style={{ width: 200, marginLeft: 15 }}
            />
          </View>
          <View style={styles.Column}>
            <Image
              src={scoreImg}
              style={{ width: 200 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

function MyDoc({ mailData, resultData }) {
  return (
    <Document>
      <Page size="A4">
        <View style={{ margin: 30 }}>
          <Image
            src="/assets/images/welcome.png"
          />
        </View>
      </Page>

      <Page size="A4" wrap>
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.Column, styles.content]}>
            <View style={{ padding: 30 }}>

              <View style={{ marginTop: 15 }}>
                <Text>
                  Cómo funciona el test
                </Text>
                <Text>
                  Instrucciones y etapas
                </Text>
              </View>

              <View>
                <Text style={{
                  marginTop: 20, color: '#605F62', fontSize: 12, textAlign: 'justify',
                }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <Image
                  src="/assets/images/category.png"
                  style={{ width: 200 }}
                />
              </View>

              <View style={{ marginTop: 50, marginLeft: 30 }}>
                <Image
                  src="/assets/images/chart2.png"
                  style={{ width: 350 }}
                />
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" wrap>
        <View style={styles.container}>
          <Sidebar />
          <ResultContent props={resultData} />
        </View>
      </Page>

      {mailData.map((item, i) => (
        <Page size="A4" wrap key={i}>
          <View style={styles.container}>
            <Sidebar />
            <CategoryContent props={item} />
          </View>
        </Page>
      ))}

      <Page size="A4">
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.Column, styles.content]}>
            <View style={{ margin: 30 }}>
              <Image
                src="/assets/images/info.png"
              />
            </View>
          </View>
        </View>
      </Page>

    </Document>
  );
}

class SendMail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const { location: { state } } = this.props;
    if (state === undefined) {
      const { history } = this.props;
      history.push(routes.TestResult);
    }
  }

  handleClick(blob) {
    const { dispatch, history, currentUser: { data } } = this.props;
    const formData = new FormData();
    if (blob !== null) {
      formData.append('to', data.mail);
      formData.append('subject', 'test');
      formData.append('text', 'you get this mail because you join ashutec');
      formData.append('file', blob);
    }
    const pdfData = { formData, history };
    dispatch(sendMailReq(pdfData));
  }

  render() {
    const { location: { state } } = this.props;
    return (
      <Layout sidebar>
        <div className="bg-image" />
        <div className="sendMailWrapper">
          <Row>
            <Col xs={24}>
              <h1>
                ¡Has terminado!
                <span>
                  Si lo deseas, puedes enviar los resultados a tu mail
                </span>
              </h1>
            </Col>

            <Col xs={24}>
              {state && (
                <div>
                  <BlobProvider document={MyDoc(state.query)}>
                    {({ blob }) => {
                      // Do whatever you need with blob here
                      return (
                        <Button htmlType="button" className="btn-green" onClick={() => this.handleClick(blob)}>
                          Enviar al mail
                          {''}
                          <Icon type="caret-right" />
                        </Button>
                      );
                    }
                    }
                  </BlobProvider>
                </div>
              )}
              <p className="help-text">
                Se enviará al mail previamente definido
              </p>
            </Col>

            <Col xs={24} className="userRegisterRightBlock">
              <Radio className="text-left" defaultChecked>
                Acepto
                <br className="termdevider" />
                <span className="terms">
                  Términos y condiciones
                </span>
              </Radio>
            </Col>

            <Col span={24} className="welcomeScreenLogoWrapper">
              <img src="/assets/images/logo.svg" alt="logo" className="welcomeScreenLogo" />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SendMail);

SendMail.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
};
