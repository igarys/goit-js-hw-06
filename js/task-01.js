
const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

for (const item of itemEl) {       
    console.log(`Category: ${item.children[0].innerText}`)
    console.log(`Elements: ${item.children[1].children.length}`)
}




