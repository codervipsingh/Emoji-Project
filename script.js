const creatLi = (emoji) => {

    //// these are childrens of li here...
    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emoji');
    emojiDiv.innerHTML=emoji.emoji;

    const aliasesDiv = document.createElement('div');
    aliasesDiv.classList.add('grinning');
    aliasesDiv.innerHTML =emoji.aliases.join(', ');

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML =emoji.description;

        // parent li here...

  const li = document.createElement('li');
  li.append(emojiDiv, aliasesDiv, description);
  return li; 
};


const emojiUl = document.getElementById('emojiUl');

const renderEmoji = (emojiArray) =>{
    emojiUl.innerHTML = "";
    emojiArray.forEach((emoji)=>{
        const li = creatLi(emoji);
        emojiUl.append(li);
    });
};
renderEmoji(emojiList);
// const li =creatLi();
// emojiUl.append(li);
//for intilisation  data
// emojiList.forEach(emoji => {
//     const li =creatLi(emoji);
//     emojiUl.append(li);
// });


const emojiSearch = document.getElementById('typingBox');
emojiSearch.addEventListener('keyup', (e) =>{
    const searchKey = e.target.value;
    const filterList = emojiList.filter((emoji)=>{
   
    if(emoji.description.toLowerCase().includes(searchKey.toLowerCase())){
        //consider element
        return true;
    }
      return false; 

   });
   emojiUl.innerHTML = "";
   filterList.forEach((emoji)=>{
    const li = creatLi(emoji);
    emojiUl.append(li);
   });
});
