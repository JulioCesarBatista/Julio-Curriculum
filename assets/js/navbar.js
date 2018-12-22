const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.filtros.mobile');

menuHamburguer.onclick = () => {
  menuHamburguer.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}


// const filtrosMobile = document.querySelector('.filtros.mobile');
// const listaFiltrosMobile = docuemnt.querySelectorAll ('.filtros.mobile a');

// for (const filtro of listaFiltrosMobile){
//     filtro.onclick = () => {
//       filtrosMobile.classlist.remove('ativo');
//     }
// }