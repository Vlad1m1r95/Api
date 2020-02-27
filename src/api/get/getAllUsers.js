import axios from "axios"
import TableUsers from './../../view/tableUsers/tableUsers';
// GET ALL USERS
const apiGetUsers = () => {
  axios.get("http://localhost:3000/users")
    .then(response => TableUsers(null, response.data))
}

export default apiGetUsers