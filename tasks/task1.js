async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = await fetch(url);
  const data = await response.json();

  return data.map(user => ({
    id: user.id,
    name: user.name
  }));
}

module.exports = fetchUsers;
