const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});



//footer
const today = new Date()
const thisYear= today.getFullYear()

const footer = document.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerHTML= `Jackie Vazquez ${thisYear}  
          <span id="contact-links-section">
              <a href="https://github.com/jvazquez2028" target="_blank"><i class="fa-brands fa-github contact-links"></i></a>
       
              <a href="https://www.linkedin.com/in/jaqueline-vazquez-a7b37a220/" target="_blank"><i class="fab fa-linkedin contact-links"></i></a>
    
              <a href="https://twitter.com/JackieV_24" target="_blank"><i class="fab fa-twitter-square contact-links"></i></a>
      
              <a href="mailto:jvazquez2028@gmail.com"><i class="fas fa-envelope-square contact-links"></i></a>
              </span>
      `
footer.appendChild(copyright)



const skills = ['HTML', 'CSS', 'Javascript', 'Github']
const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelector('ul')


skills.forEach((skill) => {
    const skillItem = document.createElement("li")
    skillItem.innerText= skill
    skillsList.appendChild(skillItem)
})



//lesson 4.3
//message form

const messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener("submit", messageSubmit)
    
    function messageSubmit(event) {
      event.preventDefault()

    let {name, email, message } = event.target

      console.log("name", name.value)
      console.log("email", email.value)
      console.log("message", message.value)

    

let messages = document.getElementById('message-list')
let messageSubmited = messages.querySelector('div')
let newMessage = document.createElement('li')
console.log(messageSubmited)
  
newMessage.innerHTML = `
        <span>
        <a href="mailto:${email.value}">${name.value}</a>
        wrote: ${message.value} 
        </span>`
messageSubmited.appendChild(newMessage)

const removeButton= document.createElement("erase")
  removeButton.innerText="Remove"
      removeButton.type="button"
      newMessage.appendChild(removeButton)
      
removeButton.addEventListener('click', function (e) {
  const entry = e.target.parentNode;
  entry.remove()
})
    
}


/*
lesson 6-1

    let githubRequest = new XMLHttpRequest()

    githubRequest.open("GET", "https://api.github.com/users/jvazquez2028/repos")

    githubRequest.send()

   githubRequest.addEventListener('load', function() {
      let repositories = JSON.parse(this.response)

      let projectSection= document.getElementById('projects')
      let projectList = projectSection.querySelector('ul')
      

    for (i=0; i < repositories.length; i++) {
      let project = document.createElement('li')
      project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`
      projectList.appendChild(project)
    }
  })
*/
  //githubRequest.send()
  

  //lesson 6-2
//fetch
  fetch("https://api.github.com/users/jvazquez2028/repos")
  .then((response) => response.json())
  .then((repositories) => {
    let projectsList = document.getElementById("projects") 
    repositories.forEach(function(repo) {
      let project = document.createElement("li")
      project.innerHTML = `<a href=${repo.html_url} target=”_blank”>${repo.name}</a>`
      projectsList.appendChild(project)
    })
  })