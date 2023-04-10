import ramenBowlSrc from "./images/ramenBowl.png";

export function printHome() {
  const content = document.querySelector(".content");
  const intro = document.createElement("div");
  const description = document.createElement("div");
  const title = document.createElement("div");
  const ramenImg = new Image();
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  intro.classList.add("intro");
  description.classList.add("description");
  title.classList.add("text");

  ramenImg.src = ramenBowlSrc;
  p1.innerHTML =
    "If you're sick of cheap instant noodles plaguing the market with it's decent-at-best flavor, and want to try some <i>real</i> ramen, then you've come to the right place!";
  p2.innerHTML =
    "<b>Oishi Ramen</b> is regarded as the best ramen restaurant in Egypt, known for it's rich flavoring and cheap prices, it is absolutely a joy to eat here! We will definitely guarantee you enjoy your visit here, and you'll walk out with a wide smile and a full stomach!";

  title.textContent = "Oishi Ramen";

  intro.appendChild(title);
  intro.appendChild(ramenImg);
  description.appendChild(p1);
  description.appendChild(p2);
  content.appendChild(intro);
  content.appendChild(description);
}
