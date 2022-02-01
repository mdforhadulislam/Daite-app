let addMoreButton=document.querySelector('.container__main__acitivity__addbox')
let tableBody=document.querySelector('.container__main__acitivity__tabel')
let inputTime=document.querySelector('.container__main__input__time')
let inputTimeSaveBtn=document.querySelector('.container__main__input__time__form__btn__seve')
let inputTimeCancelBtn=document.querySelector('.container__main__input__time__form__btn__cencel')

let saturdayTimeValue;
let sundayTimeValue;
let mondayTimeValue;
let tuesdayTimeValue;
let wednestdayTimeValue;
let thursdayTimeValue;
let fridayTimeValue;


let icon=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="40" viewBox="0 0 48 48" style="display: block;margin: auto;">
<defs>
  <filter id="Ellipse_690" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
    <feOffset dy="3" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feFlood flood-opacity="0.161"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g id="Group_9547" data-name="Group 9547" transform="translate(-1498.125 -1225.141)">
  <g transform="matrix(1, 0, 0, 1, 1498.13, 1225.14)" filter="url(#Ellipse_690)">
    <circle id="Ellipse_690-2" data-name="Ellipse 690" cx="15" cy="15" r="15" transform="translate(9 6)" fill="#fff"/>
  </g>
  <g id="checked" transform="translate(1514.65 1240.199)">
    <path id="Path_5142" data-name="Path 5142" d="M112.521,123.615l-8.705,9.543a1.43,1.43,0,0,1-2.176,0l-3.683-4.1a1.481,1.481,0,1,1,2.176-2.009l2.595,2.93,7.617-8.287a1.468,1.468,0,0,1,2.093-.084A1.443,1.443,0,0,1,112.521,123.615Z" transform="translate(-97.59 -121.206)" fill="#259e17"/>
  </g>
</g>
</svg> `

addMoreButton.onclick=()=>{
    let ul=document.createElement('ul')
    ul.innerHTML=` <li><input type="text"></li>
                                <li><button type="button">Adjust Time</button></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>`
    tableBody.appendChild(ul)
    
let adjustTimeButton=document.querySelectorAll('.container__main__acitivity__tabel ul li button')

for(let item=0;item<=adjustTimeButton.length;item++){
    adjustTimeButton[item].addEventListener("click",()=>{
        inputTime.style.margin=`0px 0px 0px 0px`
        inputTimeSaveBtn.onclick=()=>{

            
let saturdayCheckBox=document.querySelector('#saturday')
let sundayCheckBox=document.querySelector('#sunday')
let mondayCheckBox=document.querySelector('#monday')
let tuesdayCheckBox=document.querySelector('#tuesday')
let wednestdayCheckBox=document.querySelector('#wednestday')
let thursdayCheckBox=document.querySelector('#thursday')
let fridayCheckBox=document.querySelector('#friday')

let saturdayTime=document.querySelector('#saturdayTime')
let sundayTime=document.querySelector('#sundayTime')
let mondayTime=document.querySelector('#mondayTime')
let tuesdayTime=document.querySelector('#tuesdayTime')
let wednestdayTime=document.querySelector('#wednestdayTime')
let thursdayTime=document.querySelector('#thursdayTime')
let fridayTime=document.querySelector('#fridayTime')

if(saturdayCheckBox.checked &&saturdayTime.value){
    saturdayTimeValue=icon+saturdayTime.value
    saturdayTime.value=""
    saturdayCheckBox.checked=""

}
if(sundayCheckBox.checked &&sundayTime.value){
    sundayTimeValue=icon+sundayTime.value 
    sundayTime.value=""
    sundayCheckBox.checked=""
}
if(mondayCheckBox.checked &&mondayTime.value){
    mondayTimeValue=icon+mondayTime.value
    mondayTime.value=""
    mondayCheckBox.checked=""
}

if(tuesdayCheckBox.checked &&tuesdayTime.value){
    tuesdayTimeValue=icon+tuesdayTime.value
    tuesdayTime.value=""
    tuesdayCheckBox.checked=""
}


if(wednestdayCheckBox.checked &&wednestdayTime.value){
    wednestdayTimeValue=icon+wednestdayTime.value
    wednestdayTime.value=""
    wednestdayCheckBox.checked=""
}

if(thursdayCheckBox.checked &&thursdayTime.value){
    thursdayTimeValue=icon+thursdayTime.value
    thursdayTime.value=""
    thursdayCheckBox.checked=""
}

if(fridayCheckBox.checked &&fridayTime.value){
    fridayTimeValue=icon+fridayTime.value
    fridayTime.value=""
    fridayCheckBox.checked=""
}
adjustTimeButton[item].parentElement.parentElement.children[2].innerHTML=saturdayTimeValue?saturdayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[3].innerHTML=sundayTimeValue?sundayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[4].innerHTML=mondayTimeValue?mondayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[5].innerHTML=tuesdayTimeValue?tuesdayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[6].innerHTML=wednestdayTimeValue?wednestdayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[7].innerHTML=thursdayTimeValue?thursdayTimeValue:''
adjustTimeButton[item].parentElement.parentElement.children[8].innerHTML=fridayTimeValue?fridayTimeValue:''

saturdayTimeValue='';
sundayTimeValue='';
 mondayTimeValue='';
tuesdayTimeValue='';
 wednestdayTimeValue='';
 thursdayTimeValue='';
 fridayTimeValue='';

 inputTime.style.margin=`-700px 0px 0px 0px`
        }
    })
       
}

}

inputTimeCancelBtn.onclick=()=>{
    inputTime.style.margin=`-700px 0px 0px 0px`
}