const country = document.getElementsByClassName ("country");

let benin = country[0];

function clickAlert() {
alert (`Benin, a French-speaking West African nation, is a birthplace of the vodun (or “voodoo”) religion and home to the former Dahomey Kingdom from circa 1600–1900. In Abomey, Dahomey's former capital, the Historical Museum occupies two royal palaces with bas-reliefs recounting the kingdom’s past and a throne mounted on human skulls. To the north, Pendjari National Park offers safaris with elephants, hippos and lions.`);
}
benin.addEventListener(`click`, clickAlert);

let burkina = country[1];

function clickAlert() {
alert (`Burkina Faso is a landlocked country in West Africa that covers an area of around 274,200 square kilometres and is bordered by Mali to the northwest, Niger to the northeast, Benin to the southeast, Togo and Ghana to the south, and the Ivory Coast to the southwest.`);
}
burkina.addEventListener(`click`, clickAlert);

let capeVerde = country[2];

function clickAlert() {
alert (`Cape Verde or Cabo Verde, officially the Republic of Cabo Verde, is an archipelago and island country in the central Atlantic Ocean, consisting of ten volcanic islands with a combined land area of about 4,033 square kilometres.`);
}
capeVerde.addEventListener(`click`, clickAlert);
