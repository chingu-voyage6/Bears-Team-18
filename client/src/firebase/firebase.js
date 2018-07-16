import firebase from 'firebase/app';
import 'firebase/auth';

import { config } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const provider = new firebase.auth.GithubAuthProvider();

provider.addScope('read:user');
provider.setCustomParameters({ allow_signup: 'false' });

export { provider };
