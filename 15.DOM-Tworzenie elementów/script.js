//1

let x= document.createElement('div');
x.innerHTML="To jest nowy element";
root.appendChild(x);

//2

const favFruits = ['Jabłko', 'Ananas', 'Banan', 'Liczi', 'Mandarynka', 'Nektarynka', 'Malina'];
const ul = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
  });
document.body.appendChild(ul);

//3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

//4
