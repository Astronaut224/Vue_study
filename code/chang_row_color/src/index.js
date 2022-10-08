import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import logo from './images/test.png'
console.log(logo);
$('.box').attr('src', logo)

$(function() {
    $('li:odd').css('background-color', 'skyblue');
    $('li:even').css('background-color', 'pink');
})

// 定义装饰器函数
function info(target) {
    target.info = 'this is Person info.';
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info);
