module.exports = `
  type User {
    displayName: String!
    # Should this not be removed in order to prevent it being sent across the wire?
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
    photoURL: String
  }
`;
