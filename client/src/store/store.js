import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const apiBaseUrl = 'http://localhost:8081'

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    projects: [],
    project: null,
    models: [],
    model: null
  },
  mutations: {
    setToken: function (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser: function (state, user) {
      state.user = user
    },
    setProjects: function (state, projects) {
      state.projects = projects
    },
    addProject: function (state, prj) {
      state.projects.push(prj)
    },
    findProject: function (state, prj) {
      state.project = prj
    },
    findModel: function (state, prj) {
      state.model = prj
    },

    removeProject: function (state, id) {
      for (let m = 0; m < state.projects.length; m++) {
        if (state.projects[m].id === parseInt(id)) {
          state.projects.splice(m, 1)
          break
        }
      }
    },

    updateProject: function (state, payload) {
      for (let m = 0; m < state.projects.length; m++) {
        if (state.projects[m].id === parseInt(payload.id)) {
          state.projects[m].description = payload.project.description
          break
        }
      }
    },
    setModels (state, models) {
      state.models = models
    },
    addModel: function (state, md) {
      state.models.push(md)
    },

    removeModel: function (state, id) {
      for (let m = 0; m < state.models.length; m++) {
        if (state.models[m].id === parseInt(id)) {
          state.models.splice(m, 1)
          break
        }
      }
    },

    updateModel: function (state, payload) {
      for (let m = 0; m < state.models.length; m++) {
        if (state.models[m].id === parseInt(payload.id)) {
          state.models[m].ProjectId = payload.project.ProjectId
          state.models[m].name = payload.project.name
          state.models[m].description = payload.project.description
          state.models[m].groupName = payload.project.groupName
          state.models[m].trainingTime = payload.project.trainingTime
          state.models[m].inferenceTime = payload.project.inferenceTime
          state.models[m].metricsResult = payload.project.metricsResult
          state.models[m].updatetAt = payload.project.updatedAt
          break
        }
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    loadProjects: function ({ commit }, email) {
      fetch(apiBaseUrl + `/projects1?email=${email}`, { method: 'get' }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
      }).then((jsonData) => {
        commit('setProjects', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },
    loadProject: function ({ commit }, id) {
      fetch(apiBaseUrl + `/editProject1/${id}`, { method: 'get' }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
      }).then((jsonData) => {
        commit('findProject', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },
    loadModel: function ({ commit }, id) {
      fetch(apiBaseUrl + `/editModel1/${id}`, { method: 'get' }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
      }).then((jsonData) => {
        commit('findModel', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    deleteProject: function ({ commit }, id) {
      fetch(apiBaseUrl + `/editProject1/${id}`, { method: 'delete' }).then((response) => {
        if (!response.ok) { throw response }

        return response.json()
      }).then((jsonData) => {
        commit('removeProject', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    newProject: function ({ commit }, message) {
      fetch(apiBaseUrl + '/newProject1', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: message
      }).then((response) => {
        if (!response.ok) { throw response }

        return response.json()
      }).then((jsonData) => {
        commit('addProject', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    updateProject: function ({ commit }, payload) {
      const pay = JSON.parse(payload)
      fetch(apiBaseUrl + `/editProject1/${pay.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pay.project)
      }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
      }).then((jsonData) => {
        commit('updateProject', {id: pay.id, project: jsonData})
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },
    loadModels: function ({ commit }, id) {
      fetch(apiBaseUrl + `/models1?ProjectId=${id}`, { method: 'get' }).then((response) => {
        if (!response.ok) { throw response }

        return response.json()
      }).then((jsonData) => {
        commit('setModels', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    deleteModel: function ({ commit }, id) {
      fetch(apiBaseUrl + `/editModel1/${id}`, { method: 'delete' }).then((response) => {
        if (!response.ok) { throw response }

        return response.json()
      }).then((jsonData) => {
        commit('removeModel', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    newModel: function ({ commit }, message) {
      fetch(apiBaseUrl + '/newModel1', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: message
      }).then((response) => {
        if (!response.ok) { throw response }

        return response.json()
      }).then((jsonData) => {
        commit('addModel', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    },

    updateModel: function ({ commit }, payload) {
      const pay = JSON.parse(payload)
      fetch(apiBaseUrl + `/editModel1/${pay.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pay.project)
      }).then((response) => {
        if (!response.ok) { throw response }
        return response.json()
      }).then((jsonData) => {
        commit('updateModel', {id: pay.id, project: jsonData})
      }).catch((error) => {
        if (typeof error.text === 'function') {
          error.text().then((errorMessage) => {
            alert(errorMessage)
          })
        } else { alert(error) }
      })
    }

  },
  getters: {
    getUser (state) {
      return state.user.email
    }
  }
})
