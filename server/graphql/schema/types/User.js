module.exports = `
  type User {
    displayName: String!
    githubId: String!
    signUpComplete: Boolean!
    permission: String!
    
    email: String
    photoURL: String
    chinguDetails: ChinguDetails
  }

  type ChinguDetails {
    timezone: String!
    role: String!
    skillLevel: String!
    fullTime: Boolean!
  } 

  input UpdatedUserInput {
    displayName: String
    email: String
    signUpComplete: Boolean

    photoURL: String
  }
`;
