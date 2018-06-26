module.exports = `  
type User { 
  permission: String
  signUpComplete: Boolean
  displayName: String
  profileIconUrl: String
  email: String
  location: String
 }
type Voyage {
  name: String
  users: [User]
  teams: [Team]
}
type Team {
  number: Int
  teamLeader: String
  skillGroup: String
  gitRepoLink: String
  members: [User]
}
type Query { 
  user: User,
  users: [User]
}
`;
