import {isValidUsername} from '6pp'
export const usernameValidator = (username) => {
    if(!isValidUsername(username))
    return { isValue: false, errorMessage: 'Username is Invalid'}
}