function addItem(params = {}) {
  const templateEl = document.querySelector("#item-wrapper-template");
  const allItemsWrapperEl = document.querySelector(".all-items-wrapper");

  templateEl.content.querySelector(".item-pic").src = params.image;
  templateEl.content.querySelector(".item-title").textContent = params.title;
  templateEl.content.querySelector(".item-paragraph").textContent =
    params.description;
  templateEl.content.querySelector(".item-link").href = params.url;

  const clone = document.importNode(templateEl.content, true);
  allItemsWrapperEl.appendChild(clone);
}

function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=R0xhbEL0Ahlh81y60QK3Me6gqMvwB2tUMpl2J9pXI-U&&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data["items"].length; i++) {
        const json = {
          image: data.includes.Asset[i].fields.file.url,
          title: data.items[i].fields.titulo,
          description: data.items[i].fields.descripcion,
          url: "https://www.linkedin.com/in/nicolascasmuz/",
        };
        addItem(json);
      }
    });
}

function main() {
  addItem();
}

main();
