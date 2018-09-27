import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Icon, Radio,
} from 'antd';
import PropTypes from 'prop-types';
import {
  Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image,
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

const styles = StyleSheet.create({
  section: {
    padding: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 10,
  },
  Column: {
    flexDirection: 'column',
    paddingTop: 30,
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
    padding: 15,
  },
  longtext: {
    fontSize: 12,
    color: '#605F62',
    textAlign: 'justify',
  },
  categoryheader: {
    padding: '10px 30px 0px;',
    color: '#FFF',
    marginTop: '15px',
    fontSize: 12,
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
    fontSize: 12,
    padding: 15,
    border: '1px solid #DDDCDD',
  },
  card: {
    marginTop: 15,
  },
  chartWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
  chartImg: {
    marginTop: 25,
  },
});

// Font.register('/assets/fonts/Lato-Bold.ttf', {
//   family: 'Lato Bold',
// });
// Font.register('/assets/fonts/Lato-Light.ttf', {
//   family: 'Lato Light',
// });
// Font.register('/assets/fonts/Lato-Medium.ttf', {
//   family: 'Lato Medium',
// });
// Font.register('/assets/fonts/Lato-Regular.ttf', {
//   family: 'Lato Regular',
// });

const Sidebar = () => (
  <View style={[styles.leftColumn, styles.sidebar]}>
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

const CategoryContent = ({ props }) => {
  return (
    <View style={[styles.leftColumn, styles.content]}>
      <View>
        <Text style={[styles.categoryheader, { backgroundColor: getBgColor(props.data[0].categories_COD) }]}>
          {getCategory(props.data[0].categories_COD)}
        </Text>
      </View>
      <View style={styles.Section}>
        <Text style={styles.longtext}>
          loren lipsum
          {/* {console.log(Object.entries(props).map(value => value))} */}
          {/* {renderLongDesc(props.data)} */}
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardhead}>
            Fortalezas
          </Text>
          <Text style={styles.cardbody}>
            Fortalezas
            {/* {renderStrenth(props).every(x => x === false) ? 'None' : renderStrenth(props)} */}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardhead}>
            Debilidades
          </Text>
          <Text style={styles.cardbody}>
            Debilidades
            {/* {renderWeakness(props).every(x => x === false) ? 'None' : renderWeakness(props)} */}
          </Text>
        </View>

        <View style={[styles.container, styles.chartWrapper]}>
          <View style={[styles.leftColumn, styles.chartImg]}>
            <Image
              src={props.chartImg}
              style={{ width: 200 }}
            />
          </View>

          <View style={styles.leftColumn}>
            <Image
              src={props.scoreImg}
              style={{ width: 200 }}
            />
          </View>
        </View>

      </View>
    </View >
  );
};

function MyDoc(props) {
  console.log(props);
  return (
    <Document>
      {/* <Page size="A4">
        <View style={{ margin: 50 }}>
          <Image
            src="/assets/images/welcome.png"
          />
        </View>
      </Page>
      <Page size="A4" wrap>
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.leftColumn, styles.content]}>
            <View style={{ padding: 30 }}>

              <View style={{ marginTop: 30 }}>
                <Text style={{ fontWight: 700 }}>
                  Cómo funciona el test
                </Text>
                <Text style={{ fontWight: 300 }}>
                  Instrucciones y etapas
                </Text>
              </View>

              <View>
                <Text style={{ marginTop: 20, color: '#605F62', fontSize: 12, textAlign: 'justify' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <Image
                  src="/assets/images/catgory.png"
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
      <Page size="A4">
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.leftColumn, styles.content]}>
            <View style={{ margin: 50 }}>
              <Image
                src="/assets/images/info.png"
              />
            </View>
          </View>
        </View>
      </Page> */}

      {props.map((item, i) => (
        <Page size="A4" wrap key={i}>
          <View style={styles.container}>
            <Sidebar />
            <CategoryContent props={item} />
          </View>
        </Page>
      ))}
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
    // localStorage.removeItem('examId');
  }

  handleClick() {
    const { history } = this.props;
    history.push(routes.UserRegister);
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
              {/* <Button htmlType="button" className="btn-green" onClick={this.handleClick}>
                Enviar al mail
                {''}
                <Icon type="caret-right" />
              </Button> */}
              {state && (
                <PDFDownloadLink document={MyDoc(state.query.mailData)} fileName="result.pdf" className="btn-green" onClick={this.handleClick}>
                  Enviar al mail
                  {''}
                  <Icon type="caret-right" />
                </PDFDownloadLink>
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
};
