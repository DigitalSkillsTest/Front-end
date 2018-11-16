/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import {
  Form, Row, Col, Radio, Button, Icon, Checkbox, Modal,
} from 'antd';
import Layout from '../components/Layout/Layout';
import RenderInput from '../components/FormComponent/FormElement';
import {
  createUserReq,
  clearCurrentUser,
  clearExam,
  resetExamStatus,
} from '../redux/actions';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;

function validateUsername(rule, value, callback) {
  if (value && value.indexOf(' ') >= 0) {
    callback('space is not allow in username');
  }
  callback();
}

function checkBoxValidate(rule, value, callback) {
  if (!value) {
    callback('Por favor acepta los términos y condiciones!');
  } else {
    callback();
  }
}

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentWillMount() {
    localStorage.clear();
    const { dispatch } = this.props;
    dispatch(clearCurrentUser());
    dispatch(clearExam());
    dispatch(resetExamStatus());
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form, dispatch, history } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const {
          name, lastName, mail, company, position, age, gender,
        } = values;
        const data = {
          name,
          lastName,
          mail,
          company,
          position,
          age,
          gender,
          history,
        };
        dispatch(createUserReq(data));
      }
    });
  }

  showModal(e) {
    e.preventDefault();
    this.setState({
      visible: true,
    });
  }

  render() {
    const { visible } = this.state;
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            <div className="bodybg2" />
            <div className="userRegister">
              <Row>
                <Col className="m-b-15">
                  <h1 className="pageHeading">
                    {translate('registerpage.heading')}
                    <span className="pageSubHeading">
                      {translate('registerpage.subheading')}
                    </span>
                  </h1>
                </Col>
              </Row>

              <Row>
                <Form onSubmit={this.handleSubmit}>
                  <Col xs={24} sm={24} md={24} lg={14}>
                    <Row>
                      <Col>
                        <RenderInput
                          name="name"
                          placeholder={translate('registerpage.formfield.name')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.name')}!` },
                            { validator: validateUsername },
                            { pattern: new RegExp('[a-zA-Z][a-zA-Z0-9]'), message: 'Please input valid username!' },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="lastName"
                          placeholder={translate('registerpage.formfield.lastname')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.lastname')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}

                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="mail"
                          placeholder={translate('registerpage.formfield.email')}
                          type="email"
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.email')}!` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="company"
                          placeholder={translate('registerpage.formfield.company')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.company')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="position"
                          placeholder={translate('registerpage.formfield.position')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.position')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="age"
                          placeholder={translate('registerpage.formfield.age')}
                          type="number"
                          min="1"
                          rules={[{ required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.age')}!` }]}
                          getFieldDecorator={getFieldDecorator}
                        />

                      </Col>
                      <Col className="m-t-15">
                        <FormItem>
                          {getFieldDecorator('gender', {
                            rules: [{ required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.gender.gender')}!` }],
                          })(
                            <RadioGroup>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option1')}>
                                {translate('registerpage.formfield.gender.genderoptions.option1')}
                              </Radio>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option2')}>
                                {translate('registerpage.formfield.gender.genderoptions.option2')}
                              </Radio>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option3')}>
                                {translate('registerpage.formfield.gender.genderoptions.option3')}
                              </Radio>
                            </RadioGroup>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10} className="userRegisterRightBlock">
                    <Row>
                      <Col>
                        {/* <Radio className="text-left">
                          {translate('terms.text1')}
                          <br className="termdevider" />
                          <span className="terms">
                            {translate('terms.text2')}
                          </span>
                        </Radio> */}

                        <FormItem>
                          {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [
                              { validator: checkBoxValidate },
                            ],
                          })(
                            <Checkbox className="text-left">
                              {translate('terms.text1')}
                              <br className="termdevider" />
                              <span className="terms">
                                <a href="" onClick={this.showModal}>
                                  {translate('terms.text2')}
                                </a>
                              </span>
                            </Checkbox>,
                          )}
                        </FormItem>
                      </Col>

                      <Col>
                        <Button htmlType="submit" className="btn-green m-t-60">
                          {translate('nextbtn')}
                          {''}
                          <Icon type="caret-right" />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Form>

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
              </Row>
            </div>
          </Layout>
        )}
      </Translate>
    );
  }
}

const UserRegisterForm = Form.create()(UserRegister);
const mapStateToProps = state => state;
export default connect(mapStateToProps)(UserRegisterForm);

UserRegister.propTypes = {
  history: PropTypes.shape({}).isRequired,
  form: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};
