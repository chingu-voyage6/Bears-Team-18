module.exports = `  
type User { 
  permission: String
  signUpComplete: Boolean
  displayName: String
  profileIconUrl: String
  email: String
  location: String
 }
type Query { 
  user: User,
  users: [User]
}
`;
