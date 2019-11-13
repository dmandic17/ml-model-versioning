const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProjectController = require('./controllers/ProjectController')
const ModelController  =require('./controllers/ModelController')

module.exports = (app) => {
    app.post('/register1',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login1',
        AuthenticationController.login)


    app.get('/projects1',
        ProjectController.getProjects)
    app.post('/newProject1',
        ProjectController.newProject),
        app.get('/editProject1/:id',
            ProjectController.show)
    app.put('/editProject1/:id',
        ProjectController.updateProject)
    app.delete('/editProject1/:id',
        ProjectController.deleteProject)

    app.get('/models1',
        ModelController.getModels)
    app.post('/newModel1',
        ModelController.newModel)
    app.get('/editModel1/:id',
            ModelController.showModel)
    app.put('/editModel1/:id',
        ModelController.updateModel)
    app.delete('/editModel1/:id',
        ModelController.deleteModel)
    app.get('/search1/:date',
        ModelController.search)

};
