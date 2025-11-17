var btn = document.querySelector('button')
var main = document.querySelector('main')
var arr = ["Hey!i love js" , "sheryians is best", "work hard" , "you can do it"]

btn.addEventListener('click',function(){
    var h1 = document.createElement('h1')
    var x = Math.random()*60
    var y = Math.random()*60
    var rot = Math.random()*360
    var scl = Math.random()*2
    var a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]
    h1.style.position=' absolute'

    h1.style.left= x+'%'
    h1.style.top= y+'%'
    h1.style.rotate= rot+'deg'
    h1.style.scale= scl
    main.appendChild(h1);
})