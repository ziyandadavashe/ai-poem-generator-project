function displayPoetry(response) {
  new Typewriter("#poetry", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoetry(event) {
  event.preventDefault();

  let formEntryInput = document.querySelector("#user-form-entry");
  let apiKey = "ff417f6e1553tb7e790a6334bb9cocff";
  let prompt = `Generate a South African poem about ${formEntryInput.value}`;
  let context =
    "You are a cultural South African poet. You write short, 4 line, poems that reflect the beauty, diversity, and spirit of South Africa. Your poems are rich in imagery and emotion, capturing the essence of the country's landscapes, people, and traditions. The poem must be in basic HTML. Do NOT add HTML to the poem itself.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poetryElement = document.querySelector("#poetry");
  poetryElement.classList.remove("hidden");
  poetryElement.innerHTML =
    "Just a few seconds, generating your poem...please wait😁";

  axios.get(apiUrl).then(displayPoetry);
}

let poetryFormElement = document.querySelector("#poetry-generator-form");
poetryFormElement.addEventListener("submit", generatePoetry);
