import Api from '@/services/Api'

export default {
  getProjects (search) {
    return Api().get('projects', {
      params: search
    })
  },
  newProject (credentials) {
    return Api().post('newProject', credentials)
  },
  deleteProject (projectId) {
    return Api().delete(`deleteProject/${projectId}`)
  },
  updateProject (project) {
    return Api().put(`editProject/${project.id}`, project)
  },
  show (projectId) {
    return Api().get(`editProject/${projectId}`)
  }
}
