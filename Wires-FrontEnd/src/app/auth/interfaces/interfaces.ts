export interface AuthSignIn {
  access_token?: string,
  expires_in?  : string,
  message?     : string,
  status       : boolean,
}


export interface AuthSignUp {
  id?          : string,
  username?    : string,
  email?       : string,
  fullname?    : string,
}

export interface AuthUser {
  username     : string,
  access_token?: string,
  expires_in?  : string,
  message?     : string,
  status       : boolean,
}