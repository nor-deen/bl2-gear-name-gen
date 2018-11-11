'use strict';

var legendaries = ["Legendary Nurse", "Legendary Ranger", "Legendary Titan", "Neogenator", "Madhous!", "Legendary Berserker", "Legendary Psycho", "Legendary Reaper", "Legendary Sickle", "Legendary Torch", "Slayer of Terramorphous (Gunzerker)", "Gub", "Badaboom", "Hide of Terramorphous", "Slagga", "Sledge's Shotgun", "Veruc", "Legendary Engineer", "Legendary Soldier", "Slayer of Terramorphous (Commando)", "Bouncing Bonny", "Hornet", "Whisky Tango Foxtrot", "Pitchfork", "Emperor", "Blood of Terramorphous", "Legendary Cat", "Legendary Killer", "Legendary Mechromancer", "Legendary Roboteer", "Bee", "Nasty Surprise", "Quasar", "Logan's Gun", "Conference Call", "Invader", "Longbow", "Bitch", "Hammer Buster", "Legendary Hunter", "Legendary Sniper", "Slayer of Terramorphous (Assassin)", "Maggie", "Striker", "Skullmasher", "Legendary Binder", "Legendary Catalyst", "Legendary Ninja", "Legendary Siren", "Slayer of Terramorphous (Mechromancer)", "Slayer of Terramorphous (Psycho)", "Slayer of Terramorphous (Siren)", "Chain Lightning", "Fire Storm", "Leech", "Thunderball Fists", "Norfleet", "Pyrophobia", "Flame of the Firehawk", "Black Hole", "Impaler", "Volcano", "HellFire", "Fabled Tortoise", "Legendary Pointman", "Fastball", "Gunerang", "Bunny", "Cradle", "Deliverance", "Baby Maker", "KerBlaster", "Ogre", "Legendary Gunzerker", "Bonus Package", "Rolling Thunder", "Unkempt Harold", "Nukem", "Flakker", "Legendary Anarchist", "Legendary Hoarder", "Sham", "Transformer", "Shredifier", "Fire Bee", "Pandemic", "Storm Front", "Infinity", "Mongol", "Lyuda"],
    uniques = ["12 Pounder", "1340 Shield", "Aequitas", "Bad Touch", "Bane", "Basic Repeater", "Blockhead", "Bone Shredder", "Boom Puppy", "Breath of Terramorphous", "Buffalo", "Captain Blade's Otto Idol", "CHOPPER", "Chulainn", "Chère-amie", "Cobra", "Commerce", "Cracked Sash", "Creamer", "Crit", "Dahlminator", "Damned Cowboy", "Deadly Bloom", "Deputy's Badge", "Dog", "Elephant Gun", "Evil Smasher", "Fibber", "Fireball", "Tinderbox", "Fremington's Edge", "Fuster Cluck", "Good Touch", "Greed", "Grog Nozzle", "Gwen's Head", "Hail", "Heart Breaker", "Hive", "Hydra", "Jolly Roger", "Judge", "Kiss of Death", "Kitten", "Lady Fist", "Landscaper", "Lascaux", "Law", "Lightning Bolt", "Little Evie", "Love Thumper", "Lucrative Opportunity", "Magic Missile", "Manly Man Shield", "Midnight Star", "Morningstar", "Moxxi's Endowment", "Mysterious Amulet", "Octo", "Order", "Orphan Maker", "Pimpernel", "Pocket Rocket", "Pot O' Gold", "Rapier", "Rex", "Roaster", "Rough Rider", "RokSalt", "Rubi", "Sand Hawk", "Scorpio", "Sheriff's Badge", "Shotgun 1340", "Sloth", "Slow Hand", "Stinkpot", "Stomper", "SWORDSPLOSION", "Teapot", "Teeth of Terramorphous", "Afterburner", "Tidal Wave", "Trespasser", "Triquetra", "Twister", "Vault Hunter's Relic", "Veritas", "Yellow Jacket", "Anarchist", "PBFG", "Topneaa", "Launcher (Tediore e-tech)", "Spiker", "Dart", "Plasma Caster", "oberkil!", "Development", "Quad", "Shotgun Supreme!", "Ravager", "Splasher Blashter", "Splatgun", "Room Clener", "Crowdsourcing", "Bushwack", "Triple Barrels!", "Hulk", "PRAZMA CANON", "Contraband Sky Rocket"],
    garbage = ["Bandit pistol", "Dahl pistol", "Hyperion pistol", "Jakobs pistol", "Maliwan pistol", "Tediore pistol", "Torgue pistol", "Vladof pistol", "Ass Beeter!", "Bandit SMG", "Dahl SMG", "Hyperion SMG", "Maliwan SMG", "Tediore SMG", "longer ragne kilier", "Thinking", "Longrider", "Sportsman", "Stalker", "Stret Sweper", "Face Time", "Coach Gun", "Double Barrels!", "Pounder", "Skatergun", "Projectile Diversification", "Scattergun", "Home Security", "Bangstick", "Bandit AR", "Dahl AR", "Jakobs AR", "Torgue AR", "Vladof AR", "Rokets!", "Grenadier", "Cannon", "Torpedo", "Rocketeer", "Gatling Gun", "BlASSter", "Blaster", "Dahl Sniper", "Hyperion Sniper", "Callipeen", "Snider", "Pooshka", "Chinook", "Jericho", "Bratchny", "Muckamuck", "Corinthian", "Horrorshow", "Diaub", "Rakehell", "Droog", "Railer", "Hybridification", "Moloko", "Bandit launcher", "Maliwan launcher", "Tediore launcher", "Torgue launcher", "Vladof launcher","Gearbox sniper","Gearbox SMG,Gearbox AR","Level 1 basic repeater","Bunch of nothing"],
    seraphs = ["Ahab", "Blood of the Seraphs", "Devastator", "Evolution", "Patriot", "Retcher", "Seraphim", "Tattler", "Big Boom Blaster", "Crossfire", "Hoplite", "Meteor Shower", "Might of the Seraphs", "O-Negative", "Pun-chee", "Sponge", "Breath of the Seraphs", "Hawk Eye", "Infection", "Interfacer", "Lead Storm", "Antagonist", "Blockade", "Florentine", "Omen", "Seeker", "Shadow of the Seraphs", "Stinger"],
    pearls = ["Bearcat", "Unforgiven", "Butcher", "Storm", "Avenger", "Stalker", "Sawbar", "Tunguska", "Bekah", "Godfinger", "Wanderlust", "Carnage"];

exports.getLoot = function (req, res) {
    var tier = Math.random();
    var lootpool = [];
    //39%
    if (tier > 0.61)
        lootpool = garbage;
    //30%
    else if (tier > 0.31)
        lootpool = uniques;
    //18%
    else if( tier > 0.13)
        lootpool = legendaries;
    //8%
    else if(tier > 0.05)
        lootpool = seraphs;
    //5%
    else 
        lootpool = pearls;
    var itemIndex = Math.floor(Math.random() * (lootpool.length - 1));
    var item = lootpool[itemIndex];
    res.send(item);
};