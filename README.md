# Passport-GitLab

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [GitLab](https://gitlab.com/) using the OAuth 2.0 API.

This module lets you authenticate using GitLab in your Node.js applications.
By plugging into Passport, GitLab authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-gitlab

## Usage

#### Configure Strategy

The GitLab authentication strategy authenticates users using a GitLab
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.

    passport.use(new GitLabStrategy({
        clientID: GITLAB_CLIENT_ID,
        clientSecret: GITLAB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/gitlab/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ gitlabid: profile.username }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'gitlab'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/gitlab',
      passport.authenticate('gitlab'));

    app.get('/auth/gitlab/callback', 
      passport.authenticate('gitlab', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/gtanner/passport-gitlab/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Gord Tanner](http://github.com/gtanner)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
