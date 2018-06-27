module.exports = `
  type User {
    displayName: String!
    email: String!
    githubId: String!
    signUpComplete: Boolean!

    photoURL: String
    chinguDetails: ChinguDetails
  }

  type ChinguDetails {
    timezone: String!
    role: String!
    skillLevel: String!
    fullTime: Boolean!
  } 

  input UpdatedUser {
    displayName: String
    email: String
    signUpComplete: Boolean

    photoURL: String
  }
`;
