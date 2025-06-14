function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="generating">Generating a poem for ${instructionsInput.value}...</span>`;
  poemElement.classList.remove("hidden");
  let apiKey = "ff417f6e1553tb7e790a6334bb9cocff";
  let prompt = `You are an intelligent Assistant AI that knows poetry  ${instructionsInput.value}. Provide the recipe in the html format of "<p></p>" with a "<br>" after each line and conclude with a signature "<strong>--SheCodes AI</strong>". Make it five lines.`;
  let context = "Generate four line of a short poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
