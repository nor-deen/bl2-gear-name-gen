'use strict';

var legendaries = ["Legendary Nurse", "Legendary Ranger", "Legendary Titan", "Neogenator", "Madhous!", "Legendary Berserker", "Legendary Psycho", "Legendary Reaper", "Legendary Sickle", "Legendary Torch", "Slayer of Terramorphous (Gunzerker)", "Gub", "Badaboom", "Hide of Terramorphous", "Slagga", "Sledge's Shotgun", "Veruc", "Legendary Engineer", "Legendary Soldier", "Slayer of Terramorphous (Commando)", "Bouncing Bonny", "Hornet", "Whisky Tango Foxtrot", "Pitchfork", "Emperor", "Blood of Terramorphous", "Legendary Cat", "Legendary Killer", "Legendary Mechromancer", "Legendary Roboteer", "Bee", "Nasty Surprise", "Quasar", "Logan's Gun", "Conference Call", "Invader", "Longbow", "Bitch", "Hammer Buster", "Legendary Hunter", "Legendary Sniper", "Slayer of Terramorphous (Assassin)", "Maggie", "Striker", "Skullmasher", "Legendary Binder", "Legendary Catalyst", "Legendary Ninja", "Legendary Siren", "Slayer of Terramorphous (Mechromancer)", "Slayer of Terramorphous (Psycho)", "Slayer of Terramorphous (Siren)", "Chain Lightning", "Fire Storm", "Leech", "Thunderball Fists", "Norfleet", "Pyrophobia", "Flame of the Firehawk", "Black Hole", "Impaler", "Volcano", "HellFire", "Fabled Tortoise", "Legendary Pointman", "Fastball", "Gunerang", "Bunny", "Cradle", "Deliverance", "Baby Maker", "KerBlaster", "Ogre", "Legendary Gunzerker", "Bonus Package", "Rolling Thunder", "Unkempt Harold", "Nukem", "Flakker", "Legendary Anarchist", "Legendary Hoarder", "Sham", "Transformer", "Shredifier", "Fire Bee", "Pandemic", "Storm Front", "Infinity", "Mongol", "Lyuda", "Amigo Sincero", "Hector's Paradise"],

    uniques = ["12 Pounder", "1340 Shield", "Aequitas", "Bad Touch", "Bane", "Basic Repeater", "Blockhead", "Bone Shredder", "Boom Puppy", "Breath of Terramorphous", "Buffalo", "Captain Blade's Otto Idol", "CHOPPER", "Chulainn", "Chère-amie", "Cobra", "Commerce", "Cracked Sash", "Creamer", "Crit", "Dahlminator", "Damned Cowboy", "Deadly Bloom", "Deputy's Badge", "Dog", "Elephant Gun", "Evil Smasher", "Fibber", "Fireball", "Tinderbox", "Fremington's Edge", "Fuster Cluck", "Good Touch", "Greed", "Grog Nozzle", "Gwen's Head", "Hail", "Heart Breaker", "Hive", "Hydra", "Jolly Roger", "Judge", "Kiss of Death", "Kitten", "Lady Fist", "Landscaper", "Lascaux", "Law", "Lightning Bolt", "Little Evie", "Love Thumper", "Lucrative Opportunity", "Magic Missile", "Manly Man Shield", "Midnight Star", "Morningstar", "Moxxi's Endowment", "Mysterious Amulet", "Octo", "Order", "Orphan Maker", "Pimpernel", "Pocket Rocket", "Pot O' Gold", "Rapier", "Rex", "Roaster", "Rough Rider", "RokSalt", "Rubi", "Sand Hawk", "Scorpio", "Sheriff's Badge", "Shotgun 1340", "Sloth", "Slow Hand", "Stinkpot", "Stomper", "SWORDSPLOSION", "Teapot", "Teeth of Terramorphous", "Afterburner", "Tidal Wave", "Trespasser", "Triquetra", "Twister", "Vault Hunter's Relic", "Veritas", "Yellow Jacket", "PBFG", "Topneaa", "Launcher (Tediore e-tech)", "Spiker (Bandit pistol)", "Dart  (Dahl pistol)", "Spiker (Dahl pistol)", "Dart (Hyperion pistol)", "Spiker (Hyperion pistol)", "Dart (Maliwan pistol)", "Spiker (Maliwan pistol)", "Dart (Tediore pistol)", "Spiker (Tediore pistol)", "Dart (Vladof pistol)", "Spiker (Vladof pistol)", "Plasma Caster (Bandit)", "Plasma Caster (Dahl)", "Plasma Caster (Hyperion)", "Plasma Caster (Maliwan)", "Plasma Caster (Tediore)", "Splasher Blashter", "Splatgun", "PRAZMA CANON", "Railer (Dahl sniper)", "Hybridification (Hyperion sniper)", "Railer (Maliwan sniper)", "Moloko (Vladof sniper)", "BlASSter (Bandit AR)", "Blaster (Dahl AR)", "Blaster (Vladof AR)", "Splasher Blashter (Bandit shotgun)", "Splatgun (Hyperion shotgun)", "Splatgun (Tediore shotgun)", "Contraband Sky Rocket", "Gearbox sniper", "Gearbox SMG", "Gearbox AR", "Level 1 basic repeater"],
    //only common guns ATM
    common = ["Pistal (Bandit pistol)", "Repeater (Dahl pistol)", "Apparatus (Hyperion pistol)", "Revolver (Jakobs pistol)", "Wheelgun (Jakobs pistol)", "Aegis (Maliwan pistol)", "Handgun (Tediore pistol)", "Hand Cannon (Torgue pistol)", "TMP (Vladof pistol)", "Magamum! (Bandit pistol)", "Magnum (Dahl pistol)", "Impact (Hyperion pistol)", "Widow Maker (Jakobs pistol)", "Animosity (Maliwan pistol)", "Biggun (Tediore pistol)", "Slapper (Torgue pistol)", "Troublemaker (Vladof pistol)", "smig (Bandit SMG)", "SMG (Dahl SMG)", "Projectile Convergence (Hyperion SMG)", "SubMalevolent Grace (Maliwan SMG)", "Subcompact MG (Tediore SMG)", "Burny (Bandit SMG)", "Beetle (Dahl SMG)", "Backburner (Hyperion SMG)", "Provacateur  (sic) (Maliwan SMG)", "Kindle (Tediore SMG)", "Shoky (Bandit SMG)", "Eel (Dahl SMG)", "Storm (Hyperion SMG)", "Vexation (Maliwan SMG)", "Spark (Tediore SMG)", "Barfy (Bandit SMG)", "Scorpion (Dahl SMG)", "Weisenheimer (Hyperion SMG)", "Venom (Maliwan SMG)", "Green (Tediore SMG)", "Slagy (Bandit SMG)", "Jackal (Dahl SMG)", "Wellness (Hyperion SMG)", "Revenant (Maliwan SMG)", "Chaff (Tediore SMG)", "longer ragne kilier (Bandit shotgun)", "Thinking (Hyperion shotgun)", "Longrider (Jakobs shotgun)", "Sportsman (Tediore shotgun)", "Stalker (Torgue shotgun)", "Stret Sweper (Bandit shotgun)", "Face Time (Hyperion shotgun)", "Coach Gun (Jakobs shotgun)", "Double Barrels! (Tediore shotgun)", "Pounder (Torgue shotgun)", "Skatergun (Bandit shotgun)", "Projectile Diversification (Hyperion shotgun)", "Scattergun (Jakobs shotgun)", "Home Security (Tediore shotgun)", "Bangstick (Torgue shotgun)", "Mashine Gun (Bandit AR)", "Rifle (Dahl AR)", "Rifle (Jakobs AR)", "Rifle (Torgue AR)", "Rifle (Vladof AR)", "Carbene (Bandit AR)", "Carbine (Dahl AR)", "Scarab (Jakobs AR)", "Root (Torgue AR)", "Renegade (Vladof AR)", "Sniper (Dahl sniper)", "Sniper Rifle (Hyperion sniper)", "Callipeen (Jakobs sniper)", "Snider (Maliwan sniper)", "Pooshka (Vladof sniper)", "Strike (Dahl sniper)", "Transaction (Hyperion sniper)", "Chinook (Jakobs sniper)", "Jericho (Maliwan sniper)", "Bratchny (Vladof sniper)", "Terror (Dahl sniper)", "Policy (Hyperion sniper)", "Muckamuck (Jakobs sniper)", "Corinthian (Maliwan sniper)", "Horrorshow (Vladof sniper)", "Scout (Dahl sniper)", "Competition (Hyperion sniper)", "Diaub (Jakobs sniper)", "Rakehell (Maliwan sniper)", "Droog (Vladof sniper)", "Launcher (Bandit launcher)", "Projectile (Maliwan launcher)", "Launcher (Tediore launcher)", "boom (Torgue launcher)", "RPG (Vladof launcher)", "area efect (Bandit launcher)", "Panorama (Maliwan launcher)", "Spread (Tediore launcher)", "Blaaa (Torgue launcher)", "Glory (Vladof launcher)", "Zooka! (Bandit launcher)", "Punishment (Maliwan launcher)", "Bazooka (Tediore launcher)", "Duuurp! (Torgue launcher)", "Hero (Vladof launcher)", "bombabarbardeer (Bandit launcher)", "Prowler (Maliwan launcher)", "Dispatch (Tediore launcher)", "Deee! (Torgue launcher)", "Vanquisher (Vladof launcher)", "Hed Shoter! (Bandit pistol)", "Anaconda (Dahl pistol)", "Vision (Hyperion pistol)", "Longarm (Jakobs pistol)", "Phobia (Maliwan pistol)", "Aimshot (Tediore pistol)", "Hole Puncher (Torgue pistol)", "Assassin (Vladof pistol)", "Ass Beeter! (Bandit pistol)", "Peacemaker (Dahl pistol)", "Leverage (Hyperion pistol)", "Iron (Jakobs pistol)", "Torment (Maliwan pistol)", "Power Shot (Tediore pistol)", "Rod (Torgue pistol)", "Fighter (Vladof pistol)", "Ratatater! (Bandit pistol)", "Negotiator (Dahl pistol)", "Synergy (Hyperion pistol)", "Umbrage (Maliwan pistol)", "Quickshot (Tediore pistol)", "Injector (Torgue pistol)", "Anarchist (Vladof pistol)", "Ass Beeter! (Bandit AR)", "Defender (Dahl AR)", "Lance (Torgue AR)", "Guerrilla (Vladof AR)", "Rokets! (Bandit AR)", "Grenadier (Dahl AR)", "Cannon (Jakobs AR)", "Torpedo (Torgue AR)", "Rocketeer (Vladof AR)", "Spinigun (Bandit AR)", "Minigun (Dahl AR)", "Gatling Gun (Jakobs AR)", "Spitter (Torgue AR)", "Spinigun (Vladof AR)", "rokgun (Bandit SMG)", "Fox (Dahl SMG)", "Presence (Hyperion SMG)", "Trance (Maliwan SMG)", "Special (Tediore SMG)", "Acurate smgg (Bandit SMG)", "Falcon (Dahl SMG)", "Transmurdera (Hyperion SMG)", "Gospel (Maliwan SMG)", "Ace (Tediore SMG)", "Room Clener (Bandit shotgun)", "Crowdsourcing (Hyperion shotgun)", "Bushwack (Jakobs shotgun)", "Triple Barrels! (Tediore shotgun)", "Hulk (Torgue shotgun)", "oberkil! (Bandit shotgun)", "Development (Hyperion shotgun)", "Quad (Jakobs shotgun)", "Shotgun Supreme! (Tediore shotgun)", "Ravager (Torgue shotgun)", "Bunch of nothing"],

    seraphs = ["Ahab", "Blood of the Seraphs", "Devastator", "Evolution", "Patriot", "Retcher", "Seraphim", "Tattler", "Big Boom Blaster", "Crossfire", "Hoplite", "Meteor Shower", "Might of the Seraphs", "O-Negative", "Pun-chee", "Sponge", "Breath of the Seraphs", "Hawk Eye", "Infection", "Interfacer", "Lead Storm", "Antagonist", "Blockade", "Florentine", "Omen", "Seeker", "Shadow of the Seraphs", "Stinger"],

    pearls = ["Bearcat", "Unforgiven", "Butcher", "Storm", "Avenger", "Stalker", "Sawbar", "Tunguska", "Bekah", "Godfinger", "Wanderlust", "Carnage"],
    
    rainbows = ["Antifection", "Easy Mode", "Hard Carry", "Hats Off", "Hazardous Hombre", "Hazardous Immaterial", "Hot Mama", "Infechnical", "Infection Cleaner", "Infector Gadget", "Mouthwash", "MY BLISTERS HAVE BLISTERS", "Nirvana", "Overcompensator", "Peak Opener", "Rainbow Runner", "Retainer", "Technicl Spectale", "The Electric Chair", "Toothpick", "Unicornsplosion", "Virulent Strain", "World Burn"];

var rarities = ["White", "White", "White", "White", "White", "Green", "Green", "Green", "Green", "Blue", "Blue", "Blue", "Purple", "Purple"];
exports.getLoot = function (req, res) {
    var tier = Math.random(),
        lootpool = [],
        isCommon = false,
        isGreen = false,
        isBlue = false,
        lastWhiteIndex = 106,
        lastGreenIndex = 158,
        shift = 0,
        itemIndex = 0,
        item = "";
        
    //29%
    if (tier > 0.71) {
        lootpool = common;
        isCommon = true;
    }
    //32%
    else if (tier > 0.39)
        lootpool = uniques;
    //22%
    else if (tier > 0.17)
        lootpool = legendaries;
    //7%
    else if (tier > 0.1)
        lootpool = seraphs;
    //5%
    else if (tier > 0.05)
        lootpool = rainbows;
    //5%
    else
        lootpool = pearls;

    itemIndex = Math.floor(Math.random() * (lootpool.length - 0.00001));
    item = lootpool[itemIndex];

    isGreen = itemIndex > lastWhiteIndex && itemIndex <= lastGreenIndex;
    isBlue = itemIndex > lastGreenIndex;

    if (isBlue)
        shift = 9;
    else if (isGreen)
        shift = 5;

    if (isCommon && itemIndex < (lootpool.length - 1))
        item = rarities[Math.floor(Math.random() * (rarities.length - (0.00001 + shift))) + shift] + " " + item;
    //item = item[0].match(/[aeyuioAEYUIO]/) ? "an " + item : "a " + item;

    res.send(item);
};