/*jslint es6 */
fetch('<URL_do_arquivo_JSON>')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.row.ps-5');
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('col-sm-3', 'card', 'text-center');
      
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      card.appendChild(img);
      
      const title = document.createElement('h3');
      title.textContent = product.name;
      card.appendChild(title);
      
      const price = document.createElement('p');
      price.textContent = `R$ ${product.price}`;
      card.appendChild(price);
      
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-success', 'rounded');
      button.textContent = 'Comprar';
      
      // Adicionando o link para o WhatsApp
      button.addEventListener('click', () => {
        window.location.href = `https://wa.me/5511999279294?text=Olá! Gostaria de comprar o produto: ${product.name} - Preço: R$ ${product.price}`;
      });
      
      card.appendChild(button);
      
      container.appendChild(card);
    });
  });