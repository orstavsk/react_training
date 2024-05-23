const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
require("dotenv").config();

const GITHUB_CLIENT_ID = "Ov23liZXHDqAcTC1dR7P";
const GITHUB_CLIENT_SECRET = "2c1c36d132a9102adadf17c008fb4272d6803d63";
const CALLBACK_URL = "/auth/github/callback";


passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: CALLBACK_URL ,
        },
        function (accessToken, refreshToken, profile, done)
        {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) =>
{
    done(null, user);
});

passport.deserializeUser((user, done) =>
{
    done(null, user);
});