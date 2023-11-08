const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

passport.use(new OIDCStrategy({
  identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  responseType: 'code id_token',
  responseMode: 'form_post',
  redirectUrl: 'https://bogdanlinchuk.com:5000/auth/callback',
  allowHttpForRedirectUrl: true,
  validateIssuer: false,
  passReqToCallback: false,
  scope: ['openid', 'profile', 'offline_access', 'https://graph.microsoft.com/Calendars.Read']
}, (iss, sub, profile, accessToken, refreshToken, done) => {
  if (!profile.oid) {
    return done(new Error("No oid found"), null);
  }
  // You can save the profile info and tokens in your database here, if needed.
  return done(null, { profile, accessToken, refreshToken });
}));

module.exports = passport;