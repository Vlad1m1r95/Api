import addUserTemplate from './view/template/newUser.hbs'
import apiGetUsers from './api/get/getAllUsers';
import apiPostUser from './api/post/postUser';
import './css/index.css'

const app = document.getElementById('app')
app.innerHTML = addUserTemplate()
document.getElementById("add_user").addEventListener('click', () => apiPostUser())
document.getElementById("all_user").addEventListener('click', () => apiGetUsers())





