// then chaining title olish uchun ishlatildi

const list = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    if (!res.ok) throw new Error("Could not find information");
    return res.json();
  })
  .then((data) => {
    data.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      list.appendChild(listItem);
    });
  })
  .catch((err) => {
    const listItem = document.createElement("li");
    listItem.textContent = err.message;
    list.appendChild(listItem);
    console.log(err.message);
  });

// acynxrone awaiting image olish uchun ishlatildi
const images = document.querySelector(".images");
const getImages = async () => {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!res1.ok) throw new Error("Could not load information");
    return res1.json();
  } catch (err) {
    console.log(err.message);
    const list1 = document.createElement("li");
    list1.textContent = err.message;
    images.appendChild(list1);
  }
};
getImages().then((data) => {
  data.map((item) => {
    const imageUrl = URL.item;
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    document.body.appendChild(imgElement);
  });
});

// finished
