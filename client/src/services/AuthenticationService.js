import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('/register1', credentials)
  },
  login (credentials) {
    return Api().post('/login1', credentials)
  }
}
