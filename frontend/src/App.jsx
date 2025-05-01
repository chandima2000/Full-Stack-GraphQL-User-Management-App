import { useState } from 'react';
import './App.css'
import { useQuery, gql, useMutation } from '@apollo/client';

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

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!){
    createUser(name: $name, age: $age, isMarried: $isMarried){
      name
    }
  }
`;

function App() {

const [newUser, setNewUser] = useState('');
  
const { loading:getUsersLoading, error:getUsersError, data:getUsersData } = useQuery(GET_USERS);

const { 
    loading:getUserByIdLoading, 
    error:getUserByIdError, 
    data:getUserByIdData 
  } = useQuery(GET_USER_BY_ID, {variables: { id: "2"}});


const [createUser] = useMutation(CREATE_USER);

  if (getUsersLoading) return <p>Loading...</p>;
  if (getUsersError || getUserByIdError) return <p>Error : {getUsersError.message} {getUserByIdError.message}</p>;

  const handleCreateUser = async () => {
    createUser(
      {variables :{
        name: newUser.name,
        age: Number(newUser.age),
        isMarried: false
      }}
    )
  }

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

      <p> ------------------------- </p>
      <h1> Create New User </h1>
          <div>
            <input 
              type='text' 
              placeholder='Name' 
              onChange={(e) => setNewUser((prev) => ({...prev, name: e.target.value }))}
            />

            <input 
              type='number' 
              placeholder='Age'
              onChange={(e) => setNewUser((prev) => ({...prev, age: e.target.value }))}
            />

            <button onClick={handleCreateUser}> Create User </button>
          </div>
    </div>
  )

}

export default App
