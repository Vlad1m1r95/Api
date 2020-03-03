//POST USER
import axios from 'axios'
const apiPostUser = () => {
  const name = document.getElementById('name_user')
  const email = document.getElementById('email_user')
  axios
    .post('http://localhost:3000/users', {
      name: name.value,
      email: email.value,
    })
    .then(function(response) {
      console.log(response.config.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}
export default apiPostUser
