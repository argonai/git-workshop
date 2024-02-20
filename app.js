window.onload = function() {
  const loadPlaceholderBtn = document.getElementById('load-placeholder-btn')
  const changePlaceholderBtn = document.getElementById('change-placeholder-btn')
  const removePlaceholderBtn = document.getElementById('delete-placeholder-btn')

  loadPlaceholderBtn.addEventListener('click', () => {
    createPlaceholder()
    loadPlaceholderBtn.disabled = true
    changePlaceholderBtn.disabled = false
    removePlaceholderBtn.disabled = false
  });

  function createPlaceholder() {
    const placeholderImage = document.createElement('img')
    placeholderImage.src = 'https://placehold.co/600x400'
    placeholderImage.alt = 'Placeholder'
    placeholderImage.id = 'placeholder'

    document.getElementById('body').appendChild(placeholderImage)
  }

  changePlaceholderBtn.addEventListener('click', changePlaceholder)
  function changePlaceholder() {
    // https://loremipsum.io/21-of-the-best-placeholder-image-generators/
    const randomX = getRandomArbitrary(200, 600)
    const randomY = getRandomArbitrary(200, 600)
    
    const sources = [
      `https://placehold.co/${randomX}x${randomY}`,
      `https://placebeard.it/${randomX}x${randomY}`
    ]

    const placeholder = document.getElementById('placeholder')
    placeholder.src = getRandomStringFromArray(sources)
  }

  removePlaceholderBtn.addEventListener('click', () => {
    deletePlaceholder()
    loadPlaceholderBtn.disabled = false
    changePlaceholderBtn.disabled = true
    removePlaceholderBtn.disabled = true
  })

  function deletePlaceholder() {
    const placeholder = document.getElementById('placeholder')
    placeholder.remove()
  }

  // Helper functions
  function getRandomArbitrary(min, max) {
    // Stolen from MDN web docs
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  /**
   * 
   * @param {Array<string>} stringArray The original array
   * @returns Returns a random string from a given string array
   */
  function getRandomStringFromArray(stringArray) {
    return stringArray[Math.floor(Math.random() * stringArray.length)]
  }
}

window.onclose = function() {

}
