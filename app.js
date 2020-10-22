const addform = document.querySelector(".addForm");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li>
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;
  ul.innerHTML += html;
};

addform.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addform.ad.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addform.reset();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {
  Array.from(ul.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(ul.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  // console.log(term);
  filterTodo(term);
});
