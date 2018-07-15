import firebase from 'firebase/app';
import 'firebase/auth';

import { config } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const provider = new firebase.auth.GithubAuthProvider();

provider.addScope('email');
provider.setCustomParameters({ allow_signup: 'false' });
