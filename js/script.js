//Christofer Mix 02/19/2015 Conditionals
var PokemonHealth = 300;
var PokemonStatus;
PokemonStatus = (PokemonHealth) ? "Your opponents health is full." : "Your opponents pokemon is weakened.";
console.log(PokemonStatus);
alert("The opponents pokemon has " + PokemonHealth + "HP left.");
alert(PokemonStatus);
var PokemonAttackType = confirm("Is the type of attack a fire type attack?");
//If the attack is a fire type it will be doubled, if not the it will be halved.
var PokemonAttackPP = prompt("How many PP does your pokemon have left?");
//If your pokemon doesn't have at least 1PP it cannot attack.
var PokemonAttackPower = prompt("What is the Pokemon\'s attack power?");
//This will determine how much damage your pokemon will do.
console.log("The opponents pokemon has " + PokemonHealth + "HP left.");
console.log("Your Pokemon has " + PokemonAttackPP + "PP left.");
if(PokemonAttackType){
    PokemonAttackBonus = PokemonAttackPower * 2;
    console.log("Your attack was super effective!");
    alert("Your attack was super effective!");
}else{
    PokemonAttackBonus = PokemonAttackPower / 2;
    console.log("Your Attack was not very effective!");
    alert("Your Attack was not very effective!");
}
//The attack type determines if the attack does double or half the original damage would
alert("Your Pokemon\'s attack did " + PokemonAttackBonus + "damage!");
console.log("Your Pokemon did " + PokemonAttackBonus + "damage!");
if(PokemonAttackPP > 0 && PokemonAttackBonus >= 300){
    console.log("Your opponents pokemon fainted!");
    alert("Your opponents pokemon fainted!")
}else{
    console.log("You did not knock out the opponent\'s pokemon!");
    alert("You did not knock out the opponent\'s pokemon!")
}
//If the doubled or halved damage equals or exceeds 300 damage the pokemon is knocked out.
