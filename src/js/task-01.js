const categoriesListEl = document.querySelector('#categories');

const array = categoriesListEl.children;

console.log('Number of categories:', array.length);




// const countChildrenEl = array => {
//        return array.forEach(element=> {
//         console.log('Category:', (element.querySelector('h2')).textContent);
//         const elementItems = element.querySelector('ul').children;
//         console.log('Elements:', elementItems.length);
//     });
// };
// countChildrenEl(array);

for (const element of array) {
    console.log('Category:', (element.querySelector('h2')).textContent);
    const elementItems = element.querySelector('ul').children;
    console.log('Elements:', elementItems.length);
    
}
  
