import Api from '@/services/Api'

export default {
  getModels (search) {
    return Api().get('/models1', {
      params: search
    })
  },
  newModel (credentials) {
    return Api().post('/newModel1', credentials)
  },
  deleteModel (modelId) {
    return Api().delete(`/deleteModel1/${modelId}`)
  },
  updateModel (model) {
    return Api().put(`/editModel1/${model.id}`, model)
  },
  showModel (modelId) {
    return Api().get(`/editModel1/${modelId}`)
  },
  search (date) {
    return Api().get(`/search1/${date}`)
  }

}
