(function () {
    if (window.location.hostname !== "xkcd.com") return;
  
    const floatingDiv = document.createElement("div");
    floatingDiv.id = "xkcd-navigator";
  
    const prevButton = document.createElement("button");
    prevButton.id = "prevButton";
    prevButton.textContent = "Previous";
  
    const nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.textContent = "Next";
  
    floatingDiv.appendChild(prevButton);
    floatingDiv.appendChild(nextButton);
  
    document.body.appendChild(floatingDiv);
  
    const prevLink = document.querySelector('a[rel="prev"]');
    const nextLink = document.querySelector('a[rel="next"]');
  
    if (prevLink) {
      prevButton.addEventListener("click", () => {
        window.location.href = prevLink.href;
      });
    } else {
      prevButton.disabled = true;
    }
  
    if (nextLink) {
      nextButton.addEventListener("click", () => {
        window.location.href = nextLink.href;
      });
    } else {
      nextButton.disabled = true;
    }
  
    const comicDiv = document.querySelector("#comic");
    const comicImg = comicDiv && comicDiv.querySelector("img");
    const lowerComicNav = document.querySelectorAll(".comicNav")[1];

    if (comicImg && comicImg.title) {
      const titleDiv = document.createElement("div");
      titleDiv.id = "xkcd-title";
      titleDiv.textContent = comicImg.title;
  
      if (lowerComicNav)
        lowerComicNav.insertBefore(titleDiv, lowerComicNav.firstChild);
      else 
        comicImg.insertAdjacentElement("afterend", titleDiv);
    }
  })();
  