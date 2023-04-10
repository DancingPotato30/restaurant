import MisoSrc from "./images/miso.jpg";
import ModernSrc from "./images/modern.jpg";
import ShioSrc from "./images/shio.jpg";
import ShoyuSrc from "./images/shoyu.jpg";
import TonkotsuSrc from "./images/tonkotsu.jpg";
import TsukemenSrc from "./images/Tsukemen.jpg";
import VeganSrc from "./images/vegan.jpg";

export function printMenu() {
  const menu = document.createElement("div");

  const misoInfo = document.createElement("div");
  const modernInfo = document.createElement("div");
  const shioInfo = document.createElement("div");
  const shoyuInfo = document.createElement("div");
  const tonkotsuInfo = document.createElement("div");
  const tsukemenInfo = document.createElement("div");
  const veganInfo = document.createElement("div");

  const modernName = document.createElement("div");
  const modernIngr = document.createElement("div");
  const modernPrice = document.createElement("div");

  const shioName = document.createElement("div");
  const shioIngr = document.createElement("div");
  const shioPrice = document.createElement("div");

  const shoyuName = document.createElement("div");
  const shoyuIngr = document.createElement("div");
  const shoyuPrice = document.createElement("div");

  const tonkotsuName = document.createElement("div");
  const tonkotsuIngr = document.createElement("div");
  const tonkotsuPrice = document.createElement("div");

  const tsukemenName = document.createElement("div");
  const tsukemenIngr = document.createElement("div");
  const tsukemenPrice = document.createElement("div");

  const veganName = document.createElement("div");
  const veganIngr = document.createElement("div");
  const veganPrice = document.createElement("div");

  const misoName = document.createElement("div");
  const misoIngr = document.createElement("div");
  const misoPrice = document.createElement("div");

  const misoImg = new Image();
  const modernImg = new Image();
  const shioImg = new Image();
  const shoyuImg = new Image();
  const tonkotsuImg = new Image();
  const tsukemenImg = new Image();
  const veganImg = new Image();

  const priceArray = [
    misoPrice,
    tonkotsuPrice,
    tsukemenPrice,
    modernPrice,
    veganPrice,
    shioPrice,
    shoyuPrice,
  ];
  const infoArray = [
    misoInfo,
    tonkotsuInfo,
    tsukemenInfo,
    modernInfo,
    veganInfo,
    shioInfo,
    shoyuInfo,
  ];
  const nameArray = [
    misoName,
    tonkotsuName,
    tsukemenName,
    modernName,
    veganName,
    shioName,
    shoyuName,
  ];
  const ingrArray = [
    misoIngr,
    tonkotsuIngr,
    tsukemenIngr,
    modernInfo,
    veganIngr,
    shioIngr,
    shoyuIngr,
  ];

  menu.classList.add("menuGrid");
  infoArray.forEach((item) => {
    item.classList.add("info");
  });
  nameArray.forEach((item) => {
    item.classList.add("name");
  });
  priceArray.forEach((item) => {
    item.classList.add("price");
  });
  ingrArray.forEach((item) => {
    item.classList.add("ingredients");
  });

  misoImg.src = MisoSrc;
  tonkotsuImg.src = TonkotsuSrc;
  tsukemenImg.src = TsukemenSrc;
  modernImg.src = ModernSrc;
  veganImg.src = VeganSrc;
  shioImg.src = ShioSrc;
  shoyuImg.src = ShoyuSrc;

  misoImg.setAttribute("alt", "Miso Ramen");
  tonkotsuImg.setAttribute("alt", "Tonkotsu Ramen");
  tsukemenImg.setAttribute("alt", "Tsukemen Ramen");
  modernImg.setAttribute("alt", "Modern Ramen");
  veganImg.setAttribute("alt", "Vegan Ramen");
  shioImg.setAttribute("alt", "Shio Ramen");
  shoyuImg.setAttribute("alt", "Shoyu Ramen");

  misoName.textContent = "Miso Ramen";
  tonkotsuName.textContent = "Tonkotsu Ramen";
  tsukemenName.textContent = "Tsukemen Ramen";
  modernName.textContent = "Modern Ramen";
  veganName.textContent = "Vegan Ramen";
  shioName.textContent = "Shio Ramen";
  shoyuName.textContent = "Shoyu Ramen";

  misoIngr.textContent =
    "Miso noodles, Doubanjiang (spicy or non-spicy bean paste), Sesame seeds and sesame oil, chicken broth, White pepper powder";
  tonkotsuIngr.textContent = "Broth, Noodles, Pork, Egg, and Tare.";
  tsukemenIngr.textContent =
    "Soup broth, Pork belly, Ginger, Garlic, Shiitake mushrooms, Shimeji mushrooms, Green onions, Roasted sesame oil, Doubanjiang, Katsuobushi";
  modernIngr.textContent =
    "Sweet potato, White miso paste, Toasted sesame oil, Sriracha, Vegetables, Eggs, Soba Noodles, Portobello mushrooms, Gluten-free tamari, Steamed greens (broccoli, broccoli rabe, kale, etc.) or packed raw spinach, Black sesame seeds (optional), Minced fresh red Thai chili (optional)";
  veganIngr.textContent =
    "Onion, Garlic, Ginger (optional), White miso paste, Vegetable stock,  Soy sauce or tamari, Tahini,  Ramen noodles";
  shioIngr.textContent = `Pork Chashu,
  Tori Hamu Japanese Chicken Ham,
  Miso Egg,
  Menma,
  Naruto,
  Vegetables, 
  Nori (seaweed) sheet`;
  shoyuIngr.textContent = `Miso noodles, Doubanjiang (spicy or non-spicy bean paste), Sesame seeds and sesame oil, chicken broth, White pepper powder`;

  priceArray.forEach((item) => {
    item.textContent = "$9.80";
  });

  misoInfo.appendChild(misoName);
  misoInfo.appendChild(misoIngr);
  misoInfo.appendChild(misoPrice);

  tonkotsuInfo.appendChild(tonkotsuName);
  tonkotsuInfo.appendChild(tonkotsuIngr);
  tonkotsuInfo.appendChild(tonkotsuPrice);

  tsukemenInfo.appendChild(tsukemenName);
  tsukemenInfo.appendChild(tsukemenIngr);
  tsukemenInfo.appendChild(tsukemenPrice);

  modernInfo.appendChild(modernName);
  modernInfo.appendChild(modernIngr);
  modernInfo.appendChild(modernPrice);

  veganInfo.appendChild(veganName);
  veganInfo.appendChild(veganIngr);
  veganInfo.appendChild(veganPrice);

  shioInfo.appendChild(shioName);
  shioInfo.appendChild(shioIngr);
  shioInfo.appendChild(shioPrice);

  shoyuInfo.appendChild(shoyuName);
  shoyuInfo.appendChild(shoyuIngr);
  shoyuInfo.appendChild(shoyuPrice);

  menu.appendChild(misoImg);
  menu.appendChild(misoInfo);
  menu.appendChild(tonkotsuImg);
  menu.appendChild(tonkotsuInfo);
  menu.appendChild(tsukemenImg);
  menu.appendChild(tsukemenInfo);
  menu.appendChild(modernImg);
  menu.appendChild(modernInfo);
  menu.appendChild(veganImg);
  menu.appendChild(veganInfo);
  menu.appendChild(shioImg);
  menu.appendChild(shioInfo);
  menu.appendChild(shoyuImg);
  menu.appendChild(shoyuInfo);

  document.querySelector(".content").appendChild(menu);
}
