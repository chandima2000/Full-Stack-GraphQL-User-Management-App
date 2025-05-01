import './App.css'
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    getUsers{
      id
      name
      age
      isMarried
    }
  }
`;

function App() {
  
const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1> Hello Users</h1>
      
      <div>
        {data.getUsers.map((user) => (
            <div>
              <p> ------- </p>
              <p> Name: {user.name} </p>
              <p> Age: {user.age} </p>
              <p> Status: {user.isMarried ? "Yes" : "No"} </p>
            </div>
        ))}
      </div>
    </div>
  )

}

export default App
