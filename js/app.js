async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("response is not ok");
    }
    const data = await res.json();
    const limitedData = data.slice(0, 6);

    const productList = document.querySelector(".product-list");
    const productBox = document.querySelector(".product-box");
    const showAllBtn = document.querySelector(".showAll-btn");


    showAllBtn.addEventListener("click", () => {
      productBox.classList.add("container-fluid");

      const showAllRow = document.createElement("div");
      showAllRow.classList.add("row")
      productBox.innerHTML = "";
      productBox.appendChild(showAllRow);
      

      limitedData.forEach((product) => {

        const Container = document.createElement("div");
        const card = document.createElement("div");
        Container.classList.add("col-12", "card-containerr");
        card.classList.add("card", "d-flex","flex-column" ,"flex-lg-row")
        Container.appendChild(card);
        showAllRow.appendChild(Container);

        const cardImg = document.createElement("img");
        cardImg.src = product.image;
        cardImg.classList.add("card-img-top");
        card.appendChild(cardImg);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "mt-4");
        card.appendChild(cardBody);

        const cardTitle = document.createElement("h4");
        cardTitle.innerHTML = product.title;
        cardTitle.classList.add("card-title")
        cardBody.appendChild(cardTitle);

        const price = document.createElement("h5");
        price.innerHTML = "* price:" + " " + product.price + "$";
        price.classList.add("price");
        cardBody.appendChild(price);

        const description = document.createElement("p");
        description.innerHTML = product.description;
        cardBody.appendChild(description);

        const category = document.createElement("p");
        category.innerHTML = product.category;
        category.classList.add("category");
        cardBody.appendChild(category);

        const buyBtn = document.createElement("a");
        buyBtn.innerHTML = "Add to card";
        buyBtn.classList.add("card-btn");
        buyBtn.addEventListener("click", () => {
          alert(`${product.title} added to yuor Order`);
        })
        cardBody.appendChild(buyBtn);
      });
    });

    limitedData.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = product.title.slice(0, 18) + "...";

      productList.appendChild(listItem);

      listItem.classList.add("product-title");

      listItem.addEventListener("click", () => {
        productBox.innerHTML = "";
        productBox.classList.add("d-flex", "flex-lg-row", "flex-md-column","flex-sm-column", "text-lg-start", "text-md-center");
        const cardImg = document.createElement("img");
        cardImg.src = product.image;
        cardImg.classList.add("img-showing-self");
        productBox.appendChild(cardImg);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        productBox.appendChild(cardBody);

        const cardTitle = document.createElement("h2");
        cardTitle.innerHTML = product.title;
        cardBody.appendChild(cardTitle);

        const price = document.createElement("h5");
        price.innerHTML = "* price:" + " " + product.price + "$";
        price.classList.add("price");
        cardBody.appendChild(price);

        const description = document.createElement("p");
        description.innerHTML = product.description;
        cardBody.appendChild(description);

        const category = document.createElement("p");
        category.innerHTML = product.category;
        category.classList.add("category");
        cardBody.appendChild(category);

        const buyBtn = document.createElement("button");
        buyBtn.innerHTML = "Add to card";
        buyBtn.classList.add("card-btn");
        buyBtn.addEventListener("click", () => {
          alert(`${product.title} added to yuor Order`);
        })
        cardBody.appendChild(buyBtn);
      });
    });
  } catch (err) {
    console.error("error:", err);
  }
}

getData();
