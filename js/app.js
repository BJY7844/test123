document.getElementById("btn").onclick = function () {
    alert("전송되었습니다.");
};


/* 상단 바 클릭시 이동*/
// const liS = document.querySelectorAll("li");
// const secS = document.querySelectorAll("section")
// const firstTop = secS[0].offsetTop
// const secondTop = secS[1].offsetTop
// const thirdTop = secS[2].offsetTop
// const forthTop = secS[3].offsetTop
//
// liS[0].onclick = function (){
//     window.scroll({top:firstTop, behavior: 'smooth'})
// }
// liS[1].onclick = function (){
//     window.scroll({top:secondTop, behavior: 'smooth'})
// }
// liS[2].onclick = function (){
//     window.scroll({top:thirdTop, behavior: 'smooth'})
// }
// liS[3].onclick = function (){
//     window.scroll({top:forthTop, behavior: 'smooth'})
// }


/* 타이핑 */
const content = "안녕하세요! \n 저는 개발자 방재영입니다. \n       ";
const text = document.querySelector(".text");
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 200)


/*마우스 커서*/
$(window).on("mousemove", function (e) {
    $(".cursor").css({
        top: (e.pageY - $(window).scrollTop()) + "px",
        left: (e.pageX - $(window).scrollLeft()) + "px"
    });
    $('a, select, label, input, button, .tabs li').hover(function () {
        $('.cursor').addClass('mouse_hover');
    }, function () {
        $('.cursor').removeClass('mouse_hover');
    });
});
/*마우스커서 없애기*/
document.body.style.cursor = 'none';
