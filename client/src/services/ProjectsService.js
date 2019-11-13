import Api from '@/services/Api'

export default {
  getProjects (search) {
    return Api().get('/projects1', {
      params: search
    })
  },
  newProject (credentials) {
    return Api().post('/newProject1', credentials)
  },
  deleteProject (projectId) {
    return Api().delete(`/deleteProject1/${projectId}`)
  },
  updateProject (project) {
    return Api().put(`/editProject1/${project.id}`, project)
  },
  show (projectId) {
    return Api().get(`/editProject1/${projectId}`)
  }
}
