const myHeaders = new Headers();
const local_uri = "http://localhost:8085/report?customer_id=";
const hml_uri = "https://api-plataformabi-homol.logcomex.io:8085/report?customer_id=";
const prd_uri = "https://api-plataformabi.logcomex.io/report?customer_id=";
myHeaders.append("X-Infra-Key", "20ea6c42-06eb-4e0e-8cfd-ecfa691e5164");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const addEventListeners = () => {
  //JSON button event listener
  document.getElementById('json_input_action_button').addEventListener('click', handleJsonInputAction);
  //Client ID button event listener
  document.getElementById('client_id_action_button').addEventListener('click', handleClientIdInputAction);
}

const getAlertsData = async (id) => {
  try {
    const response = await fetch(prd_uri + id, requestOptions);
    console.log('Request Status Code: ', response.status);

    if (!response.ok) {
      console.log(response);
      throw new Error(`Error status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

const handleJsonInputAction = () => {
  const json = document.getElementById('json_input_textarea').value;
  
  try {
    parsed_json = JSON.parse(json);
  } catch (err) {
    console.log(err);
    alert("Json informado não é válido!");
    throw new Error(`Unprocessable entity`);
  }

  showLoadingContainer();
  parsePayloadToHtml(parsed_json);
}

const handleClientIdInputAction = async (event) => {
  //Handles by <li> if element is <li> otherwise grabs id from input
  const id = event.srcElement.tagName === 'LI' 
    ? event.srcElement.id : document.getElementById('client_id_input').value;
  
  showLoadingContainer();
  const response = await getAlertsData(id);

  if (!response) {
    alert("Dados não encontrados para este cliente!");
    showStandByMessageContainer();
    return;
  }

  parsePayloadToHtml(response);
}

const showContentContainer = () => {
  document.getElementById('content-container').classList.remove('d-none');
  document.getElementById('content-container').classList.add('d-block');
  document.getElementById('stand-by-message-container').classList.add('d-none');
  document.getElementById('content-loading-container').classList.add('d-none');
}

const showStandByMessageContainer = () => {
  document.getElementById('stand-by-message-container').classList.remove('d-none');
  document.getElementById('stand-by-message-container').classList.add('d-block');
  document.getElementById('content-container').classList.add('d-none');
  document.getElementById('content-loading-container').classList.add('d-none');
}

const showLoadingContainer = () => {
  document.getElementById('content-loading-container').classList.remove('d-none');
  document.getElementById('content-loading-container').classList.add('d-block');
  document.getElementById('stand-by-message-container').classList.add('d-none');
  document.getElementById('content-container').classList.add('d-none');
}

const parsePayloadToHtml = (alertPayload) => {
  try {
    const parsedHtml = parseJsonToHtml(alertPayload);
    document.getElementById('report-subject-container').innerHTML = `<b>Assunto</b>: ${alertPayload.report_subject ? alertPayload.report_subject : 'Não informado.'}`;
    document.getElementById('report-cco-container').innerHTML = `<b>CCO</b>: ${alertPayload.report_bcc ? alertPayload.report_bcc : 'Não informado.'}`;
    document.getElementById('alert-mail-content').innerHTML = '';
    document.getElementById('alert-mail-content').insertAdjacentHTML('beforeend', parsedHtml);
    showContentContainer();
  } catch (err) {
    alert('Erro ao parsear o payload de Alerta para HTML');
    showStandByMessageContainer();
  }
}

const renderAlertsCustomerList = () => {
  const customerListNode = document.getElementById('alerts_customer_list');
  const alerts_companies_array = JSON.parse(alerts_companies);
  
  alerts_companies_array.forEach(customer => {
    const customerNode = document.createElement("li");
    customerNode.classList.add("list-group-item");
    customerNode.id = customer.id;
    customerNode.style.cursor = "pointer";
    customerNode.innerHTML = customer.id + " - " + customer.name;
    customerNode.addEventListener('click', handleClientIdInputAction);

    customerListNode.append(customerNode);
  });
}

//MAIN
addEventListeners();
renderAlertsCustomerList();