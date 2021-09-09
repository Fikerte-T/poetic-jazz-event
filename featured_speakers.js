const speakers = [
  {
    speakerImage: { link: './images/speaker-1.png', alt: 'speaker-1' },
    name: 'Sarah Montague',
    position: 'Former conductor of the Boston Philharmonic Orchestra',
    description: 'An orchestra conductor on a mission to expose the role that music can play in all our lives.',
  },
  {
    speakerImage: { link: './images/speaker-2.png', alt: 'speaker-2' },
    name: 'Gerd Leonhard',
    position: 'Co-founder and former designer at Kickstarter',
    description: 'Gerd Leonhard is a globally known futurist covering areas such as society business, media technology and communications.',
  },
  {
    speakerImage: { link: './images/speaker-3.png', alt: 'speaker-3' },
    name: 'Steve Morrison',
    position: 'Conductor, consultant and music producer',
    description: 'An orchestral conductor and jazz musician, certainly strikes a chord with business-minded individuals.',
  },
  {
    speakerImage: { link: './images/speaker-4.png', alt: 'speaker-4' },
    name: 'Kate Bryan',
    position: 'Writer, artist, and co-founder of Touretteshero',
    description: 'Kate Bryan is an art historian, curator and arts broadcaster. She is passionate about bringing art to life for people.',
  },
  {
    speakerImage: { link: './images/speaker-5.png', alt: 'speaker-5' },
    name: 'Guy Browning',
    position: '',
    description: 'Guy Browning is unique as a business speaker who has previously worked on stage alongside some of the world’s biggest comedy names.',
  },
  {
    speakerImage: { link: './images/speaker-6.png', alt: 'speaker-6' },
    name: 'Sophia Thakur',
    position: 'Former head of Granada TV and non-exec chairman of All3Media',
    description: 'Pushing the boundaries of poetry and literature, Sophia delivers powerful messages on topics ranging from mental health and diversity to the key issue of the day.',
  },
];

const speakerArr = [];
const homeContainer = document.querySelector('.home-container');
const partner = document.querySelector('.partner');

const featuredSpeaker = document.createElement('div');
featuredSpeaker.classList.add('featured-speaker');
homeContainer.appendChild(featuredSpeaker);
homeContainer.insertBefore(featuredSpeaker, partner);

const header2 = document.createElement('h2');
header2.innerText = 'Featured Speakers';
featuredSpeaker.appendChild(header2);

const horizontal = document.createElement('hr');
featuredSpeaker.appendChild(horizontal);

const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
featuredSpeaker.appendChild(speakerContainer);

speakers.forEach((speaker) => {
  const eventSpeaker = document.createElement('div');
  eventSpeaker.classList.add('speaker');
  speakerContainer.appendChild(eventSpeaker);

  const speakerImg = document.createElement('img');
  speakerImg.setAttribute('src', speaker.speakerImage.link);
  speakerImg.setAttribute('alt', speaker.speakerImage.alt);
  eventSpeaker.appendChild(speakerImg);

  const descriptionCon = document.createElement('div');
  eventSpeaker.appendChild(descriptionCon);

  const heading4 = document.createElement('h4');
  heading4.innerText = speaker.name;
  descriptionCon.appendChild(heading4);

  const speakerPosition = document.createElement('p');
  speakerPosition.classList.add('speaker-position');
  speakerPosition.innerText = speaker.position;
  descriptionCon.appendChild(speakerPosition);

  const horizontal2 = document.createElement('hr');
  horizontal2.classList.add('grey-hr');
  descriptionCon.appendChild(horizontal2);

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('speaker-description');
  speakerDescription.innerText = speaker.description;
  descriptionCon.appendChild(speakerDescription);

  speakerArr.push(eventSpeaker);
});

const button = document.createElement('button');
button.classList.add('btn', 'btn-more');
button.innerText = 'MORE';
speakerContainer.appendChild(button);

const downArrow = document.createElement('i');
downArrow.classList.add('fas', 'fa-chevron-down');
button.appendChild(downArrow);

speakerArr[0].classList.add('speaker-1');
speakerArr[1].classList.add('speaker-2');
speakerArr[2].classList.add('speaker-3');
speakerArr[3].classList.add('speaker-4');
speakerArr[4].classList.add('speaker-5');
speakerArr[5].classList.add('speaker-6');
