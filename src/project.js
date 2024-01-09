

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

export function newProject(name, description, priority){
    this.name= name,
    this.description = description;
    this.priority = priority;
    projectRepository.pushArray(this)
}

