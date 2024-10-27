import passport from "passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import auth from "../config/auth";
import User from "../model/UserModel";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: auth.secret_key || "",
};

class PassportAuth {
  public user: User;
  constructor(user: User) {
    this.user = user;
  }

  mongoDB() {
    function findById(payload: object) {
      passport.use(
        new Strategy(options, (payload, done) => {
          User.findById(payload.sub)
            .then((user) => {
              if (user) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            })
            .catch((err) => done(err, false));
        })
      );
    }
  }
}

export default PassportAuth;
