let rubriken = document.querySelector("#rubrik");

function klickad() {
    console.log(rubriken.textContent);
    const text = rubriken.textContent;
    
    let text_fält = document.querySelector("#text_fält");
    rubriken.textContent = text_fält.value;
    console.log("rubrikens text:" + text_fält.value);
    text_fält.value="";
    text_fält.focus();
}

const färger = ["Orange","Tomato","Blue","Green","SlateBlue","Violet","White"];
let bg_index = 0;
let h1_element = document.querySelector("h1");
    
function changebg()
{
    console.log("changebg färger[bg_index]:", färger[bg_index]);
    document.body.style.backgroundColor = färger [bg_index];
    bg_index++;
    
    let body_element = document.querySelector("body");
    if (bg_index == färger.length)
    {
        bg_index = 0;
    }
}

const skivor = ["album5.jpg","album2.jpg","album3.jpg"];
const sökväg = "./img/";
let skiv_index = 1;

function byt_skiva()
{
    console.log("byt_skiva: "+sökväg+skivor[skiv_index]);
    let img_elementet = document.querySelector("img");
    if (skiv_index>=skivor.length)
    {
        skiv_index = 0;
    }
    let ny_sökväg = sökväg+skivor[skiv_index];
    img_elementet.setAttribute("src", ny_sökväg)
    skiv_index++;
}
