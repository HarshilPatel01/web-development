const nameInput = document.getElementById('customname');
const generateBtn = document.querySelector('.randomize');
const storyOutput = document.querySelector('.story');

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Story template
const baseStory = "The weather was 94°F, so :character: decided to go out. Upon reaching :location:, they were taken aback when :event:. Alex saw it all but wasn’t shocked — :character: weighs 300 pounds, and it was sweltering.";

// Arrays for random insertion
const characters = ["Sam the Troll", "Captain Giggles", "Santa Claus"];
const locations = ["a haunted mansion", "Central Park", "the Eiffel Tower"];
const events = ["burst into flames", "evaporated into thin air", "transformed into a jellyfish"];

// Add click event listener
generateBtn.addEventListener('click', displayStory);

function displayStory() {
  let customStory = baseStory;

  // Substitute placeholders with random values
  const randomCharacter = getRandomItem(characters);
  const randomLocation = getRandomItem(locations);
  const randomEvent = getRandomItem(events);

  customStory = customStory.replace(/:character:/g, randomCharacter);
  customStory = customStory.replace(':location:', randomLocation);
  customStory = customStory.replace(':event:', randomEvent);

  // Replace default name if a custom name is entered
  if (nameInput.value.trim() !== '') {
    customStory = customStory.replace('Alex', nameInput.value.trim());
  }

  // Convert units for UK preference
  if (document.getElementById('uk').checked) {
    const weightInStone = Math.round(300 / 14) + ' stone';
    const tempInCelsius = Math.round((94 - 32) * (5 / 9)) + '°C';

    customStory = customStory.replace('94°F', tempInCelsius);
    customStory = customStory.replace('300 pounds', weightInStone);
  }

  // Display the final story
  storyOutput.textContent = customStory;
  storyOutput.style.visibility = 'visible';
}
