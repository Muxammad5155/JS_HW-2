var num = +prompt(' Yoshingizni kiriting ')

if ( num < 18){
   alert( num + ' Siz xali oqishingiz kerak')
}else if( num < 50){
    alert( num + ' Siz ishlashingiz kerak')
}else if( num < 59){
    alert( num + ' Siz yaqinda nafaqaga ketasiz')
}else if( num < 150){
    alert( num + ' Siz nafaqaxorsiz')
}else{
    alert( ' Nimadir notogri ketti')
}