const main = JSON.parse(window.localStorage.product).book;
const limitPage = 9;
let sp = main;
let totalPage = 0;
let item_eachPage = [];
let currentPage = 1;

const type_choices = document.getElementsByClassName("type");
const price_choices = document.getElementsByClassName("price");
const backPg = document.querySelector(".back");
const fowardPg = document.querySelector(".forward");
const pagination_numbers = document.getElementById("pagination-numbers");
const item_container = document.querySelector(".item-container");
const box = document.getElementsByClassName("box")[0];
const search = document.getElementById("search_bar");

const renderItem = (products) => {
  const output = products.map(item => `
    <div class="item">
      <a href="chi-tiet.html#${item.id}" class="item-img"><img src="${item.image}"/></a>
      <p class="item-name">${item.title}</p>
      <p class="book-author">${item.author}</p>
      <p class="item-price">${item.price}.000đ</p>
      <button class="buy-btn" data-id="${item.id}">
        <i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
      </button>
    </div>
  `).join('');
  item_container.innerHTML = output;
};

const renderPage = (products) => {
  totalPage = Math.ceil(products.length / limitPage);
  const output = Array.from({ length: totalPage }, (_, i) => 
    `<div onclick="handlePageNumber(${i + 1})" class="movepage-${i + 1}">${i + 1}</div>`
  ).join('');
  pagination_numbers.innerHTML = output;
};

const handlePageNumber = (num) => {
  currentPage = num;
  item_eachPage = sp.slice((currentPage - 1) * limitPage, currentPage * limitPage);
  renderItem(item_eachPage);
  getbuttons(cart);

  document.querySelectorAll("#pagination-numbers div").forEach(pageIndicator => {
    pageIndicator.classList.remove("active");
  });
  document.querySelector(`.movepage-${currentPage}`).classList.add("active");
};

const rendermainPage = (products) => {
  totalPage = Math.ceil(products.length / limitPage);
  item_eachPage = products.slice(0, limitPage);
  renderItem(item_eachPage);
  renderPage(products);
};

const filter = () => {
  item_eachPage = [];
  currentPage = 1;
  totalPage = 0;
  let products = [];

  const savingtype_choices = Array.from(type_choices).filter(choice => choice.checked).map(choice => choice.value);
  const savingprice_choices = Array.from(price_choices).filter(choice => choice.checked).map(choice => choice.value);

  const type_clear = (a) => {
    return savingtype_choices.flatMap(choice => a.filter(ele => ele.type.includes(choice)));
  };

  const price_clear = (a) => {
    return savingprice_choices.flatMap(choice => {
      switch (choice) {
        case "1": return ele.price <= 100;
        case "2": return ele.price <= 300 && ele.price >= 100;
        case "3": return ele.price <= 500 && ele.price >= 300;
        case "4": return ele.price >= 500;
      }
    });
  };

  if (savingtype_choices.length && !savingprice_choices.length) {
    products = type_clear(main);
  } else if (!savingtype_choices.length && savingprice_choices.length) {
    products = price_clear(main);
  } else if (savingtype_choices.length && savingprice_choices.length) {
    products = price_clear(type_clear(main));
  } else {
    rendermainPage(sp);
    getbuttons(cart);
    return;
  }
  rendermainPage(products);
  getbuttons(cart);
};

document.addEventListener("DOMContentLoaded", () => {
  cart = setupAPP(cart);
  cartLogic(cart);
  rendermainPage(sp);
  getbuttons(cart);
  backPg.addEventListener("click", () => {
    if (currentPage > 1) handlePageNumber(--currentPage);
  });
  fowardPg.addEventListener("click", () => {
    if (currentPage < totalPage) handlePageNumber(++currentPage);
  });
});

window.addEventListener("load", () => {
  sp.forEach(({ id, image, title, price }) => {
    const card = document.createElement("a");
    card.innerHTML = `
      <img src="${image}">
      <div class="content1">
        <h6>${title}</h6>
        <p>${price}.000đ</p>
      </div>`;
    card.href = `chi-tiet.html#${id}`;
    box.appendChild(card);
  });
});

search.addEventListener("keyup", () => {
  const filter = search.value.toUpperCase();
  const a = box.getElementsByTagName("a");
  Array.from(a).forEach(item => {
    const text = item.querySelector(".content1 h6").textContent || item.querySelector(".content1 h6").innerText;
    item.style.display = text.toUpperCase().includes(filter) ? "" : "none";
  });
  box.style.visibility = search.value ? "visible" : "hidden";
  box.style.opacity = search.value ? 1 : 0;
});
