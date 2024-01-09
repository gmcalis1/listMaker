import './project.js'
import './styles.css'

const newProjectButton = document.querySelector('.newProjectButton');
newProjectButton.addEventListener('click', function(){
    projectDivShow();
})

const projectSubmit = document.querySelector('.projectSubmit')
projectSubmit.addEventListener('click', function(){
    
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