
const projectRepository = (function(){

    const projectArray = [];

    const getArray = function(){
        return projectArray;
    }
    function pushArray(item){
        projectArray.push(item)
    }
    return{
        getArray,
        pushArray
    }
})();

export function newProject(name, description){
    const MakeNewProject = function(name, description){
        this.name = name
        this.description = description
    }
    let project = new MakeNewProject(name, description);
    projectRepository.pushArray(project)
    console.log(projectRepository.getArray())
}


