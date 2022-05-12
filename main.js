let btn = document.querySelector("button");
btn.addEventListener("click", getISBN);
document.querySelector("h2").innerText += localStorage.getItem("books");

function getISBN() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  let url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }
      //put title in local storage
    //   let books = localStorage.getItem("books") + " ; " + data.title;
    //   localStorage.setItem("books", books);
      document.querySelector("h2").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
