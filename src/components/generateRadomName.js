import { namesFemale, namesMale } from "../utils/helper";

let namesList = namesFemale.concat(namesMale)

 function generateRandomName (){
    return namesList[Math.floor(Math.random() * namesList.length)];
}


export default generateRandomName ;