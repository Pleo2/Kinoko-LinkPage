(()=>{const e=e=>document.getElementById(e),t=e=>document.querySelector(e),o=t("img"),n=t("h1"),a=t("h2"),r=e("overview"),i=e("description"),s=e("instagram"),c=e("tiktok"),l=e("pinterest"),m=e("links"),d=t("footer"),k={name:"kinoko Cakes",nickname:"@kinokocakes",overview:"Chef pastelera Victoria Ardon Especialista en Tortas - MiniCakes - UglyCakes - Mesas de Postres.",description:"Actualmente Ubicados en valencia VE , <b>KinokoCakes</b>\n    Somos un emprendimiento dedicado a la creacion de magicas tortas,dulces y detalles totalmente personalizados, hecho con todo el amor y cuidado de nuestra chef pastelera <b> Victoria Ardon </b>",avatar:"./logoKinoko.jpg",social:[{name:"tiktok",url:"https://www.tiktok.com/@kinokocakesvale",username:"kinokocakesvale"},{name:"instagram",url:"https://www.instagram.com/kinokocakes/",username:""},{name:"pinterest",url:"https://www.pinterest.com.mx/KinokoCakesve/",username:""}],links:[{name:"Ordena tu Tortita por Whatsapp",url:"https://wa.me/+584241885700",color:"green",emoji:"💚"}],footer:"Hecho con amor Por Victoria Ardon 💜"};var p;function u(e){return k.social.find((t=>t.name===e)).url}o.src=k.avatar,n.textContent=k.name,a.textContent=k.nickname,r.textContent=k.overview,i.innerHTML=k.description,s.href=u("instagram"),c.href=u("tiktok"),l.href=u("pinterest"),p=k.links,m.innerHTML="",console.log(m),p.map((e=>{const t=document.createElement("section");t.classList.add(`bg-${e.color}-200`),t.classList.add("px-4","py-5","w-full","flex","justify-between");const o=document.createElement("a");o.classList.add(`text-${e.color}-600`),o.classList.add("text-sm","font-bold","text-center","hover:text-${link.color}-800","cursor-pointer"),o.href=e.url,o.setAttribute("target","_blank"),o.textContent=e.name;const n=document.createElement("span");n.textContent=e.emoji,t.appendChild(o),t.appendChild(n),m.appendChild(t)})),d.textContent=k.footer})();