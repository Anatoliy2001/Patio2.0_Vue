<template>
  <HeaderPage></HeaderPage>
  <ModalPage></ModalPage>
  <main><MainPage></MainPage></main>
  <FooterPage></FooterPage>
</template>

<script>
import HeaderPage from './components/header-page.vue'
import MainPage from './components/main-page.vue'
import FooterPage from './components/footer-page.vue'
import ModalPage from './components/modal-order.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
    ModalPage
  }
}
</script>

<style>
* {
   margin: 0;
   padding: 0;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
:root {
   --main-w: 10vmin;
   --maxim-a: 9999999999; 
}
p {
   margin: 0;
   font-weight: 600;

}
.cer {
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
}
h5 {
   font-weight: 700;
   text-transform: uppercase;
   font-size: 1.35vmin;
   letter-spacing: 0.55vmin;
}
h1 {
   margin: 7vmin 0vmin;
   font-size: 7.2vmin;
   color: rgb(15, 55, 0);
}
form {
   width: 100%;
   margin-top: 2vmin;
   }
.all-buttons {
   border-radius: 1.2vmin;
   color: #fff;
   border: none;
   padding: 1vmin;
   font-weight: 500;
   margin: 1.5vmin 1.5vmin;
}
.add-button {
   background-color: rgb(15, 55, 0);
}
.remove-button {
   background-color: rgb(245, 48, 48);
}
.slider-wrapper {
   width: 100%;
   height: 100%;
   position: fixed;
   display: flex;
   top: 0;
   left: 0;
   background-color: #00000046;
   z-index: var(--maxim-a);


}
.tapController {
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: 99999999; 
}
.slider-wrapper img {
   width: auto;
   height: 80%;
   border-radius: 4vmin;
margin: auto;
background-position: center center;
  background-repeat: no-repeat;
  object-fit:cover;
z-index: 999999999;
}
.text-wrap {
   height: 22vmin;
   width: 100%;
   margin: 0 1.4vmin;
   font-weight: bold;
text-align: start;
overflow-y: auto;
margin-top: 20vmin;
}
.text-wrap::-webkit-scrollbar {
   width: 12px;              
 }
 .text-wrap::-webkit-scrollbar-track {
   background: transparent;       
 }
 .text-wrap::-webkit-scrollbar-thumb {
   background-color: rgb(0, 0, 0);  
   border-radius: 20px;     
   border: 3px solid rgb(255, 255, 255); 
 }

.text-wrap h6 {
   font-weight: 600;
   font-size: 1.85vmin;
}
.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
}
.box{
	position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
}
.input-container{
	position:relative;
	margin: 3vmin 0vmin;
   border-right: 0.1vmin solid #413e3e;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
	font-size:1.7vmin;
	color:#000000;	
   pointer-events:none;
	transition: all 0.2s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:1.8vmin;
  color:#000000;
}
.input-container input:focus{ 
border-right:none;
 border:none;	
 outline:none;
 border-bottom:1px solid #d65749;	

}


.cart-body {
   width: auto;
   height: auto;
   margin-top: 2vmin;
 
}
.cart-body .btn {
   font-size: 2vmin;
   border-radius: 1.5vmin;
}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/

.primary-nav-trigger .menu-icon
{
    display: inline-block;
    position: absolute;
    top: 20%;
    right: 3%;
    width: 5vmax;
    height: .2vmax;
    background: black;
    transition: .3s;
}
.primary-nav-trigger .menu-icon::before,
.primary-nav-trigger .menu-icon::after
{
    display: inline-block;
    content: '';
    position: absolute;
    top: 2.5vmin;
    width: 100%;
    height: 100%;
    background-color: black;
    border: 0px;
    transition: .3s ease;
}
.text-wrap div {
   display: flex;
   text-align: start;
   font-size: 2.2vmin;
   width: auto;
   height: auto;
   margin: 2.5vmin 0;
   justify-content: center;
   align-items: center;
}
.minus {
   margin: 0 2vmin;
   font-size: 3.7vmin;
   background-color: transparent;
   border: transparent;
}
.thx {
   width: 75vmin;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   background-color: #fff;
   color: rgb(75, 151, 0);
}
.plus {
   margin: 0 2vmin;
   font-size: 3.7vmin;
   background-color: transparent;
   border: transparent;
}
.text-wrap div img {
   width: 20%;
  height: 6.5vmin;
  background-position: center center;
  background-repeat: no-repeat;
  object-fit:cover;
}
.navigate {
   width:57vw;
   height: 101vh;
   position: fixed;
   right: -0.1%;
  
   transition: .5s;
   z-index: 19999999999;
   background-color: #000000;
}
.mainer {
   width: auto;
   margin: auto;
   text-align: center;
   padding: 9vmin 0;
}
.main1 {
   margin: 6vmin auto;
   text-align: center;
   color: #fff;
}
.main2 {
   margin: 6vmin 0;
   color: #fff;
}
.main3 {
   margin: 6vmin 0;
   color: #fff;
}
.main4 {
   color: #fff;
}
.main5 {
   color: #ffffff;
   margin-top: 45vmin;
   text-align: center;

}
.card-img-top {
   user-select: none;
 
}
.main5 img {
   width: 6vmin;
   height: auto;
   margin-top: 1vmin;
   margin-left: 1vmin;
}
.main5 > a {
   color:aquamarine;
   text-align: center;
}
.main3 a {
   font-size: 2.2vmax;
   font-weight: 000;
   color: #fff;
   
}
.mainer span {
   font-size: 2.5vmax;
   font-weight: bold;
   line-height: 4vmin;
}
.offnav {
   position: fixed;
   right: -100%;
   top: 0;
   background-color: rgb(15, 55, 0);
   z-index: 9999999999999999999
}
.toper {
   width: 100%;
   height: auto;
   margin-top:1vmin;
   background-color: rgb(15, 55, 0);
}
.toper span {
   font-size: 3.9vmax;
   color: #fff;
}
.rotate .menu-icon{
 right: -100%; 
 transition: .4s;
}



.primary-nav-trigger .menu-icon::before
{
    top: 5vmin;
}
.menu {
   display: none;
   margin:auto;

}

.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-12px;
	font-size:12px;
	
}





/* scrollbar */
::selection {
   background:#ff8a1d;

}
body::-webkit-scrollbar {
   width: 12px;              
 }
 body::-webkit-scrollbar-track {
   background: transparent;       
 }
 body::-webkit-scrollbar-thumb {
   background-color: rgb(0, 0, 0);  
   border-radius: 20px;     
   border: 3px solid rgb(255, 255, 255); 
 }

header {
   width: 100%;
   height: auto;
   background-color: rgb(255, 255, 255);
   display: flex;
   justify-content: space-between;
   position: fixed;
   align-items: center;
   z-index: 209999999999;
   padding: 1.1vmin;
   padding-bottom: 2vmin;
   top: 0;
 
}
header .contacts {
   justify-content: end;
}
header img {
   height: 8vmin;
   filter: contrast(2);
   width: auto;
   background-color: rgb(255, 255, 255);
   margin-left: calc(--main-w / 2);
   user-select: none;
   pointer-events: none;
   margin: 0vmin 1.2vmin;
}
.cart-closer {
   position: fixed;
   top: 5%;
   right:2%;
   z-index: 99999999999;
   border-radius: 50%;
   box-shadow: 0px 5px 40px 11px rgba(0, 0, 0, 0.51);
   transition: .3s;
   cursor: pointer;
}
.lnr-cross {
   transition: .3s;
   font-size: 3.4vmin;
   border-radius: 50%;
   padding: 2vmin;
   color: #fff;
}
.cart-menu {
   width: auto;
   height: auto;
   margin: auto;
   position: relative;
   background-color: #f8f8f8;
   z-index: 99999999999;
   margin: auto;
   padding: 0 4vmin;
   border-radius: 2vmin;
   padding-bottom: 2vmin;
}
.cart-in {
   display: flex;
   align-items: center;

   width: auto;
   height: auto;
    max-height: 80vmin;
   margin: 2vmin 0vmin;
   overflow-y: scroll;
   border-radius: 1vmin;
   
}
.cart-in img {
   height: 6.5vmin;
   width: 6.5vmin;
   border-radius: 1vmin;
   margin: auto 1vmin;
}
.cart-deliner {
   width: auto;
   height: .1vmin;
   background-color: #747374;
   margin: 2vmin 0;
}
form a {
   font-size: 3vmin;
}
.cart-head {
   
   padding-top:3vmin;
   width: auto;
   height: auto;
}
.cart-head h3 {
   font-weight:600;
}


.cart-trigger {
   position: fixed;
   bottom: 5%;
   right: 2%;
   z-index: 1242134;
   border-radius: 50%;
   box-shadow: 0px 5px 40px 11px rgba(34, 60, 80, 0.51);
   transition: .3s;
   cursor: pointer;
}
.cart-trigger:hover {
   transform: scale(1.2);
}
.cart-trigger:hover .lnr-cart {
   color: #000;
   background-color: #fff;
}
.cart-wrapper {
   width: 100%;
   height: 100%;
   z-index: 9999999999;
   background-color: #000000cb;
   position: fixed;
   overflow: hidden;
}

.lnr-cart {
   transition: .3s;
   font-size: 3vmin;
   border-radius: 50%;
   padding: 2vmin;
   color: #fff;
   background-color:rgb(15, 55, 0);
}
.contacts {
   width: 100%;
   float: left;
   height: auto;
   display: flex;
   align-items: center;
   text-align: start;
   margin-right: 1vmin;
  
}
.locate {
   width: auto;
   height: 100%;
   display: flex;
   align-items: center;
}
.locate span {
   margin: 1vmin;
   font-weight: bold;
   font-size: 2.4vmin;

}
.product {
   width: min(33.33%, 45vmin);
   margin: 2vmin auto;
   min-height: 40vmin;
}
.products-name {
   width: 100%;
    height: 90%;
background-color: #f5f5f5;
margin: auto;
text-align: center;

display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
}
.products-name h3 {
   text-transform: uppercase;

   padding: 1vmin;
   color: #000000;
   border-radius: 1.2vmin;
   transition: .3s;
}
.products-class {
   width: 33.3%;
   height: 9vmin;
   transition: .3s;
   display: flex;
   align-items: center;
   justify-content: center;
}

.products-name .products-class:hover {
color: #fff;
background-color: #181818;
}
.router-link-active {
   color: #fff;
background-color: #181818;
}
.router-link-active h3 {
   color: #fff
}
.products-name .products-class:hover h3 {
   color: #fff;
 
   }
.products-catalog {
   width: auto;
   display: flex;
   flex-wrap: wrap;
  
   justify-content:space-around;
   margin: 2vmin auto;
   opacity: 1;

}
/* change catalog */

   .disable {
      display: none;
      opacity: 0;

   }
   .card {
      margin: auto;
      min-height: 40vmin;
   }
.logo {
   display: flex;
} 
.logo p {
   margin-left: 5vmin;
}
main {
   margin: 15vmin 5vmin 0vmin;

 width: auto;
 padding: 1.6vmin;
 height: auto;
 text-align: center;
 background-color: rgb(255, 255, 255);
}
.main-header h3 {
 font-weight: 100;

}
.main-header {
   max-width: 65vw;
   margin: auto;
   text-align: center;
}
.main-products {
   width: 100%;
   height: auto;
   margin: -2vmin auto;
   background-color: rgb(255, 255, 255);
}
.image-wrap {
  width: max(30%, 73vmin);
   height: 30%;
   margin: 5vmin auto;
   display: flex;
   position: relative;
}
.img-text {
   position: absolute;
   bottom: 5%;
   width: auto;
   height: auto;
   margin-left: 5%;
   background-color: #fff;
   padding: 1vmin 2vmin;
   font-size: 1.4vmin;
   border-radius: 1.5vmin;
}
.image-wrap img {
   width: 100%;
   margin: 0vmin 2vmin;
   height: auto;
   user-select: none;
   pointer-events: none;
   border-radius: 5%;

}
.btn {
   border-radius: 0;
}
.product h5 {
   letter-spacing: 0.35vmin;
}
.product p {
   color: #747374;
   font-weight: 400;
}
.btn-dark {
  margin: 1vmin;  
  font-weight: 600;
}
.btn-outline-success {
   font-size: 1.25rem;
   font-weight: 600;
   transition: .3s;
   transform: scale(1);
 }
 .btn-outline-success:hover {
   transform: scale(0.9);
   
 }
.deliner {
   width: 50%;
   height: 0.5vmin;
   background-color: black;
   margin: 6vmin auto;
 
}
.carousel-caption {

}
.carousel-caption h5 {
   color: #000;
   font-size: 1.4vmin;
   letter-spacing: 0.26vmin;
   background-color: #ffffff;
   margin-bottom: 2vmin;
   border-radius: 1.5vmin;
   padding: 1vmin 0.2vmin;
   font-weight: lighter;
}
.locales {
   margin-left: 1.2vmin; 
   width: auto;
   height: 100%;
   font-size: 2vmin;
   font-weight: boldd;
   align-items: center;
   display: flex;
}
.locales span {
   height: 100%;
   font-weight: 600;
}
.locales div {
display: block;
text-align: center;
line-height: 2.2vmin;

}

.followUs {
   display: flex;
   flex-direction: column;
   align-items: center;
   height: auto;
   padding: 2.8vmin 0;
   width: 100%;
   height: auto;
   margin: auto;
 }
 .followUs h1 {
   font-size: 6vmin;
 }
 h1 {
   font-size: 4.8vmin;
   
 }
 .followUs > p {
   padding: 20px 0 50px;
   width: 50vmin;
   font-size: 2.5vmin;
   font-weight: lighter;
 }
 .back {
   width: 75vmin;
   display: flex;
   flex-direction: row;
   justify-content: center;
   height: auto;
   margin-bottom: 4.7vmin;
 }
 .backed {
   flex-direction: column;
   margin-bottom: 0vmin;
 }
 .back > input {
   width: 50%;
   display: block;
   height: calc(2.5rem + 9px);
   padding: 0.375rem 1rem;
   font-size: 1.25rem;
   font-weight: 400;
   line-height: 2;
   color: #000000;
   background-color: #fff;
   border: 1px solid #000000;
   margin-left: 2vmin;
 }

 .back > button {
   
   margin: 0 1.25vmin;
   padding: 0.5rem 1rem;
   font-size: 1.25rem;
   font-weight: 600;
   line-height: 1.5;
   color: #ffffff;
   background-color: #181818;
   border: 1px solid #000000;
 }
 footer {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #000;
   color: #ffffff;
   padding: 30px 0;
   margin: 0;
   min-width: 320px;
 }
 footer > p {
   padding: 10px 0;
   font-size: 2.2vmin;
 }
 footer > p > a {
   color: #ff8a1d;
   text-decoration: none;
   font-size: 2.2vmin;
 }
 .links > a > img {
   width: 5vmin;
 }

.followUs img {
   width: auto;
   height: 100%;
   user-select: none;
   pointer-events: none;
}


.lnr-phone-handset {
   margin: 1vmin;
   font-weight: bold;
   font-size: 2.4vmin;
   margin-top: 1.2vmin;
}


/* slider */

.slider {
   width: 100%;
   z-index: 0;
   margin-top: 9%;
   height: 10%;
   border-radius: 25px;
 
 }
 .slider__bg {
   width: 100%;
   z-index: 0;
   height: auto;
   margin: auto;
   padding: auto;
   text-align: center;
   border-radius: 25px;
 }
 .slider__bg img {
   border-radius: 2.2vmin;
   width: 100%;
   height: 75vmin;
   z-index: 1;
   margin: auto;
 }
 .slider h1 {
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   text-align: center;
   font-size: 37px;
   text-shadow: -1px 0px -1px #000;

 }

.h1 {
   z-index: 21098345129834;
   color: #ffffff;
   text-align: center;
   padding-bottom: 22%;
   text-shadow: 1px 0px 1px #000;
}
.title__shop {
   margin-top: 5%;
   margin-bottom: 0.7%;

   text-align: center;
       font-size: 30px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: #e4e3e3;
          background-color: #4c4848;
          margin-left: 37%;
          margin-right: 37%;
          border-radius: 40px;
          width: auto;
          height: auto;
          padding-bottom: 1px;
}
.products-header h3 {
   font-weight: lighter;
   font-size: 2.3vmin;
}
.products-header h1 {

   font-size: 3.3vmin;
}
.bottom {
   width: 80%;
   margin-left: 10%;
  
   background-color: #c9c8c8;
   height: 70%;
   border-radius: 5px;
   bottom: 10%;
}
.h4 {
   text-align: center;
   color: #747374;
   padding-top: 5px;
}
.bottom p {
   text-align: center;
   margin-left: 5%;
   margin-right: 5%;
}
.carousel-control-next {
   right: 3%;
}
.carousel-inner {
   border-radius: 2.2vmin;
   transition: .3s ease;
   transition-delay: 12s;
}
/* .carousel-inner:hover .carousel-caption {
   opacity: 0;
   transition: .3s ease;
} */
.text-wrap div h4 {
   font-size: 2vmin;
   margin: 0 1vmin;
   color:#ff8a1d;
}
.card img {
   width: 100%;
  height: 42vmin;
  background-position: center center;
  background-repeat: no-repeat;
  object-fit:cover;
}
.price {
   font-weight: bold;
   font-size: 1.8vmin;
}
/* adaptive */
a {
   text-decoration: none;
   color: #000;
}
.products-class h3 {
   font-size: 2.2vmin;
}
@media (max-width: 920px) {
   .modal-vue3-content {
      width: 100%;
      min-width: 0%;
   }
      .cart-menu {
         width: 100%;
         height: auto;
      }
   .logo img {
      width: 12vmin;
      margin: auto;
   }
   .logo {
      margin: 2vmin 2vmin;
   }
   .menu {
      display: block;
      margin-top: 2vmin;
      z-index: 99999999999;
   }
   .input-container label {
      font-size: 2.67vmin;
   }
   .input-container input {
      font-size: 2vmin;
   }
   .cart-body .btn {
      font-size: 2.8vmin;
   }
   .cart-body {
      margin-top:7vmin;
   }
   .locales {
      display: none;
   }
   .locate {
      display: none;
   }
   .contacts {
      display: none;
   }
   h5 {
      font-size: 3vmin;
   }
   main {
      margin: 20vmin 5vmin;
   }
   .main-header {
      width: 75vw;
   }
   .followUs p {
      font-size: 4vmin;
   }
   header {
      padding-bottom: 0vmin;
 
   }
   header > p {
      line-height: 4.5vmin;
      font-size: 3.7vmin;
     
   }
   .products-class {
      height: 12vmin;
   }
   .contacts span {
      font-size: 5vmin;

     margin-right:  3vmin;
     margin-top: 2vmin;
   }
   .locate span {
      font-size: 5.5vmin;

      margin-right:  3vmin;
      margin-top: 1vmin;
   }
   .image-wrap {
      width:auto;
   }
   .slider__bg {
      width: auto;
      height:  100vmin;
   }
   .locales span {
      font-size: 5.5vmin;
      margin: 2.3vmin;
   }
   .locales a {
      font-size: 4.4vmin;
      line-height: 5.5vmin;
   }
   .text-wrap div h4 {
      font-size: 3vmin;
      margin: 0 1vmin;
      color:#ff8a1d;
   }
   .text-wrap div img {
      height: 8vmin;
   }
   .text-wrap {
      width: 100%;
      height: 65vmin;
      
   }
   .text-wrap div div {
      width: 40%;
   }
   .text-wrap div p {
  
   }
   .text-wrap div {
      width: 100%;
      font-size: 4vmin;
      font-weight: 500;
   }
   .text-wrap div button {
      font-size: 6vmin;
   }
   form {
      width: 100%;
      margin-top: 2vmin;
   }
   .input-container label {
      font-size: 3.5vmin;
   }
   .products-catalog {
      width: 80%;
   }
   .product {
      width: 100%;
   }
   .products-name {
      width: 100%;
      align-items:unset;
      margin: 5vmin 0;
   }
   .products-name h3 {
      font-size: 3vmin;
   }
   main {
      width: 100%;
      margin: 20vmin 0vmin;
      padding: 0;
   }
   .image-wrap img {
      margin: 0;
      border-radius: 0;
   }
   .carousel-inner {
      border-radius: 0;
   }
   .slider {
      border-radius: 0;
   }
   p {
      font-weight: lighter;
   }
   .card img {
    
   }
   .slider__bg img {
      height: unset;
   }

   .btn {
      font-size: 3.5vmin;
   }
   .price {
      font-size: 3.9vmin;
   }
   del {
      font-size: 3vmin;
   }
   .carousel-caption h5 {
      font-size: 3.4vmin;
   }
   footer {
    
   }
   .logo p {
      margin-left: 5vmin;
      display: none;
   }
   footer p {
      font-size: 3.2vmin;
   }
   footer p a {
      font-size: 3vmin;
   }
   .links > a > img {
      width: 8vmin;
   }
   .products-header {
      width: 85%;
      margin: auto;
   }
   .products-header h1 {
      font-size: 4.45vmin;
   }
   .products-header h3 {
     font-size: 3.7vmin;
   
   }
   .cart-trigger {
      bottom: 3.4%;
      right: 5%;
      z-index: 19999999;
   }
   .lnr-cart {
      font-size: 4.5vmax;
     padding: 3vmin;
   }
   .mainer {
      padding: 9vmin 1.8vmin;
      background-color: rgb(15, 55, 0);
   }
   .slider-wrapper img {
      width: 100%;
      height: auto;
      border-radius: 0;
      background-position: center center;
  background-repeat: no-repeat;
  object-fit:fill;
   }
}


</style>
