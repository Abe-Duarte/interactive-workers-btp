const form = document.querySelector('form')


form.addEventListener('submit', (e)=> {
  e.preventDefault()
  const fullName = document.getElementById('Name').value
  const email = document.getElementById('Email').value
  const phoneNumber = document.getElementById('Phone').value
  const company = document.getElementById('Company').value
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  var raw = JSON.stringify({
    "name": fullName,
    "email": email,
    "phone": phoneNumber,
    "company": company
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode:'no-cors'
  };
  
  fullName && email && phoneNumber && company != null || '' ? fetch("https://blllapwzo9.execute-api.us-east-1.amazonaws.com/production/emails", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)) : 'fill the blanks'
})