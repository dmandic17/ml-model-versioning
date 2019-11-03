import Api from '@/services/Api'

export default {
  getProjects (search) {
    return Api().get('projects', {
      params: search
    })
  },
  newProject (credentials) {
    return Api().post('newProject', credentials)
  }
}
