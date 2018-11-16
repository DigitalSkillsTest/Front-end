import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Icon, Radio, Button, Checkbox, Modal
} from 'antd';
import { Translate } from 'react-localize-redux';
import PropTypes from 'prop-types';
import {
  Page, Text, View, Document, StyleSheet, Image, BlobProvider,
} from '@react-pdf/renderer';
import logo from '../images/logo.svg';
import resultCategogyImg from '../images/result-category.png';
import WelcomeImg from '../images/welcome.png';
import categoryImg from '../images/category.png';
import chart2Img from '../images/chart2.png';
import infoImg from '../images/info.png';
import sidebarLogo1 from '../images/sidebar_logo1.png';
import sidebarLogo2 from '../images/sidebar_logo2.png';
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
import moment from 'moment';

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
      src={sidebarLogo1}
      style={{ width: 75, marginTop: 40, marginLeft: 20 }}
    />
    <Image
      src={sidebarLogo2}
      style={{ width: 50, marginTop: 570, marginLeft: 30 }}
    />
  </View>
);

const ResultContent = ({ props, translations }) => {
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
              {translations['resultpage.Strengths'][0]}
            </Text>
            <Text style={styles.cardbody}>
              {renderStrenth(data).every(x => x === false) ? 'None' : renderStrenth(data)}
            </Text>
          </View>

          <View style={[styles.card, { width: 215 }]}>
            <Text style={styles.cardhead}>
              {translations['resultpage.Weaknesses'][0]}
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
              src={resultCategogyImg}
              style={{ width: 100, marginLeft: 10, marginTop: 40 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const CategoryContent = ({ props, translations }) => {
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
            {translations['resultpage.Strengths'][0]}
          </Text>
          <Text style={styles.cardbody}>
            {renderStrenth(data).every(x => x === false) ? 'None' : renderStrenth(data)}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardhead}>
            {translations['resultpage.Weaknesses'][0]}
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

function MyDoc({ mailData, resultData }, translations, currentUser) {
  return (
    <Document>
      <Page size="A4">
        <View style={{ margin: 30 }}>
          <Image
            src={WelcomeImg}
          />
        </View>
        <View style={{ marginTop: '-500px', marginLeft: '180px' }}>
          <Text style={{
            marginTop: 0, color: '#22212D', fontSize: 18, textTransform: 'uppercase',
          }}>{resultData.user}</Text>
          <Text style={{
            marginTop: 5, color: '#22212D', fontSize: 14,
          }}>Fecha: {moment().format('DD, MMMM YYYY')}</Text>
        </View>
      </Page>

      <Page size="A4" wrap>
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.Column, styles.content]}>
            <View style={{ padding: 30 }}>

              <View style={{ marginTop: 15 }}>
                <Text>
                  {translations['howtestworks.heading'][0]}
                </Text>
                <Text>
                  {translations['howtestworks.subheading'][0]}
                </Text>
              </View>

              <View>
                <Text style={{
                  marginTop: 20, color: '#605F62', fontSize: 12, textAlign: 'justify',
                }}
                >
                  {translations['howtestworks.description'][0]}
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <Image
                  src={categoryImg}
                  style={{ width: 200 }}
                />
              </View>

              <View style={{ marginTop: 50, marginLeft: 30 }}>
                <Image
                  src={chart2Img}
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
          <ResultContent props={resultData} translations={translations} />
        </View>
      </Page>

      {mailData.map((item, i) => (
        <Page size="A4" wrap key={i}>
          <View style={styles.container}>
            <Sidebar />
            <CategoryContent props={item} translations={translations} />
          </View>
        </Page>
      ))}

      <Page size="A4">
        <View style={styles.container}>
          <Sidebar />
          <View style={[styles.Column, styles.content]}>
            <View style={{ margin: 30 }}>
              <Image
                src={infoImg}
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
    this.state = {
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentWillMount() {
    const { location: { state } } = this.props;
    if (state === undefined) {
      const { history } = this.props;
      history.push(routes.TestResult);
    }
  }

  showModal(e) {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  }

  handleClick(blob) {
    const { dispatch, history, currentUser: { data } } = this.props;
    const formData = new FormData();
    if (blob !== null) {
      formData.append('to', data.mail);
      formData.append('subject', 'Resultados del Test de Habilidades Digitales - ADEN');
      formData.append('text', `¡Felicitaciones! Has finalizado tu test, descarga el PDF adjunto para ver tus resultados. 
      Te invitamos a conocer más sobre nosotros en www.aden.org Grupo Educativo ADEN`);
      formData.append('file', blob);
    }
    const pdfData = { formData, history };
    dispatch(sendMailReq(pdfData));
  }

  render() {
    const { visible } = this.state;
    const { location: { state }, localize: { translations }, currentUser } = this.props;
    return (
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            <div className="bg-image" style={{ background: `url('${process.env.PUBLIC_URL}/assets/images/bodyBg-2.svg') no-repeat bottom right` }} />
            <div className="sendMailWrapper">
              <Row>
                <Col xs={24}>
                  <h1>
                    {translate('sendmailpage.heading')}
                    <span>
                      {translate('sendmailpage.subheading')}
                    </span>
                  </h1>
                </Col>

                <Col xs={24}>
                  {state && (
                    <div>
                      <BlobProvider document={MyDoc(state, translations, currentUser)}>
                        {({ blob }) =>
                          // Do whatever you need with blob here
                          (
                            <Button htmlType="button" className="btn-green" onClick={() => this.handleClick(blob)}>
                              {translate('sendmailpage.mailbtntext')}
                              {''}
                              <Icon type="caret-right" />
                            </Button>
                          )
                        }
                      </BlobProvider>
                    </div>
                  )}
                  <p className="help-text">
                    {translate('sendmailpage.mailbtnhelptext')}
                  </p>
                </Col>

                <Col xs={24} className="userRegisterRightBlock">
                  <Radio className="text-left" defaultChecked>
                    {translate('terms.text1')}
                    <br className="termdevider" />
                    <span className="terms">
                      <a href="" onClick={this.showModal}>{translate('terms.text2')}</a>
                    </span>
                  </Radio>
                  <Modal
                    title="Términos y condiciones"
                    width="50%"
                    wrapClassName="termsmodal"
                    visible={visible}
                    onCancel={() => this.setState({ visible: false })}
                    footer={null}
                  >
                    <p>
                      AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES
                      {' '}
                      <br />
                      Autorizo de manera expresa y previa sin lugar a pagos ni retribuciones al Grupo Educativo ADEN (“ADEN”), a sus sucesores, cesionarios a cualquier título o a quien represente los derechos, para que efectúe el Tratamiento mis Datos Personales de la manera y para las finalidades que se señalan a continuación. Para efectos de la presente autorización, se entiende por “Datos Personales” la información personal que suministre por cualquier medio, incluyendo, pero sin limitarse a, aquella de carácter financiero, crediticio, comercial, profesional, sensible (tales como mis huellas, imagen, voz, entre otros), técnico y administrativo, privada, semiprivada o de cualquier naturaleza, pasada, presente o futura, contenida en cualquier medio físico, digital o electrónico, entre otros y sin limitarse a documentos, fotos, memorias USB, grabaciones, datos biométricos, correos electrónicos, y videograbaciones.  Así mismo, se entiende por “Tratamiento” el recolectar, consultar, recopilar, evaluar, catalogar, clasificar, ordenar, grabar, almacenar, actualizar, modificar, aclarar, reportar, informar, analizar, utilizar, compartir, circularizar, suministrar, suprimir, procesar, solicitar, verificar, intercambiar, retirar, transferir, transmitir o divulgar, y en general, efectuar cualquier operación o conjunto de operaciones sobre mis Datos Personales en medios físicos, digitales, electrónicos o por cualquier otro medio.  La autorización que otorgo por el presente medio para el Tratamiento de mis Datos Personales tendrá las siguientes finalidades: a. Promocionar, comercializar u ofrecer, de manera individual o conjunta productos y/o servicios propios u ofrecidos en alianza comercial, a través de cualquier medio o canal, o para complementar, optimizar  o profundizar el portafolio de productos y/o servicios actualmente ofrecidos.  Esta autorización para el Tratamiento de mis Datos Personales se hace extensiva a las entidades subordinadas de ADEN y su matriz y las entidades subordinadas o vinculadas de su matriz o ante cualquier sociedad en la que éstas tengan participación accionaria directa o indirectamente (en adelante “LAS ENTIDADES AUTORIZADAS”), b. Como elemento de análisis en etapas pre-contractuales, contractuales y post-contractuales para establecer y/o mantener cualquier relación contractual, incluyendo como parte de ello, los siguientes propósitos: i. Actualizar bases de datos y tramitar la apertura y/o vinculación de productos y/o servicios en ADEN o en cualquiera de LAS ENTIDADES AUTORIZADAS, ii. Evaluar riesgos derivados de la relación contractual potencial, vigente o concluida, iii. Realizar, validar, autorizar o verificar transacciones incluyendo, cuando sea requerido, la consulta y reproducción de datos sensibles tales como la huella, imagen o voz, iv. Obtener conocimiento del perfil comercial o transaccional del titular, el nacimiento, modificación, celebración y/o extinción de obligaciones directas, contingentes o indirectas, el incumplimiento de las obligaciones que adquiera con ADEN o con cualquier tercero, así como cualquier novedad en relación con tales obligaciones. v. Conocer información acerca de mi manejo de cuentas corrientes, ahorros, depósitos, tarjetas de crédito, comportamiento comercial, laboral y demás productos o servicios y, en general, del cumplimiento y manejo de mis créditos y obligaciones, cualquiera que sea su naturaleza.  Esta autorización comprende información referente al manejo, estado, cumplimiento de las relaciones, contratos y servicios, hábitos de pago, obligaciones y las deudas vigentes, vencidas sin cancelar, procesos, o la utilización indebida de servicios financieros. vi. Dar cumplimiento a sus obligaciones legales y contractuales, vii. Ejercer sus derechos, incluyendo los referentes a actividades de cobranza judicial y extrajudicial y las gestiones conexas para obtener el pago de las obligaciones. vii. ADEN podrá efectuar el Tratamiento de mis Datos Personales ante entidades de consulta, que manejen o administren bases de datos para los fines legalmente definidos, domiciliadas en Panamá o en el exterior, sean personas naturales o jurídicas, nacionales o extranjeras. Realizar ventas cruzadas de productos y/o servicios ofrecidos por ADEN o por cualquiera de LAS ENTIDADES AUTORIZADAS o sus aliados comerciales, incluyendo la celebración de convenios de marca compartida: a.Elaborar y reportar información estadística, encuestas de satisfacción, estudios y análisis de mercado, incluyendo la posibilidad de contactarme para dichos propósitos, b. Enviar mensajes, notificaciones o alertas  a través de cualquier medio para remitir extractos, divulgar información legal, de seguridad, promociones, campañas comerciales, publicitarias, de mercadeo, institucionales o de educación financiera, sorteos, eventos u otros beneficios e informar al titular acerca de las innovaciones efectuadas en sus productos y/o servicios, dar a conocer las mejoras o cambios en sus canales de atención, así como dar a conocer otros servicios y/o productos ofrecidos por ADEN; LAS ENTIDADES AUTORIZADAS o sus aliados comerciales, c. Llevar a cabo las gestiones pertinentes, incluyendo la recolección y entrega de información ante autoridades públicas o privadas, nacionales o extranjeras con competencia sobre ADEN, LAS ENTIDADES AUTORIZADAS o sobre sus actividades, productos y/o servicios, cuando se requiera para dar cumplimiento a sus deberes legales o reglamentarios. d. Validar información con las diferentes bases de datos de ADEN, de LAS ENTIDADES AUTORIZADAS, de autoridades y/o entidades estatales y de terceros tales como operadores de información y demás entidades que formen parte del Sistema de Seguridad Social Integral, empresas prestadoras de servicios públicos y de telefonía móvil, entre otras, para desarrollar las actividades propias de su objeto social principal y conexo, y/o cumplir con obligaciones legales, e. Para que mis Datos Personales puedan ser utilizados como medio de prueba.  Los Datos Personales suministrados podrán circular y transferirse a la totalidad de las áreas de ADEN incluyendo proveedores de servicios, usuarios de red, redes de distribución y personas que realicen la promoción de sus productos y servicios, incluidos call centers, domiciliados en Panamá o en el exterior, sean personas naturales o jurídicas, a su fuerza comercial, equipos de telemercadeo y/o procesadores de datos que trabajen en nombre de ADEN, incluyendo pero sin limitarse, contratistas, delegados, outsourcing, tercerización, red de oficinas o aliados, con el objeto de desarrollar servicios de alojamiento de sistemas, de mantenimiento, servicios de análisis, servicios de mensajería por e-mail o correo físico, servicios de entrega, gestión de transacciones de pago, cobranza, entre otros. En consecuencia, el titular entiende y acepta que mediante la presente autorización concede a estos terceros, autorización para acceder a sus Datos Personales en la medida en que así lo requieran para la prestación de los servicios para los cuales fueron contratados y sujeto al cumplimiento de los deberes que les correspondan como encargados del Tratamiento de mis Datos Personales. Es entendido que las personas naturales y jurídicas, nacionales y extranjeras mencionadas anteriormente ante las cuales ADEN puede llevar a cabo el Tratamiento de mis Datos Personales, también cuentan con mi autorización para permitir dicho Tratamiento. Adicionalmente, mediante el otorgamiento de la presente autorización, manifiesto: (i) que los Datos Personales suministrados son veraces, verificables y completos, (ii) que conozco y entiendo que el suministro de la presente autorización es voluntaria, razón por la cual no me encuentro obligado a otorgar la presente autorización,(iii) que conozco y entiendo que mediante la simple presentación de una comunicación escrita puedo limitar en todo o en parte el alcance de la presente autorización para que, entre otros, la misma se otorgue únicamente frente a ADEN pero no frente a LAS ENTIDADES AUTORIZADAS y (iv) haber sido informado sobre mis derechos a conocer, actualizar y rectificar mis Datos Personales, ser informado sobre el uso que se ha dado a los mismos, solicitar la supresión de datos en los casos en que sea procedente. Para el ejercicio de sus derechos, y la atención de consultas y reclamos, puede contactarnos al correo electrónico: info@aden.org
                    </p>
                  </Modal>
                </Col>

                <Col span={24} className="welcomeScreenLogoWrapper">
                  <img src={logo} alt="logo" className="welcomeScreenLogo" />
                </Col>
              </Row>
            </div>
          </Layout>
        )}
      </Translate>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SendMail);

SendMail.defaultProp = {
  currentUser: PropTypes.shape({}),
};

SendMail.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};
