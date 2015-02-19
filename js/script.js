//Christofer Mix 02/19/2015 Conditionals
var PokemonHealth = 300;
alert("The opponents pokemon has " + PokemonHealth + "HP left.");
var PokemonAttackType = confirm("Is the type of attack a fire type attack?");
var PokemonAttackPP = prompt("How many PP does your pokemon have left?");
var PokemonAttackPower = prompt("What is the Pokemon's attack power?");
console.log("The opponents pokemon has " + PokemonHealth + "HP left.");
console.log("Your Pokemon has " + PokemonAttackPP + "PP left.");
if(PokemonAttackType){
    PokemonAttackBonus = PokemonAttackPower * 2;
    console.log("Your attack was super effective!")
    alert("Your attack was super effective!")
}else{
    PokemonAttackBonus = PokemonAttackPower / 2;
    console.log("Your Attack was not very effective!")
    alert("Your Attack was not very effective!")
}
console.log("Your Pokemon did " + PokemonAttackBonus + " Damage!");
if(PokemonAttackPP > 1 && PokemonAttackBonus >= 300){
    console.log("Your opponents pokemon fainted!")
}else{
    console.log("You did not knock out the opponents pokemon!")
}
