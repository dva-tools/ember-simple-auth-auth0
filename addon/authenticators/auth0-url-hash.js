import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import Auth0BaseAuthenticator from '@jebbit/ember-simple-auth-auth0/authenticators/auth0-base';

export default Auth0BaseAuthenticator.extend({
  auth0: service(),
  session: service(),
  authenticate(urlHashData) {
    return new RSVP.Promise((resolve, reject) => {
      this._resolveAuthResult(urlHashData, resolve, reject);
    });
  }
});
