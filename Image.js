function createImage() {
    let abc = document.getElementById("bc");
    let image = document.createElement("img");

    image.setAttribute("src", "https://i.pinimg.com/736x/dc/4a/0a/dc4a0a431feee2228bd21eccf35539b4.jpg  ");
    image.setAttribute("alt", "sorry cant be load")
    abc.after(image)
}