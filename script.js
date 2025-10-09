


const allButton = document.querySelector(".all-button");
const webButton = document.querySelector(".web-button");
const mobileButton = document.querySelector(".mobile-button");
const miscButton = document.querySelector(".misc-button");
const webProjects = document.querySelectorAll(".web-projects");
const mobileProjects = document.querySelectorAll(".mobile-projects");
const miscProjects = document.querySelectorAll(".misc-projects");



allButton.addEventListener('click', () => {
    webProjects.forEach(project => project.style.display = 'inline-block') // Help from w3schools
    mobileProjects.forEach(project => project.style.display = 'inline-block')
    miscProjects.forEach(project => project.style.display = 'inline-block') 
})
webButton.addEventListener('click', () => {
    webProjects.forEach(project => project.style.display = 'inline-block') 
    mobileProjects.forEach(project => project.style.display = 'none') 
    miscProjects.forEach(project => project.style.display = 'none') 
})
mobileButton.addEventListener('click', () => {
    webProjects.forEach(project => project.style.display = 'none') 
    mobileProjects.forEach(project => project.style.display = 'inline-block') 
    miscProjects.forEach(project => project.style.display = 'none') 
})
miscButton.addEventListener('click', () => {
    webProjects.forEach(project => project.style.display = 'none') 
    mobileProjects.forEach(project => project.style.display = 'none') 
    miscProjects.forEach(project => project.style.display = 'inline-block') 
})

