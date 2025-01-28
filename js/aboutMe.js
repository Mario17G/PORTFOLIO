
//We wait until the entire DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    //We get the buttons to listen to them
    let aboutMe = document.getElementById('buttonAboutMe');
    let experience = document.getElementById('buttonExperience');
    let technologies = document.getElementById('buttonTechnologies');

    //We get the containers ready to display
    let viewAboutMe = document.querySelector('.aboutMe');
    let viewExperience = document.querySelector('.experience');
    let viewTechnologies = document.querySelector('.technologies');

    //When the buttons are clicked, they change to the corresponding container
    aboutMe.addEventListener("click", () => {

        //We indicate which button has been clicked
        aboutMe.classList.add('selected');
        experience.classList.remove('selected');
        technologies.classList.remove('selected');

        //We display the corresponding container
        viewAboutMe.style.display = 'flex';
        viewExperience.style.display = 'none';
        viewTechnologies.style.display = 'none';

    });

    experience.addEventListener("click", () => {

        //We indicate which button has been clicked
        experience.classList.add('selected');
        aboutMe.classList.remove('selected');
        technologies.classList.remove('selected');

        //We display the corresponding container
        viewExperience.style.display = 'flex';
        viewAboutMe.style.display = 'none';
        viewTechnologies.style.display = 'none';

    });

    technologies.addEventListener("click", () => {

        //We indicate which button has been clicked
        technologies.classList.add('selected');
        aboutMe.classList.remove('selected');
        experience.classList.remove('selected');

        //We display the corresponding container
        viewTechnologies.style.display = 'flex';
        viewExperience.style.display = 'none';
        viewAboutMe.style.display = 'none';

    });

});