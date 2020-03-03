//RENDER USERS TABLE
const TableUsers = (params, data) => {
  let trarray = []
  data.forEach(element => {
    let tdata = `<tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    </tr>`
    trarray.push(tdata)
  })
  const table = `<table class="bordered">
  <thead>
    <tr>
      <th>id</th>
      <th>Имя</th>
      <th>Емаил</th>
    </tr>
  </thead>
  ${trarray.join('')}
</table>`
  app.innerHTML = table
}

export default TableUsers
