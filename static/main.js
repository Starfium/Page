function typeWriter(element, text, delay) {
    const textElement=document.getElementById(element);
    let i = textElement.textContent.length; // 从当前文本长度开始
    let len = text.length;
    if (i<len) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, delay), delay);
    }
}
function randomText(){
    const texts = [
        "小保底不要歪 小保底不要歪 小保底不要歪",
        "lzyz 真是 sm",
        "我是逆蝶",
        "被砖头砸晕算不算急性硅酸盐中毒",
        "浩洋先生沉鱼落雁闭月羞花",
    ]
    return texts[Math.floor(Math.random() * texts.length)];
}
document.addEventListener('DOMContentLoaded', function() {
    typeWriter("right-title", "Hello, I'm Starfium", 60);
    typeWriter("right-description", randomText(), 40);
});