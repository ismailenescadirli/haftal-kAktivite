let haftalikAktivite=[];
let gecerliGunler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
for (let i = 0; i < 7 ; i++) {
  const gun =gecerliGunler[i];
  let aktivite=prompt(gun + " günü içinde yapmak istediğiniz aktiviteyi giriniz.");
  haftalikAktivite[i] = {
    gun: gun,
    aktivite: aktivite
}
}

console.log("Haftalık Aktivite Çizelgesi:");
for (let i = 0; i < haftalikAktivite.length; i++) {
    console.log(haftalikAktivite[i].gun + ": " + haftalikAktivite[i].aktivite);
}