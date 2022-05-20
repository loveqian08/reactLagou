export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const RESET_SIGNUP = "RESET_SIGNUP";

export interface SignupPayload {
    email: string,
    name: string,
    password: string
}
export interface SignupAciton {
    type: typeof SIGNUP,
    payload: SignupPayload
}

export interface SignupSuccessAciton {
    type: typeof SIGNUP_SUCCESS
}

export interface SignupSuccessAciton {
    type: typeof SIGNUP_SUCCESS
}
export interface RestSignupAciton {
    type: typeof RESET_SIGNUP
}

export interface SignupFailAciton {
    type: typeof SIGNUP_FAIL,
    message: string
}
export const signup = (payload: SignupPayload) :SignupAciton => ({
   type: SIGNUP,
   payload
})

export const signupSuccess = () :SignupSuccessAciton => ({
    type: SIGNUP_SUCCESS
 })
export const signupFail = (message: string) :SignupFailAciton => ({
    type: SIGNUP_FAIL,
    message
 })
 export const resetSignup = () :RestSignupAciton => ({
    type: RESET_SIGNUP,
 })




//  登录常量
export const SIGIN = "SIGIN";
export const SIGIN_SUCCESS = "SIGIN_SUCCESS";
export const SIGIN_FAIL = "SIGIN_FAIL";

export interface SigninPayload {
    email: string,
    password: string
}
export interface SigninAciton {
   type: typeof SIGIN,
   payload: SigninPayload
}
export interface SigninSuccessAciton {
    type: typeof SIGIN_SUCCESS
}
export interface SigninFailAciton {
    type: typeof SIGIN_FAIL,
    message: string
}

export const signin = (payload: SigninPayload) :SigninAciton => ({
   type: SIGIN,
   payload
})

export const signinSuccess = () :SigninSuccessAciton => ({
    type: SIGIN_SUCCESS
})

export const signinFail = (message: string) :SigninFailAciton => ({
    type: SIGIN_FAIL,
    message
})

//  导出一个类型
 export type AuthUnionType = 
  | SignupAciton
  | SignupSuccessAciton
  | SignupFailAciton
  | RestSignupAciton
  | SigninAciton
  | SigninFailAciton
  | SigninSuccessAciton