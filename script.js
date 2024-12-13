let librat = [
    {
        titulli: "Veriti",
        autori: "Collen Hoover",
        zhanri: "Thriller",
        faqet: 292
        
    },
    {
        titulli: "Vajza e Pirenejve",
        autori: "Kristin Hannah",
        zhanri: "History",
        faqet: 476
    }
];

function gjejLibrin() {

    let teksti = document.getElementById("search").value;
    
    let rezultati = document.getElementById("rezultati");
    let uGjet = false;
    
    
    for(let i = 0; i < librat.length; i++) {
        
        if(librat[i].titulli.includes(teksti)) {
            
            rezultati.innerHTML += "<div class='libri'>" +
                "<h3>Titulli: " + librat[i].titulli + "</h3>" +
                "<p>Autori: " + librat[i].autori + "</p>" +
                "<p>Zhanri: " + librat[i].zhanri + "</p>" +
                "<p>Numri i faqeve: " + librat[i].faqet + "</p>" +
                "</div>"; 
                uGjet = true;
                break;
        }
    }
if (!uGjet) {
        rezultati.innerHTML = "Libri nuk u gjet";
}
}