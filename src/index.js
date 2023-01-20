// nodos

const $ = (id) => document.getElementById(id);
const $query = (query) => document.querySelector(query);

const $img = $query("img");

const $name = $query("h1");
const $nickName = $query("h2");
const $overview = $("overview");
const $divDescription = $("description");

// logos
const $aIntagram = $("instagram");
const $aTitok = $("tiktok");
const $aPinterest = $("pinterest");

const $links = $("links");
const $footer = $query("footer");

// json
const data = 
{
    name: "kinoko Cakes",

    nickname: "@kinokocakes",

    overview: "Chef pastelera Victoria Ardon Especialista en Tortas - MiniCakes - UglyCakes - Mesas de Postres.",

    description: `Actualmente Ubicados en valencia VE , <b>KinokoCakes</b>
    Somos un emprendimiento dedicado a la creacion de magicas tortas,dulces y detalles totalmente personalizados, hecho con todo el amor y cuidado de nuestra chef pastelera <b> Victoria Ardon </b>`,

    avatar: "./logoKinoko.jpg",

    social: 
    [
      {
        name: "tiktok",
        url: "https://www.tiktok.com/@kinokocakesvale",
        username: "kinokocakesvale",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/kinokocakes/",
        username: "",
      },
      {
        name: "pinterest",
        url: "https://www.pinterest.com.mx/KinokoCakesve/",
        username: "",
      },
    ],
    
    links: 
    [
      {
        name: "Ordena tu Tortita por Whatsapp",
        url: "https://wa.me/+584241885700",
        color: "green",
        emoji: "💚",
      },
    ],
    footer: "Hecho con amor Por Victoria Ardon 💜",
};

main();

function main(){
  $img.src = data.avatar
  
  $name.textContent = data.name;
  $nickName.textContent = data.nickname;
  $overview.textContent = data.overview;
  $divDescription.innerHTML = data.description;
  
  
  $aIntagram.href = findSocialUrl("instagram");
  $aTitok.href = findSocialUrl("tiktok");
  $aPinterest.href = findSocialUrl("pinterest");
  
  createLinks(data.links);
  
  $footer.textContent = data.footer;
}

function createLinks (arr) {
  $links.innerHTML = "";
  console.log($links)
  arr.map(element => {
    const $section = document.createElement("section");
    $section.classList.add(`bg-${element.color}-200`);
    $section.classList.add("px-4","py-5", "w-full", "flex", "justify-between");

    const $a = document.createElement("a");
    $a.classList.add(`text-${element.color}-600`);
    $a.classList.add("text-sm", "font-bold", "text-center", "hover:text-${link.color}-800", "cursor-pointer");
    $a.href = element.url;
    $a.setAttribute("target", "_blank");

    $a.textContent = element.name;

    const $spanEmoji = document.createElement("span");
    $spanEmoji.textContent = element.emoji;

    $section.appendChild($a);
    $section.appendChild($spanEmoji);

    $links.appendChild($section);
  });

}    

function findSocialUrl (string) {
  const result = data.social
  .find(element => {
    return element.name === string
  })
  .url;
  return result
}

