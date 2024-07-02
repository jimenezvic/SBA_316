const format = document.getElementById("all-formats"); //div
const messageDiv = document.createElement('div');
messageDiv.style.display = 'flex';
format.style.display = 'block'
format.appendChild(messageDiv);

messageDiv.style.backgroundColor = '#669';
format.style.backgroundColor = 'grey';
const message = document.createElement('h4')
message.textContent = ('Welcome! Log Into My Account');
messageDiv.appendChild(message);   

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'Email Address';
inputName.required = 'true';
inputName.style.display = 'flex';
inputName.style.width = '250px'
inputName.style.height = '30px'
const eMail = document.createElement('p');
eMail.textContent = ('Email');

//Password input
const password = document.createElement('input');
password.type = 'password';
password.placeholder = 'Introduce password';
password.required = 'true';
password.style.display = 'flex';
password.style.width = '250px'
password.style.height = '30px'
const pass = document.createElement('p');
pass.textContent = ('Password');

//Button
const btndiv = document.createElement('div');
btndiv.style.display = 'flex';
btndiv.style.justifyContent = 'space-evenly'; 
btndiv.style.alignItems = 'center'; 
const logIn = document.createElement('button');
logIn.style.display = 'flex';
logIn.type = 'submit';
logIn.innerText = 'Submit'
logIn.style.width = '100px'
logIn.style.height = '30px'
logIn.style.justifyContent = 'center'
logIn.style.marginBlock= '10px';


//forgot password label
const forgPass = document.createElement('a');
forgPass.innerText = ('Forgot Password?');
forgPass.href = '#';



const keepLog = document.createElement('i');
keepLog.style.fontSize = ('small');
keepLog.innerText = ('If you do not have an account but would like to check the status of an order, request a change, or report a problem with an order or shipment, please go to our Order Status & Returns page.');


//continue as guest label

const guest = document.createElement('a');
guest.innerText = ('Continue as guest');
guest.href = '#';







format.appendChild(eMail)
format.appendChild(inputName);
format.appendChild(pass)
format.appendChild(password);
format.appendChild(forgPass)
format.appendChild(btndiv);
btndiv.appendChild(logIn);
format.appendChild(keepLog);
btndiv.appendChild(guest);
