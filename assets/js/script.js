function isMobileDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}if(window.addEventListener("load",function(){document.querySelector(".loader-wrapper").style.display="none"}),!isMobileDevice())var rellax=new Rellax(".rellax",{breakpoints:[576,768,1201]});document.querySelector("#menu").addEventListener("click",()=>{document.querySelector("#sidebar").classList.toggle("active")});const card=document.querySelector("#card"),titulo=document.querySelector("#tituloCard"),descricao=document.querySelector("#descricaoCard");let imagemAtual=1;const totalImagens=4;function trocarImagem(){card.classList.remove(`card-background-${imagemAtual}`),imagemAtual=imagemAtual%totalImagens+1,card.classList.add(`card-background-${imagemAtual}`),trocarTitulo(imagemAtual),trocarDescricao(imagemAtual)}function trocarTitulo(e){1==e?titulo.innerHTML="EA Sports FC 24":2==e?titulo.innerHTML="Pokémon TCG Pocket":3==e?titulo.innerHTML="Street Fighter 6":4==e&&(titulo.innerHTML="Brawl Stars")}function trocarDescricao(e){1==e?descricao.innerHTML="Viva a emoção do futebol em sua glória máxima com gráficos de última geração e jogabilidade imersiva.":2==e?descricao.innerHTML="Viva a emoção de ser um treinador! Com Pokémon TCG Pocket, a diversão está em todos os lugares.":3==e?descricao.innerHTML="O retorno do rei da luta! Street Fighter 6 eleva o gênero para uma nova era de intensidade e habilidade. Entre na arena e faça história!":4==e&&(descricao.innerHTML="Entre na arena e torne-se uma lenda! Brawl Stars oferece ação frenética e personagens cativantes para uma experiência de jogo inigualável.")}Fancybox.bind("[data-fancybox]",{baseClass:"my-fancybox",mobile:{autoFocus:!1,clickContent:function(e,a){return"image"===e.type?"close":"next"}},youtube:{controls:1,showinfo:0,rel:0,autoplay:1,loop:1,mute:0,enablejsapi:1}}),window.addEventListener("scroll",function(){document.querySelector("#botaoRetornar").classList.toggle("activeScroll",window.scrollY>500)});

const images = [
    "assets/img/header/card/streetfighter6-card.jpg",
    "assets/img/header/card/brawlstars-card.jpg",
    "assets/img/header/card/pokemongo-card.jpg",
    "assets/img/header/card/eafc24-card.avif"
];
let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const slider = document.getElementById("cardChaveamento");
    slider.style.backgroundImage = `url('${images[currentIndex]}')`;
}

window.onload = function () {
    setInterval(changeBackgroundImage, 3000); // Altera a imagem de fundo a cada 10 segundos
};
