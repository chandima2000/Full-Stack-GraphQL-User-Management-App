import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql

  # This "User" type defines the queryable fields for every 'user' in the data source.

  type User {
    id: ID
    name: String
    age: Int
    isMarried: Boolean
  }



  # The "Query" type defines lists all of the available queries that clients can execute, along with the return type for each. 
  # In this case, the "user" query returns an array of zero or more Users.

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }



  # Modify server-side data (Create a new user)

  type Mutation {
      createUser(name: String!, age: Int!, isMarried: Boolean!): User
  }


`;

const resolvers = {
    Query: {
        getUsers: () => { 
            return users 
        },
        getUserById: (parent, args) => {
            return users.find((user) => user.id === args.id);
        },
    },

    Mutation:{
        createUser: (parent,args) => {
            const {name, age, isMarried} = args;
            const newUser = {
                id: (users.length + 1).toString(),
                name,
                age,
                isMarried
            }
            users.push(newUser);
        },
    }
}


// Define the Data set
const users = [
    { id: "1", name: "John Doe", age: 30, isMarried: true },
    { id: "2", name: "Jane Smith", age: 25, isMarried: false },
    { id: "3", name: "Alice Johnson", age: 28, isMarried: false },
]


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000},
});

console.log(`Server ready at : ${url}`);