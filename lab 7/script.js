// script.js
document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.getElementById('home-link');
  const catalogLink = document.getElementById('catalog-link');
  const categoryList = document.getElementById('category-list');
  const content = document.getElementById('content');
  const themeSwitcher = document.getElementById('theme-switcher');

  themeSwitcher.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
      themeSwitcher.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
  });

  function fetchCategories() {
      fetch('categories.json')
          .then(response => response.json())
          .then(data => {
              categoryList.innerHTML = '';

              data.forEach(category => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.classList.add('category-link');
                  link.addEventListener('click', () => fetchProducts(category.shortname));

                  const img = document.createElement('img');
                  img.src = `https://place-hold.it/150x150?text=${category.name}`;
                  img.alt = category.name;

                  link.appendChild(img);
                  const span = document.createElement('span');
                  span.textContent = category.name;
                  link.appendChild(span);

                  categoryList.appendChild(link);
              });
          })
          .catch(error => console.error('Error:', error));
  }

  function fetchProducts(categoryShortname) {
      fetch(`${categoryShortname}.json`)
          .then(response => response.json())
          .then(data => {
              content.innerHTML = '';
              const title = document.createElement('h2');
              title.textContent = categoryShortname.charAt(0).toUpperCase() + categoryShortname.slice(1);
              content.appendChild(title);
              data.forEach(product => {
                  const productDiv = document.createElement('div');
                  productDiv.classList.add('product');
                  const image = document.createElement('img');
                  image.src = 'https://place-hold.it/200x200';
                  const name = document.createElement('h3');
                  name.textContent = product.name;
                  const description = document.createElement('p');
                  description.textContent = product.description;
                  const price = document.createElement('p');
                  price.textContent = 'Price: ' + product.price + ' UAH';
                  productDiv.appendChild(image);
                  productDiv.appendChild(name);
                  productDiv.appendChild(description);
                  productDiv.appendChild(price);
                  content.appendChild(productDiv);
              });
          })
          .catch(error => console.error('Error:', error));
  }

  homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      categoryList.innerHTML = '';
      content.innerHTML = '';
      fetchCategories();
  });

  catalogLink.addEventListener('click', (e) => {
      e.preventDefault();
      categoryList.innerHTML = '';
      content.innerHTML = '';
      fetchCategories();
  });

  fetchCategories();
});
