const { Post } = require("../models");

const postdata = [
    {
        title: "Phasellus sit amet erat",
        post_url: "http://prweb.com/eget/massa/tempor/convallis.jpg?tellus=vulputate&in=vitae&sagittis=nisl&dui=aenean&vel=lectus&nisl=pellentesque&duis",
        user_id: 8
    },
    {
        title: "Nulla cursus vestibulum",
        post_url: "http://narod.ru/a/pede/posuere/nonummy/integer/non.aspx?dapibus=dis&augue=parturient&vel=montes&accumsan=nascetur",
        user_id: 4
    },
    {
        title: "Vivamus in felis eu sapien cursus vestibulum",
        post_url: "https://usatoday.com/erat/quisque/erat/eros.html?in=sit&imperdiet=amet&et=justo&commodo=morbi&vulputate=ut",
        user_id: 1
    },
    {
        title: "Milvus migrans",
        post_url: "http://bloglovin.com/neque/aenean.png?porttitor=aliquet&lorem=ultrices&id=erat&ligula=tortor&suspendisse=sollicitudin",
        user_id: 6
    },
    {
        title: "Curabitur in libero ut massa volutpat convallis",
        post_url: "https://shop-pro.jp/nullam/molestie/nibh/in/lectus/pellentesque/at.xml?mauris=semper&sit=porta&amet=volutpat&eros",
        user_id: 7
    },
    {
        title: "Laniarius ferrugineus",
        post_url: "https://yandex.ru/convallis.js?lobortis=tincidunt&ligula=eget&sit=tempus&amet=vel&eleifend=pede&pede=morbi&libero=porttitor",
        user_id: 5
    },
    {
        title: "Proin leo odio",
        post_url: "http://miitbeian.gov.cn/pellentesque/at.jpg?bibendum=consequat&imperdiet=morbi&nullam=a&orci=ipsum&pede=integer&venenatis",
        user_id: 3
    },
    {
        title: "Suspendisse accumsan tortor quis turpis",
        post_url: "http://un.org/sed/vel/enim/sit/amet/nunc.jsp?posuere=in&felis=faucibus&sed=orci&lacus=luctus&morbi=et&sem=ultrices&mauris=posuere",
        user_id: 2
    },
]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts