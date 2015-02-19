//Christofer Mix 02/19/2015 Conditionals
var PokemonHealth = 300;
var PokemonAttackType = confirm("Is the type of attack a fire type attack?");
var PokemonAttackPP = prompt("How many PP does your pokemon have left?");
var PokemonAttackPower = prompt("What is the Pokemon's attack power?");
console.log("The opponants pokemon has" + PokemonHealth+ "HP left.");
console.log("Your Pokemon has" + PokemonAttackPP + "PP left.");
console.log(PokemonAttackPower);
if(PokemonAttackType){
    PokemonAttackBonus = PokemonAttackPower * 2
    console.log("Your attack was super effective!")
}else{
    PokemonAttackBonus = PokemonAttackPower / 2
    console.log("Your Attack was not very effective!")
};
console.log(PokemonAttackBonus)
if(PokemonAttackPP > 1 && PokemonAttackBonus >= 300){
    console.log("Your opponents pokemon fainted!")
}else{
    console.log("You did not knock out the opponents pokemon!")
};
