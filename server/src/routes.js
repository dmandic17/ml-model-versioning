const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProjectController = require('./controllers/ProjectController')
const ModelController  =require('./controllers/ModelController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)


    app.get('/projects',
        ProjectController.getProjects)
    app.post('/newProject',
        ProjectController.newProject),
        app.get('/editProject/:id',
            ProjectController.show)
    app.put('/editProject/:id',
        ProjectController.updateProject)
    app.delete('/editProject/:id',
        ProjectController.deleteProject)

    app.get('/models',
        ModelController.getModels)
    app.post('/newModel',
        ModelController.newModel)
    app.get('/editModel/:id',
            ModelController.showModel)
    app.put('/editModel/:id',
        ModelController.updateModel)
    app.delete('/editModel/:id',
        ModelController.deleteModel)
    app.get('/search/:date',
        ModelController.search)

};
