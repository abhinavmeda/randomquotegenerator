async function change_text(){
    
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const author = data.author;
    const quote = data.content;
    console.log(quote);
    document.querySelector("#author").innerHTML = author;
    document.querySelector("#content").innerHTML = quote;
    
    console.log("Button was clicked!");
}


    




