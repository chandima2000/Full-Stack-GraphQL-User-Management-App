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

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id){
      id
      name
      age
      isMarried
    }
  }
`;

function App() {
  
const { loading:getUsersLoading, error:getUsersError, data:getUsersData } = useQuery(GET_USERS);

const { 
    loading:getUserByIdLoading, 
    error:getUserByIdError, 
    data:getUserByIdData 
  } = useQuery(GET_USER_BY_ID, {variables: { id: "2"}});

  if (getUsersLoading) return <p>Loading...</p>;
  if (getUsersError || getUserByIdError) return <p>Error : {getUsersError.message} {getUserByIdError.message}</p>;

  return (
    <div>
      <h1> All Users</h1>
      <div>
        {getUsersData.getUsers.map((user) => (
            <div>
              <p> ------- </p>
              <p> Name: {user.name} </p>
              <p> Age: {user.age} </p>
              <p> Status: {user.isMarried ? "Yes" : "No"} </p>
            </div>
        ))}
      </div>

      <h1> Chosen user: </h1>
        <div >
          {getUserByIdLoading ? (
            <p>Loading user ...</p>
          ) : (
            <div>
              <p> Name: {getUserByIdData.getUserById.name} </p>
              <p> Age: {getUserByIdData.getUserById.age} </p>
            </div>
          )}
        </div>
    </div>
  )

}

export default App
