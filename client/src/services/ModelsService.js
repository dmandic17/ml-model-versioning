import Api from '@/services/Api'

export default {
  getModels (search) {
    return Api().get('models', {
      params: search
    })
  },
  newModel (credentials) {
    return Api().post('newModel', credentials)
  },
  deleteModel (modelId) {
    return Api().delete(`deleteModel/${modelId}`)
  },
  updateModel (model) {
    return Api().put(`editModel/${model.id}`, model)
  },
  showModel (modelId) {
    return Api().get(`editModel/${modelId}`)
  },
  search (date) {
    return Api().get(`search/${date}`)
  }

}
