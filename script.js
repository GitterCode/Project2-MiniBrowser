//pages

var html = document.getElementById('html');
var css = document.getElementById('css');
var js = document.getElementById('js');
var php = document.getElementById('php');
var python = document.getElementById('python');
var mysql = document.getElementById('mysql');
// zamkniecia
var cross = document.getElementById('cross')
var cross1 = document.getElementById('cross1')
var cross2 = document.getElementById('cross2')
var cross3 = document.getElementById('cross3')
var cross4 = document.getElementById('cross4')
var cross5 = document.getElementById('cross5')


var przywroc = document.getElementById('przywroc');
//info-divs

var htmlinfo = document.getElementById('htmlinfo')

var cssinfo = document.getElementById('cssinfo')

var jsinfo = document.getElementById('jsinfo')

var phpinfo = document.getElementById('phpinfo')

var pythoninfo = document.getElementById('pythoninfo')

var mysqlinfo = document.getElementById('mysqlinfo')
//dzialania gory
cross.addEventListener('click', function(){
    html.style.display = 'none';
    
})


cross1.addEventListener('click', function(){
    css.style.display = 'none';
})

cross2.addEventListener('click', function(){
    js.style.display = 'none';
})

cross3.addEventListener('click', function(){
    php.style.display = 'none';
})

cross4.addEventListener('click', function(){
    python.style.display = 'none';
})

cross5.addEventListener('click', function(){
    mysql.style.display = 'none';
})


przywroc.addEventListener('click', function(){
    html.style.display = 'inline-block';
    css.style.display = 'inline-block';
    js.style.display = 'inline-block';
    php.style.display = 'inline-block';
    python.style.display = 'inline-block';
    mysql.style.display = 'inline-block';
})


//dzialania dolu


html.addEventListener('click', function(){
    if(htmlinfo.style.display == 'none'){
        htmlinfo.style.display = 'block';
    }
    else{
        htmlinfo.style.display = 'none';
    }

   if(cssinfo.style.display == 'block'){
        cssinfo.style.display = 'none';
    }

   else if(jsinfo.style.display == 'block'){
        jsinfo.style.display = 'none';
    }

    else if(phpinfo.style.display == 'block'){
        phpinfo.style.display = 'none';
    }

    else if(pythoninfo.style.display == 'block'){
        pythoninfo.style.display = 'none';
    }

    else if(mysqlinfo.style.display == 'block'){
        mysqlinfo.style.display = 'none';
    }
})



css.addEventListener('click', function(){
    if(cssinfo.style.display == 'none'){
        cssinfo.style.display = 'block';
    }
    else{
        cssinfo.style.display = 'none';
    }

    if(htmlinfo.style.display == 'block'){
        htmlinfo.style.display = 'none';
    }

   else if(jsinfo.style.display == 'block'){
        jsinfo.style.display = 'none';
    }

    else if(phpinfo.style.display == 'block'){
        phpinfo.style.display = 'none';
    }

    else if(pythoninfo.style.display == 'block'){
        pythoninfo.style.display = 'none';
    }

    else if(mysqlinfo.style.display == 'block'){
        mysqlinfo.style.display = 'none';
    }
})


js.addEventListener('click', function(){
    if(jsinfo.style.display == 'none'){
        jsinfo.style.display = 'block';
    }
    else{
        jsinfo.style.display = 'none';
    }


    if(htmlinfo.style.display == 'block'){
        htmlinfo.style.display = 'none';
    }
    
    else if(cssinfo.style.display == 'block'){
        cssinfo.style.display = 'none';
    }

    else if(phpinfo.style.display == 'block'){
        phpinfo.style.display = 'none';
    }

    else if(pythoninfo.style.display == 'block'){
        pythoninfo.style.display = 'none';
    }

    else if(mysqlinfo.style.display == 'block'){
        mysqlinfo.style.display = 'none';
    }

    
})

php.addEventListener('click', function(){
    if(phpinfo.style.display == 'none'){
        phpinfo.style.display = 'block';
    }
    else{
        phpinfo.style.display = 'none';
    }

   if(htmlinfo.style.display == 'block'){
        htmlinfo.style.display = 'none';
    }

    else if(cssinfo.style.display == 'block'){
        cssinfo.style.display = 'none';
    }


    else if(jsinfo.style.display == 'block'){
        jsinfo.style.display = 'none';
    }

    else if(pythoninfo.style.display == 'block'){
        pythoninfo.style.display = 'none';
    }

    else if(mysqlinfo.style.display == 'block'){
        mysqlinfo.style.display = 'none';
    }



})

python.addEventListener('click', function(){
    if(pythoninfo.style.display == 'none'){
        pythoninfo.style.display = 'block';
    }
    else{
        pythoninfo.style.display = 'none';
    }
    
    if(htmlinfo.style.display == 'block'){
        htmlinfo.style.display = 'none';
    }

    else if(cssinfo.style.display == 'block'){
        cssinfo.style.display = 'none';
    }

    else if(jsinfo.style.display == 'block'){
        jsinfo.style.display = 'none';
    }

    else if(phpinfo.style.display == 'block'){
        phpinfo.style.display = 'none';
    }

    else if(mysqlinfo.style.display == 'block'){
        mysqlinfo.style.display = 'none';
    }
   


})

mysql.addEventListener('click', function(){
    if(mysqlinfo.style.display == 'none'){
        mysqlinfo.style.display = 'block';
    }
    else{
        mysqlinfo.style.display = 'none';
    }
    
    if(htmlinfo.style.display == 'block'){
        htmlinfo.style.display = 'none';
    }

    else if(cssinfo.style.display == 'block'){
        cssinfo.style.display = 'none';
    }

    else if(jsinfo.style.display == 'block'){
        jsinfo.style.display = 'none';
    }

    else if(phpinfo.style.display == 'block'){
        phpinfo.style.display = 'none';
    }

    else if(pythoninfo.style.display == 'block'){
        pythoninfo.style.display = 'none';
    }
   
})

// drawer
var img = document.getElementById('img')
var drawer = document.getElementById('drawer')
var ul = document.getElementById('ul')
var h2 = document.getElementById('h2');

var img1 = document.getElementById('img1')
var drawer1 = document.getElementById('drawer1')
var ul1 = document.getElementById('ul1')
var h21 = document.getElementById('h21');

var img2 = document.getElementById('img2')
var drawer2 = document.getElementById('drawer2')
var ul2 = document.getElementById('ul2')
var h22 = document.getElementById('h22');

var img3 = document.getElementById('img3')
var drawer3 = document.getElementById('drawer3')
var ul3 = document.getElementById('ul3')
var h23 = document.getElementById('h23');

var img4 = document.getElementById('img4')
var drawer4 = document.getElementById('drawer4')
var ul4 = document.getElementById('ul4')
var h24 = document.getElementById('h24');

var img5 = document.getElementById('img5')
var drawer5 = document.getElementById('drawer5')
var ul5 = document.getElementById('ul5')
var h25 = document.getElementById('h25');






h2.addEventListener('click', function() {
    if (h2.style.height === "400px") {
        h2.style.height = "65px";
    } else {
        h2.style.height = "400px";
    }

    if (ul.style.opacity === "1") {
        ul.style.opacity = "0";
        setTimeout(() => {
            ul.style.display = "none";
            ul.style.visibility = "hidden";
        }, 500); 
    } else {
        ul.style.display = "block";
        ul.style.visibility = "visible";
        setTimeout(() => {
            ul.style.opacity = "1";
        }, 10); 
    }
  if(img.style.rotate == "180deg"){
    img.style.rotate = "0deg";
  }
  else{
    img.style.rotate = "180deg";
  }
});


h2.addEventListener('mouseover', function(){
    img.style.borderRadius = "50%";
})

h2.addEventListener('mouseleave', function(){
    img.style.borderRadius = "0%";
})




h21.addEventListener('click', function() {
    if (h21.style.height === "400px") {
        h21.style.height = "65px";
    } else {
        h21.style.height = "400px";
    }

    if (ul1.style.opacity === "1") {
        ul1.style.opacity = "0";
        setTimeout(() => {
            ul1.style.display = "none";
            ul1.style.visibility = "hidden";
        }, 500); 
    } else {
        ul1.style.display = "block";
        ul1.style.visibility = "visible";
        setTimeout(() => {
            ul1.style.opacity = "1";
        }, 10); 
    }
  if(img1.style.rotate == "180deg"){
    img1.style.rotate = "0deg";
  }
  else{
    img1.style.rotate = "180deg";
  }
});


h21.addEventListener('mouseover', function(){
    img1.style.borderRadius = "50%";
})

h21.addEventListener('mouseleave', function(){
    img1.style.borderRadius = "0%";
})

h22.addEventListener('click', function() {
    if (h22.style.height === "400px") {
        h22.style.height = "65px";
    } else {
        h22.style.height = "400px";
    }

    if (ul2.style.opacity === "1") {
        ul2.style.opacity = "0";
        setTimeout(() => {
            ul2.style.display = "none";
            ul2.style.visibility = "hidden";
        }, 500); 
    } else {
        ul2.style.display = "block";
        ul2.style.visibility = "visible";
        setTimeout(() => {
            ul2.style.opacity = "1";
        }, 10); 
    }
  if(img2.style.rotate == "180deg"){
    img2.style.rotate = "0deg";
  }
  else{
    img2.style.rotate = "180deg";
  }
});

h23.addEventListener('click', function() {
    if (h23.style.height === "400px") {
        h23.style.height = "65px";
    } else {
        h23.style.height = "400px";
    }

    if (ul3.style.opacity === "1") {
        ul3.style.opacity = "0";
        setTimeout(() => {
            ul3.style.display = "none";
            ul3.style.visibility = "hidden";
        }, 500); 
    } else {
        ul3.style.display = "block";
        ul3.style.visibility = "visible";
        setTimeout(() => {
            ul3.style.opacity = "1";
        }, 10); 
    }
  if(img3.style.rotate == "180deg"){
    img3.style.rotate = "0deg";
  }
  else{
    img3.style.rotate = "180deg";
  }
});


h24.addEventListener('click', function() {
    if (h24.style.height === "400px") {
        h24.style.height = "65px";
    } else {
        h24.style.height = "400px";
    }

    if (ul4.style.opacity === "1") {
        ul4.style.opacity = "0";
        setTimeout(() => {
            ul4.style.display = "none";
            ul4.style.visibility = "hidden";
        }, 500); 
    } else {
        ul4.style.display = "block";
        ul4.style.visibility = "visible";
        setTimeout(() => {
            ul4.style.opacity = "1";
        }, 10); 
    }
  if(img4.style.rotate == "180deg"){
    img4.style.rotate = "0deg";
  }
  else{
    img4.style.rotate = "180deg";
  }
});

h25.addEventListener('click', function() {
    if (h25.style.height === "400px") {
        h25.style.height = "65px";
    } else {
        h25.style.height = "400px";
    }

    if (ul5.style.opacity === "1") {
        ul5.style.opacity = "0";
        setTimeout(() => {
            ul5.style.display = "none";
            ul5.style.visibility = "hidden";
        }, 500); 
    } else {
        ul5.style.display = "block";
        ul5.style.visibility = "visible";
        setTimeout(() => {
            ul5.style.opacity = "1";
        }, 10); 
    }
  if(img5.style.rotate == "180deg"){
    img5.style.rotate = "0deg";
  }
  else{
    img5.style.rotate = "180deg";
  }
});



   

   
    






