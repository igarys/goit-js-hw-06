const listEl = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

let liList = [];

ingredients.forEach((ingredient) => {
    const li = document.createElement("li")
    li.textContent = ingredient;
    li.classList.add('item');
    liList.push(li);
   
   console.log(...liList);
  }
  );
  listEl.append(...liList);

