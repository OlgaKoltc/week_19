class Cat {
    constructor (byname, breed, gender, feed) {
        this.byname = byname;
        this.breed = breed;
        this.gender = gender;
        this.feed = feed;
    }
}
const btn1 = document.querySelector('#enter').addEventListener('click', newObject);
const btn2 = document.querySelector('#ok').addEventListener('click', addCat);

 function addCat() {
  let myCat = new Cat();
    myCat.byname = document.querySelector('#byname').value;
    myCat.breed = document.querySelector('#breed').value;
    myCat.gender = document.querySelector('input[name="sex"]:checked').nextElementSibling.textContent;
   
    const feedChecked = Array.from(document.querySelectorAll('input[name="feed"]:checked'));
    const feed = feedChecked.map((item) => item.nextElementSibling.textContent);
    myCat.feed = feed;
   
    console.log(myCat);
} 

function newObject(event) {
    event.preventDefault()
}