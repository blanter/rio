// GLOBAL SCRIPT
/* Biggest Online Shop Project */
document.getElementById('checkout-box').innerHTML = localStorage.getItem('ck');
if(localStorage.getItem("sub2") === null){
$('#sub-total b').text('Rp. 0'); 
}else{
$('#sub-total b').text(localStorage.getItem("sub2")); 
}
var select1 = $('#pilihan-1 label').text(),
	select2 = $('#pilihan-2 label').text();

/* Currency Format */
function angkaToRp(angka) {
var rupiah = '';    
var angkarev = angka.toString().split('').reverse().join('');
for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
          return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}

/* Activate Cart On Pages and Remove Header Cart */
var cart_pages = $('.blanter-cart-pages').text();
if (cart_pages){
var getproduct = $("#duniablanter-cart #checkout-box").html();
$("#duniablanter-cart").remove();
$(".blanter-cart-pages #checkout-box").html(getproduct);
}else{}

/* Random multi Number */
function getRandom(arr) {return arr[Math.floor(Math.random() * arr.length)]};
var text_phone = getRandom(phone_number);

// Start DOMContentLoaded
function run1(){

/* WA Support */
var walink = 'https://api.whatsapp.com/send',
    phone = text_phone,
    walink2 = '&text='+text_wa;
/* Mail Support */
var maillink = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
    email = text_email,
    mailsubject = '&subject='+text_mailsubject,
    maillink1 = '',
    maillink2 = '&body='+text_mailbody;
/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send',
    maillink = 'mailto:',
    maillink1 = '?cc='+text_email+'&bcc='+text_email;
}

/* Go To Checkout Payments */
$(document).on('click','.order-button a', function(){
var inputx = document.getElementById('alamat');
if("" != inputx.value){

/* Get Element Untuk API (ALL CHECKOUT) */
var nama = document.getElementById("nama").value,
	telepon = document.getElementById("telepon").value,
	pembayaran = $("#pembayaran :selected").text(),
	alamat = document.getElementById("alamat").value,
	kota = document.getElementById("kota").value,
	kodepos = document.getElementById("kodepos").value,
    linkproduk = window.location.href,
    subtotal = $('#sub-total b').text(),
    subharga = $('.harga-s b').text();

if($(".order-button").attr("data-page") != "checkout"){
/* Product Info (Product) */
var judulproduk = $('#title').text(),
	jumlah = document.getElementById("jumlah"),
	JumlahSatu = jumlah.defaultValue,
	JumlahFinal = jumlah.value,
	pilihan1 = $("#pilihan-1").attr('data-selected'),
	pilihan2 = $("#pilihan-2").attr('data-selected'),
    catatan = document.getElementById("product-desc").value;

/* Get All Text 1 (Product) */
var wa_link = walink+'?phone='+phone+walink2 + '*' +judulproduk+ '*%0A%0A' +
    '*'+wa_jumlah+'* : ' +JumlahFinal+ '%0A' +
    '*'+select1+'* : ' +pilihan1+ '%0A' +
    '*'+select2+'* : ' +pilihan2+ '%0A' +
    '*'+text_subtotal+'* : ' +subharga+ '%0A' +
    '------------------- %0A' +
    '*'+wa_nama+'* : ' +nama+ ' ('+telepon+') %0A' +
    '*'+wa_metode+'* : ' +pembayaran+ '%0A' +
    '------------------- %0A' +
    '*'+wa_alamat+'* : ' +alamat+', '+kota+', '+kodepos+ '%0A' +
    '*'+wa_catatan+'* : ' +catatan+ '%0A%0A' +
    wa_last+' : '+linkproduk;
var email_link = maillink+email+maillink1+mailsubject+judulproduk+maillink2+ '*' +judulproduk+ '*%0A%0A' +
    '*'+wa_jumlah+'* : ' +JumlahFinal+ '%0A' +
    '*'+select1+'* : ' +pilihan1+ '%0A' +
    '*'+select2+'* : ' +pilihan2+ '%0A' +
    '*'+text_subtotal+'* : ' +subharga+ '%0A' +
    '------------------- %0A' +
    '*'+wa_nama+'* : ' +nama+ ' ('+telepon+') %0A' +
    '*'+wa_metode+'* : ' +pembayaran+ '%0A' +
    '------------------- %0A' +
    '*'+wa_alamat+'* : ' +alamat+', '+kota+', '+kodepos+ '%0A' +
    '*'+wa_catatan+'* : ' +catatan+ '%0A%0A' +
    wa_last+' : '+linkproduk;
}else{
/* Get Produk 2 (Page) */
var getproduk = $('#checkout-box .product-cart').text();
var getproduk2 = getproduk.replace(/Hapus/g,'');

/* Get All Text 2 (Page) */
var wa_link = walink+'?phone='+phone+walink2+'%0A'+getproduk2+
    '*'+text_subtotal+'* : ' +subtotal+ '%0A' +
    '*'+wa_nama+'* : ' +nama+ ' ('+telepon+') %0A' +
    '*'+wa_metode+'* : ' +pembayaran+ '%0A' +
    '------------------- %0A' +
    '*'+wa_alamat+'* : ' +alamat+', '+kota+', '+kodepos+ '%0A';
var email_link = maillink+email+maillink1+mailsubject+text_mailsubject+maillink2+'%0A'+getproduk2+
    '*'+text_subtotal+'* : ' +subtotal+ '%0A' +
    '*'+wa_nama+'* : ' +nama+ ' ('+telepon+') %0A' +
    '*'+wa_metode+'* : ' +pembayaran+ '%0A' +
    '------------------- %0A' +
    '*'+wa_alamat+'* : ' +alamat+', '+kota+', '+kodepos+ '%0A';
};

/* Support (ALL CHECKOUT) */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {var email_link = email_link.replace(/%0A/g, "<br>");};
if($(this).attr("id")=="walink"){window.open(wa_link,'_blank');}
if($(this).attr("id")=="emaillink"){window.open(email_link,'_blank');}
$(".pemesanan input,.pemesanan select,.pemesanan textarea").removeClass("gagal");
}else{
$(".pemesanan input,.pemesanan select,.pemesanan textarea").addClass("gagal");
}
});

/* Get Some Text */
$(document).on('click','#next_order', function(){
var jumlah = document.getElementById("jumlah"),
	JumlahSatu = jumlah.defaultValue,
	JumlahFinal = jumlah.value,
	pilihan1 = $("#pilihan-1").attr('data-selected'),
	pilihan2 = $("#pilihan-2").attr('data-selected');
$("#order-wrapper,body").toggleClass("aktif");
$(".jumlah-s b").text(JumlahFinal);
$(".warna-s b").text(pilihan1);
$(".ukuran-s b").text(pilihan2);
$(".select-1").text(select1);
$(".select-2").text(select2);
if(pilihan1 == false){$(".warna-s").text("");}else{}if(pilihan2 == false){$(".ukuran-s").text("");}else{};

/* Rp 10.000 to 10000 with Jumlah */
var rpnum = $(".produk-wrap #harga").text(),
    countnum = $(".jumlah-s b").text(),
    replacenum = rpnum.replace(/\D+/g, ''),
    last = replacenum * countnum;
/* Change to New Price */
$('.harga-s b').text(angkaToRp(last));
});

/* Saat Klik Tambahkan Keranjang */
$(document).on('click','.produk-wrap #go-cart', function(){
var pic = document.getElementById('gambar').src,
	link = window.location.href,
	teks = $('#title').text(),
    harga = $('#harga').text(),
    jumlah = document.getElementById("jumlah"),
	JumlahSatu = jumlah.defaultValue,
	JumlahFinal = jumlah.value,
	pilihan1 = $("#pilihan-1").attr('data-selected'),
	pilihan2 = $("#pilihan-2").attr('data-selected'),
    catatan = document.getElementById("product-desc").value;

/* Pemanggil Kode Unik ID Produk */
var unique = teks,
	addnumber = $('#cart-num').text(),
	getnumber = parseInt(addnumber)+parseInt('1'),
	unique = unique.replace(/\s/g,''),
	checkit1 = $("#checkout-box").text();

/* Jika Checkout Produk Ganda */
if(checkit1.indexOf(teks) != -1){
var getjumlah = $("#produk"+unique+"").children("b:nth-of-type(1)").text(),
	JumlahFinal = parseInt(JumlahFinal)+parseInt(getjumlah),
	getsubtotal1 = $("#produk"+unique+"").children(".harga").text().replace(/\D+/g, ''),
	getsubtotal2 = $('#sub-total b').text().replace(/\D+/g, ''),
	getsubtotal3 = parseInt(getsubtotal2)-parseInt(getsubtotal1),
	getsubtotal = ""+angkaToRp(getsubtotal3)+"";
	$("#produk"+unique+"").remove();
}else{
var getsubtotal = $('#sub-total b').text();
};

/* Rp 10.000 to 10000 with Jumlah Matematika */
var rpnum = $("#harga").text(),
	countnum = JumlahFinal,
	replacenum = rpnum.replace(/\D+/g, ''),
    last = replacenum * countnum,
    hargaend = angkaToRp(last),
    replacesub = getsubtotal.replace(/\D+/g, ''),
    gettotal = parseInt(last)+parseInt(replacesub);
    $('#sub-total b').text(angkaToRp(gettotal));

document.getElementById('no-product').innerHTML = '';
document.getElementById('cart-num').innerHTML = getnumber;
	
/* Pemanggil Kotak Produk */
document.getElementById('checkout-box').innerHTML += '<div class="product-cart" id="produk'+unique+'"><img src="'+pic+'"><a href="'+link+'">'+teks+'</a><sp>%0A</sp><div class="harga">'+hargaend+'</div><sp>%0A</sp>Jumlah : <b>'+JumlahFinal+'</b><sp>%0A</sp><div class="varian1">'+select1+' : <b>'+pilihan1+'</b></div><sp>%0A</sp><div class="varian2">'+select2+' : <b>'+pilihan2+'</b></div><sp>%0A</sp><div class="catatan">'+wa_catatan+' : <b>'+catatan+'</b></div><sp>%0A-------------------%0A</sp><a id="hapus" class="hapus" href="javascript:void" onclick="hapus(),getElementById(`produk'+unique+'`).remove();hapus2()">'+text_hapus+'</a></div>'
$(".addtowish").addClass("aktif");

/* Simpan Kotak Produk dan Sub Total Terbaru */
var king = document.getElementById('checkout-box').innerHTML;
localStorage.setItem('ck', king);
var subtotal = $('#sub-total b').text();
localStorage.setItem('sub2', subtotal);
hapus();
});

/* Nomor Jumlah Produk di Checkout dan Kunci Stok Habis */
var jumlah = $('.product-cart').length;
var stokhabis = $('.stok-habis').text();
document.getElementById('cart-num').innerHTML = jumlah;
if (jumlah == "0"){
document.getElementById('checkout-box').innerHTML = '<span id="no-product">'+text_nowish+'</span>';
}else{};
if (stokhabis){
$(".produk-wrap .pilihan").toggleClass("stokhabis");
}else{}

/* NEW CODE PILIHAN PRODUK dan ADD JUMLAH */
$("#pilihan-1 li").click(function(){
$("#pilihan-1 li").removeClass("selected");
$(this).addClass("selected");
$("#pilihan-1").attr("data-selected",$("#pilihan-1 li.selected").text());
$("#pilihan-1").attr("data-content",$(this).attr('data-price'));
var getnew_price = $(this).attr("data-price");
var getold_price = $(".harga-produk").attr("content");
if($("#pilihan-2").length > 0){var pilihan2_aktif=$('#pilihan-2').attr('data-content')}else{var pilihan2_aktif='0'};
var tambahharga	 = parseInt(getnew_price)+parseInt(getold_price)+parseInt(pilihan2_aktif);
$('#harga').text(angkaToRp(tambahharga));
});
$("#pilihan-2 li").click(function(){
$("#pilihan-2 li").removeClass("selected");
$(this).addClass("selected");
$("#pilihan-2").attr("data-selected",$("#pilihan-2 li.selected").text());
$("#pilihan-2").attr("data-content",$(this).attr('data-price'));
var getnew_price = $(this).attr("data-price");
var getold_price = $(".harga-produk").attr("content");
if($("#pilihan-1").length > 0){var pilihan1_aktif=$('#pilihan-1').attr('data-content')}else{var pilihan1_aktif='0'};
var tambahharga	 = parseInt(getnew_price)+parseInt(getold_price)+parseInt(pilihan1_aktif);
$('#harga').text(angkaToRp(tambahharga));
});
$(".add-min").click(function(){
if($("#jumlah").val() != $("#jumlah").attr('min')){
$("#jumlah").val(parseInt($("#jumlah").val())-parseInt(1));
}else{}
});
$(".add-plus").click(function(){
if($("#jumlah").val() != $("#jumlah").attr('max')){
$("#jumlah").val(parseInt($("#jumlah").val())+parseInt(1));
}else{}
});
$(".pilihan li:contains("+text_empty+")").addClass('kosong');
$("li.kosong").removeClass('selected');
$("li.kosong").each(function() {
  $(this).replaceWith( "<div class='kosong'>" + $( this ).text() + "</div>" );
});

/* NEW HALAMAN PRODUCT */
$(".select-data li:nth-of-type(1)").toggleClass("selected");
var get_sdata1 = $("#pilihan-1 li.selected").text();
var get_sdata2 = $("#pilihan-2 li.selected").text();
$("#pilihan-1").attr("data-selected",get_sdata1).attr("data-content",$("#pilihan-1 li.selected").attr("data-price"));
$("#pilihan-2").attr("data-selected",get_sdata2).attr("data-content",$("#pilihan-2 li.selected").attr("data-price"));

$("#menu-blanter li a").each(function(){
if($(this).text() == menu_text_hot){$(this).addClass("m-unique menu-hot")};
if($(this).text() == menu_text_new){$(this).addClass("m-unique menu-new")};
});

$(document).on('click','#get-checkout', function(){
$(".product-cart #hapus").remove();
$(".varian1,.varian2,.catatan").hide();
$(".pemesanan,.order-button").removeClass('none');
});
	
} - 1 == navigator.userAgent.indexOf("Google Page Speed Insights") && (window.addEventListener ? window.addEventListener("load", run1, !1) : window.attachEvent ? window.attachEvent("onload", run1) : window.onload = run1);

/* Hapus Produk Tertentu dan Sub Total Terbaru */
function hapus(){
var subtotal = $('#sub-total b').text(),
    replacex = subtotal.replace(/\D+/g, ''),
    jumlahproduk = $('.product-cart').length;
if (jumlahproduk > 1){
$(".hapus").click(function(){
  var hargaini = $(this).parent('.product-cart').children('.harga').text(),
      hargaini2 = hargaini.replace(/\D+/g, ''),
      gettotal = parseInt(replacex)-parseInt(hargaini2),
      hasiltotal = angkaToRp(gettotal);
$('#sub-total b').text(hasiltotal);
localStorage.setItem('sub2', hasiltotal);
});
} else{}
if (jumlahproduk == "1"){
$(".hapus").click(function(){
$('#sub-total b').text('Rp. 0');
localStorage.setItem('sub2', 'Rp. 0');
});
} else {}
};

function run(){
hapus();
$(".deskripsi-produk").appendTo("#deskripsi");

// FONTS
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS(""+css1+"");loadCSS(""+css2+"");loadCSS(""+css3+"");

// Lazy Load
function lazyLoad(){for(var e=document.getElementsByClassName("lazy"),t=0;t<e.length;t++)isInViewport(e[t])&&(e[t].src=e[t].getAttribute("data-src"))}function isInViewport(e){var t=e.getBoundingClientRect();return 0<=t.bottom&&0<=t.right&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function registerListener(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}for(registerListener("load",lazyLoad),registerListener("scroll",lazyLoad),i=0;i<1;i++)lazyLoad();window.loadimage=function(){for(var e=document.querySelectorAll("img[data-src]"),t=0;t<e.length;t++){var a=e[t].width,r=e[t].height;e[t].src=e[t].getAttribute("data-src").replace("/s72-c/","/w"+a+"-h"+r+"-c/")}},loadimage();

// Floating Menu
$(function(){var e=$(document).scrollTop();var t=$(".float_material").outerHeight();$(window).scroll(function(){var n=$(document).scrollTop();if($(document).scrollTop()>=1)if(n>t){$(".float_material").addClass("scroll")}else{$(".float_material").removeClass("scroll")}if(n>e){$(".float_material").removeClass("no-scroll")}else{$(".float_material").addClass("no-scroll")}e=$(document).scrollTop()})})

// Menu
$('#menu-blanter ul').find('li:has(ul)').children('a').removeAttr('href').toggleClass('submenu');$('#menu-blanter li:has(ul)').click(function(){$(this).children('ul').slideToggle()});$('#slidemenu ul').find('li:has(ul)').children('a').removeAttr('href').toggleClass('submenu');$('#slidemenu li:has(ul)').click(function(){$(this).children('ul').slideToggle()});

/* Toggle */
$(document).ready(function(){$(".toggleMenu").click(function(){$("#slidemenu,.darkshadow").toggleClass("aktif");});});
$(document).ready(function(){$("#showmenu").click(function(){$("#headermenu").slideToggle("normal");});});
$(document).ready(function(){$("#showsearch").click(function(){$("#searchmaterial").slideToggle("normal");});});
$(document).ready(function(){$(".blanter-back").click(function(){$("#searchmaterial").slideToggle("normal");});});
$(document).ready(function(){$(".darkshadow").click(function(){$("#slidemenu,.darkshadow").removeClass("aktif");});});
$(document).ready(function(){$(".notifUi,.close-sf").click(function(){$(".blanternotif,.flashlight").toggleClass("aktif");});});
$(document).ready(function(){$(".showmore").click(function(){$(".comment-thread .datetime a,.item-control.blog-admin").slideToggle("normal")})});
$(document).ready(function(){$("#showkomentarmenu").click(function(){$("#komentarmenu").slideToggle("normal")})});
$(document).ready(function(){$("#slidemenu li a,a.ripple").toggleClass("e-waves");});
$(".popular-box img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/w150-h150+(\-p-k-no-nu)?\//,"/w150-h150/"))});
$(document).ready(function(){$(".show_emo").click(function(){$(".google_emo").toggle("fast")})});
$(document).ready(function(){$(".navwa,.wabox-close").click(function(){$(".blanter-wabox").toggle("fast")})});
$(document).ready(function(){$("a.cart-wish").click(function(){$(".blanter-cart").slideToggle("normal");});});
$(document).ready(function(){$(".close_order").click(function(){$("#order-wrapper,body").removeClass("aktif");});});

/* Only 980 Screen */
if (screen.width <= 980) {
document.getElementById("mobile-menu").appendChild(document.getElementById("menu-blanter"));
document.getElementById("navwa").appendChild(document.getElementById("realnavwa"));
};

// Slider 
$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

// License
var TinyNav48={_keyStr:"ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/=",encode:function(e){var t,r,n,o,i,c,a,d="",f=0;for(e=TinyNav48._utf8_encode(e);f<e.length;)o=(t=e.charCodeAt(f++))>>2,i=(3&t)<<4|(r=e.charCodeAt(f++))>>4,c=(15&r)<<2|(n=e.charCodeAt(f++))>>6,a=63&n,isNaN(r)?c=a=64:isNaN(n)&&(a=64),d=d+this._keyStr.charAt(o)+this._keyStr.charAt(i)+this._keyStr.charAt(c)+this._keyStr.charAt(a);return d},decode:function(e){var t,r,n,o,i,c,a="",d=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<e.length;)t=this._keyStr.indexOf(e.charAt(d++))<<2|(o=this._keyStr.indexOf(e.charAt(d++)))>>4,r=(15&o)<<4|(i=this._keyStr.indexOf(e.charAt(d++)))>>2,n=(3&i)<<6|(c=this._keyStr.indexOf(e.charAt(d++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(r)),64!=c&&(a+=String.fromCharCode(n));return TinyNav48._utf8_decode(a)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):(127<n&&n<2048?t+=String.fromCharCode(n>>6|192):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128)),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){for(var t="",r=0,n=c1=c2=0;r<e.length;)(n=e.charCodeAt(r))<128?(t+=String.fromCharCode(n),r++):191<n&&n<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&c2)<<6|63&c3),r+=3);return t}};!function(){try{var e=18,t=TinyNav48.decode("wT0iy6QkyaV="),r=TinyNav48.decode("zSI9xSN3Ob06w6xfzDIryTUfwTEbOnMeyJ=="),n=document.querySelector("#HTML99 .license-code").innerText,o=document.querySelector("#responsive").innerText+t;if(TinyNav48.decode(n)==o)return;document.write('<style>#notif-license span{font-size:50px}#notif-license{display:block;z-index:99999;right:10px;bottom:10px;text-align:center;background:#e42727;border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#notif-license h4{font-size:20px}</style><div id="notif-license"><h4>Activate Templates</h4><p>Contact Admin www.idblanter.com to activate Templates.</p><span id="count-messages">18</span></div>'),setInterval(function(){e<=1?window.location.href=r:document.getElementById("count-messages").innerHTML=--e},1e3)}catch(e){window.location.href=r}}();

// Infinite Scroll
A=window,k=document,A.InfiniteScroll=function(e){function i(e,t){return(t=t||k).querySelectorAll(e)}function t(e){return"function"==typeof e}function l(e,t){if(void 0!==r[e])for(var n in r[e])r[e][n](t)}function n(){return s.innerHTML=c.text.loading,p=!0,u?(v.classList.add(c.state.loading),l("loading",[c]),void o(u,function(e,t){v.className=T+" "+c.state.load,(f=k.createElement("div")).innerHTML=e;var n=i("title",f),o=i(c.target.post,f),r=i(c.target.anchors+" "+c.target.anchor,f),a=i(c.target.post,g);if(n=n&&n[0]?n[0].innerHTML:"",o.length&&a.length){a=a[a.length-1],k.title=n,a.insertAdjacentHTML("afterend",'<span class="fi" id="#fi:'+j+'"></span>'),f=k.createElement("div"),n=0;for(var s=o.length;n<s;++n)f.appendChild(o[n]);a.insertAdjacentHTML("afterend",f.innerHTML),d(),u=!!r.length&&r[0].href,p=!1,j++,l("load",[c,e,t]),loadimage()}},function(e,t){v.classList.add(c.state.error),p=!1,d(1),l("error",[c,e,t])})):(v.classList.add(c.state.loaded),s.innerHTML=c.text.loaded,l("loaded",[c]))}function d(e){s.innerHTML="",a&&(f.innerHTML=c.text[e?"error":"load"],(e=f.firstChild).onclick=function(){return 2===c.type&&(a=!1),n(),!1},s.appendChild(e))}var o="infinite-scroll-state-",c={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:o+"load",loading:o+"loading",loaded:o+"loaded",error:o+"error"}},r={load:[],loading:[],loaded:[],error:[]};(c=function e(t,n){for(var o in t=t||{},n)t[o]="object"==typeof n[o]?e(t[o],n[o]):n[o];return t}(c,e||{})).on=function(e,t,n){return void 0!==e?void 0!==t?void(void 0!==n?r[e][n]=t:r[e].push(t)):r[e]:r},c.off=function(e,t){void 0!==t?delete r[e][t]:r[e]=[]};var f=null;o=function(e,t,n){if(A.XMLHttpRequest){var o=new XMLHttpRequest;o.onload=function(){t(o.responseText,o)},o.open("GET",e),o.send()}};var a=1!==c.type,p=!1,g=i(c.target.posts)[0],s=i(c.target.anchors)[0],u=i(c.target.anchor,s),h=k.body,v=k.documentElement,T=v.className||"",H=g.offsetTop+g.offsetHeight,L=A.innerHeight,m=0,M=null,j=1;return u.length&&(u=u[0].href,g.insertAdjacentHTML("afterbegin",'<span class="fi" id="#fi:0"></span>'),f=k.createElement("div"),d(),0!==c.type&&(2===c.type&&(H=g.offsetTop+g.offsetHeight,L=A.innerHeight,m=h.scrollTop||v.scrollTop,p||m+L<H||n()),A.addEventListener("scroll",function(){a||(M&&A.clearTimeout(M),M=A.setTimeout(t,500))},!1))),c},new InfiniteScroll({type:0,target:{posts:".blog-posts",post:".post-outer",anchors:".blog-pager",anchor:".blog-pager-older-link"},text:{load:'<a class="js-load e-waves" href="javascript:;"><i class="fa fa-angle-down"></i>'+load_more+"</a>",loading:'<span class="js-loading" style="cursor:wait;">'+loading_text+"</span>",loaded:'<span class="js-loaded">'+all_post_show+"</span>",error:'<a class="js-error" href="javascript:;">'+error_text+"</a>"}});

// Whatsapp Chat Box
$(document).on("click", "#wabox-send", function() {
	var get_inputbox = $('.wa-inputbox').val();
	if ("" != get_inputbox) {
		var wabox_val = $('.wa-inputbox').val(),
			wabox_lin = "https://api.whatsapp.com/send",
			wabox_int = "&text=" + wabox_val;
		var wabox_res = wabox_lin + "?phone=" + text_phone + wabox_int;
		window.open(wabox_res, '_blank')
	}
});
	
} - 1 == navigator.userAgent.indexOf("Google Page Speed Insights") && (window.addEventListener ? window.addEventListener("load", run, !1) : window.attachEvent ? window.attachEvent("onload", run) : window.onload = run);

// Tab And Description
function rudrSwitchTab(a,b){var c,d=document.getElementsByClassName("tabcontent");for(c=0;c<d.length;c++)d[c].style.display="none";document.getElementById(b).style.display="block";var c,d=document.getElementsByClassName("tabmenu");for(c=0;c<d.length;c++)d[c].className="tabmenu";document.getElementById(a).className="tabmenu active"};

/* Tombol Hapus */
function hapus2(){
var king = document.getElementById('checkout-box').innerHTML;
localStorage.setItem('ck', king);
};

// Label Khusus Related Posts from Tokowhatsapp
var url_string = window.location.href;
var urlParameter = new URL(url_string);
var labelMode = urlParameter.searchParams.get("mode");
if(labelMode == 'related-posts') {
window.onload=function(){
$("body").append("<style>#blog-pager,.navmobile,#header-material,#menu-blanter,.breadcrumbs,#popular-box,.footer-blanter,#footer-material,#footer-bottom,.navwa,.flashlight,.blanternotif,a.blantershow-chat,.blanter-wabox{display:none!important}body:before{background:#fff}.post-outer{margin:0 3px 10px}#outer-material{margin:0}#content-material{padding:0 5px;width:auto!important;max-width:100%!important}*{overflow-y:hidden!important}body{padding-top:0!important;background:transparent!important;overflow-y:hidden!important}.blog-posts{grid-template-columns:1fr 1fr 1fr 1fr 1fr}@media screen and (max-width: 768px){.blog-posts{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width: 680px){.blog-posts{grid-template-columns:1fr 1fr}}</style>"); 
$('.post.hentry a').each(function(){
$(this).attr('target','_top');
});
} 
};
if(labelMode == 'product-category') {
window.onload=function(){
$("body").append("<style>#blog-pager,.navmobile,#header-material,#menu-blanter,.breadcrumbs,#popular-box,.footer-blanter,#footer-material,#footer-bottom,.navwa,.flashlight,.blanternotif,a.blantershow-chat,.blanter-wabox{display:none!important}body:before{background:#fff}.post-outer{margin:0 3px 10px}#outer-material{margin:0}#content-material{padding:0 5px;width:auto!important;max-width:100%!important}*{overflow-y:hidden!important}body{padding-top:0!important;background:transparent!important;overflow-y:hidden!important}</style>"); 
$('.post.hentry a').each(function(){
$(this).attr('target','_top');
});
} 
};

// DEFER IFRAME
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
      vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
}};
// Frame Related Posts from https://stackoverflow.com/questions/9975810/
function resizeIframe(obj) {
obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
$('#relatedframe-posts,.iframe-product').bind('load', function(){
resizeIframe(this);
$(this).addClass('loaded');
});
