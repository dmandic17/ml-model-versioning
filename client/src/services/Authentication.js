import Api from '@/services/Api'

export default{
    login (credentials){
        return Api().post('login',credentials)
    }
}

//we call this like:
//Authentication.login({
//    email: 'dfdfn@gmail.com'
//    password: 'djsfsdkj'
//})