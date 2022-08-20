
function selecthandle(){
    document.querySelectorAll('.select__header').forEach(

        (item) =>{
            console.log(item)
            item.addEventListener('click',(e)=>{
                document.querySelector('.select').classList.toggle('is-active')
                document.querySelector('.select__icon').classList.toggle('is-active')
            })
        }
    )
    document.querySelectorAll('.select__item').forEach((item)=>{
        item.addEventListener('click',(e)=>{
            document.querySelector('.select__current').innerText = item.innerText;
            document.querySelector('.select').classList.toggle('is-active')
            document.querySelector('.select__icon').classList.toggle('is-active')
            color = document.querySelector('.select__current').innerText.toLowerCase().replace(' ','')
            console.log(color)
            if (color =='color'){
                color = "black"
            }
            //console.log(e.target.value)
            let png = generateImg(document.getElementsByTagName('input')[0].value,color,type,'#fff')
            document.querySelector('.download').href = png
        })
    })
    document.querySelectorAll('.select__item').forEach((item)=>{
        let color = item.children[0].innerText.toLowerCase().replace(' ','')
        //console.log(color)
        item.children[1].style = `background-color:${color}`
    })
}
function tabs(){
    document.querySelectorAll('.selecttype')[0].classList.toggle('is-active')
    document.querySelectorAll('.Website')[0].classList.toggle('is-active')
    document.querySelectorAll('.selecttype').forEach((item) =>{
        item.addEventListener('click',(e)=>{
            for (x of document.querySelectorAll('.is-active')){
                x.classList.toggle('is-active')
            }

            e.target.classList.toggle('is-active')
            let text = e.target.children[0].innerText.replace(' ','-')
            document.querySelector('.'.concat(text)).classList.toggle('is-active')

        })
    })
}
function wifiqr(){
    let [SSID,password,encryption] = Array.from(document.querySelectorAll('.wifi-data')).map((x)=>x.value)
    if (!SSID ||!password||!encryption)return
    if (encryption==='Encryption'){
        return
    }

//WIFI:S:<SSID>;T:<WPA2>;P:<password>;;
    let png = generateImg(`WIFI:S:<${SSID}>;T:<${encryption}>;P:<${password}>;;`,color,type,'#fff')
    document.querySelector('.download').href = png
    document.getElementById('qrimage').src = generateImg(`WIFI:S:<${SSID}>;T:<${encryption}>;P:<${password}>;;`,'#fff','png');
}
function geoqr(){
    //geo:40.71872,-73.98905,100
    let [lat,long] = Array.from(document.querySelectorAll('.geo-data')).map((x)=>x.value)
    if (!lat || !long) return
    let png = generateImg(`geo:${(+lat).toFixed(5)},${(+long).toFixed(5)},100`,color,type,'#fff')
    document.querySelector('.download').href = png
    document.getElementById('qrimage').src = generateImg(`geo:${(+lat).toFixed(5)},${(+long).toFixed(5)},100`,'#fff','png');
}
function tgqr(){
    let username = document.querySelector('.tg-data').value
    if (!username) return
    let png = generateImg(`https://t.me/${username}`,color,type,'#fff')
    document.querySelector('.download').href = png
    document.getElementById('qrimage').src = generateImg(`https://t.me/${username}`,'#fff','png');

}
function generateImg(text,color,format,backcolor = 'rgb(10,3,58)'){
    let png =QRCode.generatePNG(text,{modulesize:25,color:color,backcolor:backcolor,format:format})

    return png
}
function onload(){

    type = 'png';
    color = 'black'
    document.querySelectorAll('.inputtext').forEach((item) =>{
        item.addEventListener('keyup',(e) =>{
            type = document.querySelector('.imagetype--selected').textContent.toLowerCase()
            color = document.querySelector('.select__current').textContent.toLowerCase().replace(' ','')
            if (color =='color'){
                color = "black"
            }

            let png = generateImg(e.target.value,color,type,'#fff')
            document.querySelector('.download').href = png
            document.getElementById('qrimage').src = generateImg(e.target.value,'#fff','png');

        })



    })

    document.getElementById('PNG').className = 'imagetype--selected';
    Array.from(document.querySelectorAll('.imagetype, .imagetype--selected')).forEach((E)=>{
        E.addEventListener('click',(x)=>{
            if (document.querySelector('.imagetype--selected')){
                document.querySelector('.imagetype--selected').className = 'imagetype';
            }
            E.className ='imagetype--selected'
            type = document.querySelector('.imagetype--selected').textContent.toLowerCase()


        })
    })
    tabs()
    let png = generateImg(document.getElementsByTagName('input')[0].value,color,type,'#fff')
    document.querySelector('.download').href = png
    document.getElementById('qrimage').src = generateImg('https://github.com/Swerwe','#fff','png');
    document.getElementById('wifi-button').addEventListener('click',wifiqr)
    document.getElementById('geo-button').addEventListener('click',geoqr)
    document.getElementById('tg-button').addEventListener('click',tgqr)
}
selecthandle()
onload()
//https://github.com/Swerwe

