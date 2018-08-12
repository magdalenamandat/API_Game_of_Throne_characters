const CharacterInfo = function() {
  this.element = null;
}

CharacterInfo.prototype.displayInfo = function (characters, element) {
  element.innerHTML= " "
  this.element = element;
  characters.forEach((character) => {
    this.setName(character);
    this.setTitles(character);

  });
};


CharacterInfo.prototype.setName = function (character) {
  const characterName = document.createElement('h4');
  characterName.textContent = `Character name: ${character.name}`;
  this.element.appendChild(characterName);
};


CharacterInfo.prototype.setTitles = function (character) {
  if(character.titles.length != 0) {
    const titles = document.createElement('p')
    titles.textContent = "Titles: "
    this.element.appendChild(titles);
    const titleList = document.createElement("ul");
    for (title of character.titles) {
      const titlename = document.createElement("li");
      titlename.textContent = title;
      titleList.appendChild(titlename);
      this.element.appendChild(titleList);
    }
  }
};




module.exports = CharacterInfo;
