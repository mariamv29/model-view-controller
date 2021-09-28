const { Post } = require("../models");

const postdata = [
    {
        title: "Phasellus sit amet erat",
        post_url: "http://prweb.com/eget/massa/tempor/convallis.jpg?tellus=vulputate&in=vitae&sagittis=nisl&dui=aenean&vel=lectus&nisl=pellentesque&duis"
    },
    {
        title: "Nulla cursus vestibulum",
        post_url: "http://narod.ru/a/pede/posuere/nonummy/integer/non.aspx?dapibus=dis&augue=parturient&vel=montes&accumsan=nascetur"
    },
    {
        title: "Vivamus in felis eu sapien cursus vestibulum",
        post_url: "https://usatoday.com/erat/quisque/erat/eros.html?in=sit&imperdiet=amet&et=justo&commodo=morbi&vulputate=ut"
    },
    {
        title: "Milvus migrans",
        post_url: "http://bloglovin.com/neque/aenean.png?porttitor=aliquet&lorem=ultrices&id=erat&ligula=tortor&suspendisse=sollicitudin"
    },
    {
        title: "Curabitur in libero ut massa volutpat convallis",
        post_url: "https://shop-pro.jp/nullam/molestie/nibh/in/lectus/pellentesque/at.xml?mauris=semper&sit=porta&amet=volutpat&eros"
    },
    {
        title: "Laniarius ferrugineus",
        post_url: "https://yandex.ru/convallis.js?lobortis=tincidunt&ligula=eget&sit=tempus&amet=vel&eleifend=pede&pede=morbi&libero=porttitor"
    },
    {
        title: "Proin leo odio",
        post_url: "http://miitbeian.gov.cn/pellentesque/at.jpg?bibendum=consequat&imperdiet=morbi&nullam=a&orci=ipsum&pede=integer&venenatis"
    },
    {
        title: "Suspendisse accumsan tortor quis turpis",
        post_url: "http://un.org/sed/vel/enim/sit/amet/nunc.jsp?posuere=in&felis=faucibus&sed=orci&lacus=luctus&morbi=et&sem=ultrices&mauris=posuere"
    },
]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts