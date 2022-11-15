import React, {useState} from "react";
import crypto from "crypto";

/******************************
 * Hardcoded Data for scenario *
 *******************************/

// Let's pretend this is a database and that
// these passwords are appropriately encrypted
// in a real application
const sampleUsers = [{
        "name": "Safe User",
        "email": "safe@example.com",
        "password": "pw",
        "lastLogin": "2017-09-22T21:01:13.184Z"
    },
    {
        "name": "Unsafe User",
        "email": "test@example.com",
        "password": "pw",
        "lastLogin": "2016-01-01T08:51:33.912Z"
    }
];

//These are the hardcoded breaches that we will 
//pretend came from an API
const sampleBreaches = [{
        "name": "Bolt",
        "domain": "bolt.cd",
        "breachDate": "2017-03-01",
        "addedDate": "2017-11-24T08:15:24Z"
    },
    {
        "name": "Elance",
        "domain": "elance.com",
        "breachDate": "2009-01-01",
        "addedDate": "2017-02-18T02:54:48Z"
    },
    {
        "name": "Zomato",
        "domain": "zomato.com",
        "breachDate": "2017-05-17",
        "addedDate": "2017-09-04T21:06:46Z"
    }
]

/*********************
 * Business functions *
 *********************/

//Takes a user and a boolean has_breaches value
//and returns the auth object cooresponding with
//that user
function buildAuth(user, has_breaches) {
    if (has_breaches) {
        return {
            token: crypto.randomBytes(16).toString("hex"),
            user: user,
            meta: {
                suggestPasswordChange: true,
                breachedAccounts: sampleBreaches
            }
        }
    } else {
        return {
            token: crypto.randomBytes(16).toString("hex"),
            user: user
        }
    }
}

export default function LoginForm(props) {
    const [user, setUser] = useState({
        email: "",
        password: "",
        loginFailed: false
    });

    const updateLogin = (val) => {
        setUser({
            ...user,
            ...val
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

       // NOTE: Normally would be hooked up to the an API call to determine
       // if the particular email has breaches, but you should leave this 
       // hard-coded data for now. We're mostly interested in the React 
       // portion of this code.
        if (user.email === sampleUsers[0].email && user.password === sampleUsers[0].password) {
            setUser({
                ...user,
                loginFailed: false
            });
            // has no breaches
            props.onLoginSuccess(buildAuth(user, false));
        } else if (user.email === sampleUsers[1].email && user.password === sampleUsers[1].password) {
            setUser({
                ...user,
                loginFailed: false
            });
            // has breaches
            props.onLoginSuccess(buildAuth(user, true));
        } else {
            setUser({
                ...user,
                loginFailed: true
            });
        }
        return false;
    }

   return (
     <div>
     {user.loginFailed && (
       <div className="alert alert-danger mt-3">
         The email or password you provided is incorrect. Please check your
         entry and try again.
       </div>
     )}
       <div className="py-5 text-center">
         <h2>Sign In</h2>
       </div>
       <div>
         <form onSubmit={e => handleSubmit(e)}>
           <div className="mb-3">
             <label htmlFor="email">Email</label>
             <div className="input-group">
               <input
                 type="text"
                 className="form-control"
                 id="email"
                 required
                 onChange={e => updateLogin({ email: e.target.value })}
                 value={user.email}
               />
              </div>
           </div>

           <div className="mb-3">
             <label htmlFor="password">Password</label>
             <div className="input-group">
               <input
                 type="password"
                 className="form-control"
                 id="password"
                 onChange={e => updateLogin({ password: e.target.value })}
                 required
               />
             </div>
           </div>

           <button className="btn btn-primary" type="submit">
             Sign In
           </button>
         </form>
       </div>
     </div>
   );
}
