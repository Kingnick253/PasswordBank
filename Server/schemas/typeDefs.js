const { gql } = require("apollo-server-express");


const typeDefs = gql`

    type User{
        _id: ID!
        userName: String
        name: String
        password: String 
        email: String
        passwordBank:[PB]
    }

    type PB{
        
    }

    type Query {
        classes: [User]
    }

`;
module.exports = typeDefs;