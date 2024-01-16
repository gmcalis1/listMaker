import './project.js'
import { newProject } from './project.js';
import './styles.css'

const newProjectButton = document.querySelector('.newProjectButton');
newProjectButton.addEventListener('click', function(){
    let name = prompt("Enter a name for a new project", "New Project")
    let description = prompt("enter a description")
    console.log(name, description);
    newProject(name, description);
    //projectDivShow();
})

const projectSubmit = document.querySelector('.projectSubmit')
projectSubmit.addEventListener('click', function(){
    NewProject(document.querySelector('.newProjectName').data)
})

function projectDivShow(){
    const projectDataEntry = document.querySelector('.projectDataEntry');
    if(projectDataEntry.style.display == 'block'){
        projectDataEntry.style.display = 'none'
    }
    else{
        projectDataEntry.style.display = 'block'
    }
}
