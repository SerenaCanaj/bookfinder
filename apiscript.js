
async function getBookData() {

    let teksti = document.getElementById("search").value;
    let rezultati = document.getElementById("rezultati");

    var response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + teksti);
    var bookData = await response.json();
    console.log(bookData);

    const titulli = bookData.items[0].volumeInfo.title;
    const description = bookData.items[0].volumeInfo.description;
    const authors = bookData.items[0].volumeInfo.authors;

    console.log(titulli);
    console.log(description);
    console.log(authors);

                rezultati.innerHTML += "<div class='libri'>" +
                "<h3>Titulli: " + titulli + "</h3>" +
                "<p>Autori: " + authors[0] + "</p>" +
                "<p>Description : " + description + "</p>" +
                "</div>"; 

        
                  
        
}