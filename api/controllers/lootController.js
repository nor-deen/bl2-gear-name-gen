'use strict';

var legendaries = ["Legendary Nurse", "Legendary Ranger", "Legendary Titan", "Neogenator", "Madhous!", "Legendary Berserker", "Legendary Psycho", "Legendary Reaper", "Legendary Sickle", "Legendary Torch", "Slayer of Terramorphous (Gunzerker)", "Gub", "Badaboom", "Hide of Terramorphous", "Slagga", "Sledge's Shotgun", "Veruc", "Legendary Engineer", "Legendary Soldier", "Slayer of Terramorphous (Commando)", "Bouncing Bonny", "Hornet", "Whisky Tango Foxtrot", "Pitchfork", "Emperor", "Blood of Terramorphous", "Legendary Cat", "Legendary Killer", "Legendary Mechromancer", "Legendary Roboteer", "Bee", "Nasty Surprise", "Quasar", "Logan's Gun", "Conference Call", "Invader", "Longbow", "Bitch", "Hammer Buster", "Legendary Hunter", "Legendary Sniper", "Slayer of Terramorphous (Assassin)", "Maggie", "Striker", "Skullmasher", "Legendary Binder", "Legendary Catalyst", "Legendary Ninja", "Legendary Siren", "Slayer of Terramorphous (Mechromancer)", "Slayer of Terramorphous (Psycho)", "Slayer of Terramorphous (Siren)", "Chain Lightning", "Fire Storm", "Leech", "Thunderball Fists", "Norfleet", "Pyrophobia", "Flame of the Firehawk", "Black Hole", "Impaler", "Volcano", "HellFire", "Fabled Tortoise", "Legendary Pointman", "Fastball", "Gunerang", "Bunny", "Cradle", "Deliverance", "Baby Maker", "KerBlaster", "Ogre", "Legendary Gunzerker", "Bonus Package", "Rolling Thunder", "Unkempt Harold", "Nukem", "Flakker", "Legendary Anarchist", "Legendary Hoarder", "Sham", "Transformer", "Shredifier", "Fire Bee", "Pandemic", "Storm Front", "Infinity", "Mongol", "Lyuda"],
    uniques = ["12 Pounder", "1340 Shield", "Aequitas", "Bad Touch", "Bane", "Basic Repeater", "Blockhead", "Bone Shredder", "Boom Puppy", "Breath of Terramorphous", "Buffalo", "Captain Blade's Otto Idol", "CHOPPER", "Chulainn", "Chère-amie", "Cobra", "Commerce", "Cracked Sash", "Creamer", "Crit", "Dahlminator", "Damned Cowboy", "Deadly Bloom", "Deputy's Badge", "Dog", "Elephant Gun", "Evil Smasher", "Fibber", "Fireball", "Tinderbox", "Fremington's Edge", "Fuster Cluck", "Good Touch", "Greed", "Grog Nozzle", "Gwen's Head", "Hail", "Heart Breaker", "Hive", "Hydra", "Jolly Roger", "Judge", "Kiss of Death", "Kitten", "Lady Fist", "Landscaper", "Lascaux", "Law", "Lightning Bolt", "Little Evie", "Love Thumper", "Lucrative Opportunity", "Magic Missile", "Manly Man Shield", "Midnight Star", "Morningstar", "Moxxi's Endowment", "Mysterious Amulet", "Octo", "Order", "Orphan Maker", "Pimpernel", "Pocket Rocket", "Pot O' Gold", "Rapier", "Rex", "Roaster", "Rough Rider", "RokSalt", "Rubi", "Sand Hawk", "Scorpio", "Sheriff's Badge", "Shotgun 1340", "Sloth", "Slow Hand", "Stinkpot", "Stomper", "SWORDSPLOSION", "Teapot", "Teeth of Terramorphous", "Afterburner", "Tidal Wave", "Trespasser", "Triquetra", "Twister", "Vault Hunter's Relic", "Veritas", "Yellow Jacket", "Contraband Sky Rocket"],
    garbage = ["Bandit pistol", "Dahl pistol", "Hyperion pistol", "Jakobs pistol", "Maliwan pistol", "Tediore pistol", "Torgue pistol", "Vladof pistol", "Ass Beeter!", "Bandit SMG", "Dahl SMG", "Hyperion SMG", "Maliwan SMG", "Tediore SMG", "longer ragne kilier", "Thinking", "Longrider", "Sportsman", "Stalker", "Stret Sweper", "Face Time", "Coach Gun", "Double Barrels!", "Pounder", "Skatergun", "Projectile Diversification", "Scattergun", "Home Security", "Bangstick", "Bandit AR", "Dahl AR", "Jakobs AR", "Torgue AR", "Vladof AR", "Rokets!", "Grenadier", "Cannon", "Torpedo", "Rocketeer", "Gatling Gun", "BlASSter", "Blaster", "Dahl Sniper", "Hyperion Sniper", "Callipeen", "Snider", "Pooshka", "Chinook", "Jericho", "Bratchny", "Muckamuck", "Corinthian", "Horrorshow", "Diaub", "Rakehell", "Droog", "Railer", "Hybridification", "Moloko", "Bandit launcher", "Maliwan launcher", "Tediore launcher", "Torgue launcher", "Vladof launcher"];

exports.getLoot = function (req, res) {
    var tier = Math.random();
    var lootpool = [];
    if (tier > 0.57)
        lootpool = garbage;
    else if (tier > 0.23)
        lootpool = uniques;
    else
        lootpool = legendaries;
    var itemIndex = Math.floor(Math.random() * (lootpool.length - 1));
    var item = {name:lootpool[itemIndex]};
    res.json(item);
};