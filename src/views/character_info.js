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
    const titles = document.createElement('h5')
    titles.textContent = "Titles: "
    this.element.appendChild(titles);
     const titleList = document.createElement("p");
     for (title of character.titles) {
      const titlename = document.createElement("p");
      titlename.textContent = title;
      titleList.appendChild(titlename);
      this.element.appendChild(titleList);
    }
  }
};




module.exports = CharacterInfo;
