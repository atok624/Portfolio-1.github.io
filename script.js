const humburger = document.querySelector('.humburger');
const deskNav = document.querySelector('.Desk_nav');
const projectListContainer = document.querySelector('#work');
const popupContainer = document.querySelector('.modal-wrapper');

const projectLists = [
  {
    title: 'Tonic',
    subtitle: 'Canopy',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectType: 'Back End Dev',
    date: 2015,
    image: 'Snapshoot_Portfolio_(4).png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://atok624.github.io/Portfolio-1.github.io',
    sourceLink: 'https://github.com/atok624/Portfolio-1.github.io',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Facebook',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectType: 'Full Stack Dev',
    date: 2015,
    image: 'Snapshoot_Portfolio_(3).png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    liveVersion: 'https://atok624.github.io/Portfolio-1.github.io',
    sourceLink: 'https://github.com/atok624/Portfolio-1.github.io',
  },
  {
    title: 'Facebook 360',
    subtitle: 'Facebook',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    projectType: 'Full Stack Dev',
    date: 2015,
    image: 'Snapshoot_Portfolio_(2).png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    liveVersion: 'https://atok624.github.io/Portfolio-1.github.io',
    sourceLink: 'https://github.com/atok624/Portfolio-1.github.io',
  },
  {
    title: 'Uber Navigation',
    subtitle: 'Uber',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectType: 'Lead Developer',
    date: 2018,
    image: 'Snapshoot_Portfolio_(1).png',
    technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
    liveVersion: 'https://atok624.github.io/Portfolio-1.github.io',
    sourceLink: 'https://github.com/atok624/Portfolio-1.github.io',
  },
];

function listAllProject() {
  let projectListString = '';

  projectLists.forEach((project, index) => {
    let languageHtml = '';

    if (project.technologies.length) {
      project.technologies.forEach((tech) => {
        languageHtml += `<li class="tag">${tech}</li>`;
      });
    }

    projectListString += `
		<div class="work_1 order-0">
		<div class="work-2 class-0">
				<img class="big" src="image/${project.image}" alt="Snap_1" />
		</div>
		<div class="work-3">
				<h2 class="tonic">${project.title}</h2>
				<ul class="details">
						<li class="canopy">${project.subtitle}</li>
						<li class="dot"></li>
						<li class="back_end">${project.projectType}</li>
						<li class="dot"></li>
						<li class="a_2015">${project.date}</li>
				</ul>
				<p class="para_2">
        ${project.description}
				</p>
				<ul class="language">
						${languageHtml}
				</ul>
				<button class="button" type="button" value="see project" id="${index}">see project</button>
		</div>
</div>`;
  });

  projectListContainer.innerHTML = projectListString;
}

function displayProjectInfoOnPopupWindow(project) {
  let technologiesHtml = '';
  if (project.technologies.length) {
    project.technologies.forEach((technology) => {
      technologiesHtml += `<li class="tag">${technology}</li>`;
    });
  }

  popupContainer.innerHTML = `
  <div class="modal-card">
  <div class="modal-header">
      <h1 class="modal-title">${project.title}</h1>

      <button title="close button" type="button" class="modal-close-btn">
          <img src="image/Icon.png" alt="close" width="100%" />
      </button>
  </div>
  <div class="project-additional-info modal-additional-info">
      <h5>${project.subtitle}</h5>
      <div class="dot"></div>
      <p>${project.projectType}</p>
      <div class="dot"></div>
      <p><time datetime="${project.date}">${project.projectType}</time></p>
  </div>

  <div class="project-image-container" style="background-image: url('./image/${project.image}');"></div>

  <div class="modal-content">
      <p class="project-description">${project.description}</p>

      <div class="project-information-2">
          <ul class="language">
              ${technologiesHtml}
          </ul>

          <div class="divider"></div>

          <div class="modal-actions">
              <a type="button" href="${project.liveVersion}" class="button">
                  See live
                  <img
                      src="./image/see_live.svg"
                      width="21px"
                      alt="see live"
                  />
              </a>
              <a type="button" href="${project.sourceLink}" class="button">
                  See Source
                  <img
                      src="./image/github_in_button.svg"
                      width="21px"
                      alt="github"
                  />
              </a>
          </div>
      </div>
  </div>
</div>
  `;

  popupContainer.classList.remove('close');
  document.body.classList.add('hidescrollbar');

  popupContainer.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('modal-close-btn')) {
      popupContainer.classList.add('close');
      popupContainer.innerHTML = '';
      document.body.classList.remove('hidescrollbar');
    }
  });
}

projectListContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('id');
    const project = projectLists[Number(index)];

    displayProjectInfoOnPopupWindow(project);
  }
});

listAllProject();

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  deskNav.classList.toggle('active');
});

document.querySelectorAll('.Desk_list').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  deskNav.classList.remove('active');
}));

// this function will test the email and see if it is in lowercase, if it is it'll show an error
function formValidation() {
  const error = document.querySelector('#error');
  const email = document.querySelector('#contact_form_email');
  if (email.value === email.value.toLowerCase()) {
    return true;
  }
  error.innerHTML = `!!! Email must be in lowercase!!!<br>Try this : ${email.value.toLowerCase()}`;
  return false;
}

// Local stoarge
const form = document.querySelector('.contact_form_content');
form.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#input').value,
    email: document.querySelector('#contact_form_email').value,
    text: document.querySelector('.contact_form_message').value,
  };

  const storeData = JSON.stringify(data);
  localStorage.setItem('mydata', storeData);
});

const getData = JSON.parse(localStorage.getItem('mydata'));
if (getData) {
  document.getElementById('input').value = getData.name;
  document.getElementById('contact_form_email').value = getData.email;
  document.querySelector('.contact_form_message').value = getData.text;
}

// this line of code is to avoid Meanless ESLint Errors
const avoidErrors = formValidation();
console(avoidErrors);
