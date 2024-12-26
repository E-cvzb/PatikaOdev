const loginScreen =document.getElementById('loginScreen');
const welcomeScreen =document.getElementById('welcomeScreen');
const nameInput =document.getElementById('nameInput');
const submitButton =document.getElementById('submitButton');
const welcomeMessage =document.getElementById('welcomeMessage');
const dateTime =document.getElementById('dateTime');
const backButton =document.getElementById('backButton');

submitButton.addEventListener('click' ,()=>{
    const name=nameInput.value.trim();
    if(name){
        const now =new Date();
        const days=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
        welcomeMessage.textContent=`Merhaba ${name}`;
        dateTime.textContent=`Bugün ${days[now.getDay()]},Saat: ${now.toLocaleTimeString()}`;
        loginScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    }
    else{
        alert('Lütfen isim giriniz');
    }
});
backButton.addEventListener('click',()=>{
    nameInput.value='';
    loginScreen.classList.remove('hidden');
    welcomeScreen.classList.add('hidden');
})