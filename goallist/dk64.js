 var bingoList = []; //number represents difficulty 
	bingoList[1] = [
		{ name: "Baboon Blast GB in Jungle Japes", types: ["japes","donkey"] },
		{ name: "50 Bananas in Gloomy Galleon", types: ["gloomy","banana","gloomybananas"] },
		{ name: "Angry Aztec Lobby GB", types: ["isles","bonus","tiny"] },
		{ name: "100 Bananas in Jungle Japes", types: ["japes","banana","japesbananas"] },
		{ name: "5 Blueprints", types: ["bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "50 bananas in Creepy Castle", types: ["castle","banana","castlebananas"] },
		{ name: "Open Gloomy Galleon Treasure Room", types: ["gloomy"] },
		{ name: "Activate Production Room in Factory", types: ["factory","donkey"] },
		{ name: "Key 2", types: ["key"] },
		{ name: "1 GB on each kong", types: ["japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
	];
	bingoList[2] = [
		{ name: "3 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "2 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
		{ name: "Complete 3 Baboon Blasts", types: ["donkey","blast"] },
		{ name: "100 Bananas in Angry Aztec", types: ["aztec","banana","aztecbananas"] },
		{ name: "3 Donkey Blueprints", types: ["donkey","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "3 Diddy Blueprints", types: ["diddy","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "5 GBs in Jungle Japes", types: ["japes","japesgb"] },
		{ name: "150 Bananas in any Level", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "50 Bananas in Crystal Caves", types: ["cave","banana","cavebananas"] },
		{ name: "50 Bananas in Fungi Forest", types: ["banana","fungibananas","fungi"] },
		{ name: "Gloomy Galleon Battle Crown", types: ["gloomy","gloomycrown"] }
	];
	bingoList[3] = [
		{ name: "Baboon Blast GB in Crystal Caves", types: ["cave","donkey","blast"] },
		{ name: "Seal Race GB", types: ["donkey","gloomy","race"] },
		{ name: "Shoot 10 Banana Balloons", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "Galleon Submarine GB", types: ["gloomy","bonus","tiny"] },
		{ name: "Tile Flipping GB in Crystal Caves", types: ["cave","lanky"] },
		{ name: "100 Bananas in Frantic Factory", types: ["factory","banana","factorybananas"] },
		{ name: "Cannon Game GB in Gloomy Galleon", types: ["chunky","gloomy"] },
		{ name: "Kill Giant Kosha", types: ["cave"] },
		{ name: "Frantic Factory Battle Crown", types: ["factory","factorycrown"] },
		{ name: "Vulture GB", types: ["diddy","aztec"] }
	];
	bingoList[4] = [
		{ name: "100 Bananas in Gloomy Galleon", types: ["banana","gloomybananas","gloomy"] },
		{ name: "Key 4", types: ["key"] },
		{ name: "No Bananaport Warps", types: ["restrict","restrict_warp"] },
		{ name: "Crystal Caves Battle Crown", types: ["cave","cavecrown"] },
		{ name: "Llama Temple Matching Game GB", types: ["lanky","aztec"] },
		{ name: "Both Banana Fairies in Gloomy Galleon", types: ["gloomy","fairy"] },
		{ name: "5 GBs in DK Isles", types: ["islesgb","isles"] },
		{ name: "100 Bananas in Creepy Castle", types: ["banana","castlebananas","castle"] },
		{ name: "Diddy Minecart GB", types: ["japes","diddy","race"] },
		{ name: "25 Coins with all Kongs", types: ["coin","restrict_coin"] }
	];
	bingoList[5] = [
		{ name: "All Caged GBs in Jungle Japes", types: ["japesgb","japes"] },
		{ name: "Key 3", types: ["key","key3"] },
		{ name: "Fungi Forest Battle Crown", types: ["fungi","fungicrown"] },
		{ name: "Turn on Lighthouse", types: ["gloomy","donkey"] },
		{ name: "3 Chunky Blueprints", types: ["chunky","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Activate All Warps in Jungle Japes", types: ["japes","japeswarp"] },
		{ name: "Activate All Warps in Frantic Factory", types: ["factory","factorywarp"] },
		{ name: "5 Banana Fairies", types: ["fairy","key8"] },
		{ name: "3 Lanky Blueprints", types: ["lanky","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "All 100 Bananas with any Kong in any level", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] }
	];
	bingoList[6] = [
		{ name: "No Pause Exit", types: ["restrict"] },
		{ name: "100 Bananas in Crystal Caves", types: ["cave","banana","cavebananas"] },
		{ name: "Pound the X GB in DK Isles", types: ["chunky","isles"] },
		{ name: "Giant Toy Monster GB", types: ["chunky","factory"] },
		{ name: "All Blueprints in Frantic Factory", types: ["factory","manybp","bp","factorybp"] },
		{ name: "5 GBs in Frantic Factory", types: ["factory","factorygb"] },
		{ name: "Both Banana Fairies in Frantic Factory", types: ["factory","fairy"] },
		{ name: "250 Total Bananas", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "DK Isles Summit GB", types: ["diddy","bonus","isles"] },
		{ name: "5 GBs in Angry Aztec", types: ["aztec","aztecgb"] },
		{ name: "Both Stealthy Snoop GBs", types: ["aztec","gloomy","bonus"] }
	];
	bingoList[7] = [
		{ name: "100 Bananas in Fungi Forest", types: ["fungi","banana","fungibananas"] },
		{ name: "Key 6", types: ["key","key6"] },
		{ name: "Pearl Rescue GB", types: ["tiny","gloomy"] },
		{ name: "All Blueprints in Jungle Japes", types: ["japes","manybp","bp","japesbp"] },
		{ name: "Angry Aztec Battle Crown", types: ["aztec","lanky","azteccrown"] },
		{ name: "Both Banana Fairies in Angry Aztec", types: ["aztec","fairy"] },
		{ name: "Both Banana Fairies in Jungle Japes", types: ["japes","fairy"] },
		{ name: "10 GBs", types: ["manybp","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "1 GB for each Kong in Factory", types: ["factory","factorygb"] },
		{ name: "All Caged GBs in DK Isles", types: ["islesgb","isles"] },
		{ name: "9 Rainbow Coins", types: ["coin","restrict_coin"] }
	];
	bingoList[8] = [
		{ name: "Chunky's Caged Bonus GB in Angry Aztec", types: ["aztec","chunky","bonus"] },
		{ name: "3 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
		{ name: "Mechanical Fish GB", types: ["diddy","gloomy"] },
		{ name: "Key 8", types: ["key","fairy","helm","key8"] },
		{ name: "Shoot 15 Banana Balloons", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "5 GBs in Gloomy Galleon", types: ["gloomygb","gloomy"] },
		{ name: "Squash Tomatoes GB", types: ["fungi","chunky"] },
		{ name: "Both Splish-Splash Salvage GBs", types: ["gloomy","bonus","japes"] },
		{ name: "5 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Chunky's Seasickness GB", types: ["gloomy","chunky","donkey"] },
		{ name: "All 3 Batty Barrel Bandit GBs", types: ["factory","gloomy","bonus"] }
	];
	bingoList[9] = [
		{ name: "Both Tree GBs in Creepy Castle", types: ["chunky","donkey","castle"] },
		{ name: "All Blueprints in Gloomy Galleon", types: ["gloomy","manybp","bp","galleonbp"] },
		{ name: "Activate All Warps in Creepy Castle", types: ["castle","castlewarp"] },
		{ name: "Activate All Warps in Angry Aztec", types: ["aztec","aztecwarp"] },
		{ name: "5 Diddy Blueprints", types: ["bp","diddy","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Spider Mini-Boss GB", types: ["tiny","fungi"] },
		{ name: "Both Mad Maze Maul GBs", types: ["cave","bonus","japes"] },
		{ name: "100 bananas for 1 Kong in Jungle Japes", types: ["banana","japesbananas","japes"] },
		{ name: "5 Lobby GBs", types: ["isles","islesgb"] },
		{ name: "1 GB for each Kong in Jungle Japes", types: ["japes","japesgb"] }
	];
	bingoList[10] = [
		{ name: "Both Banana Fairies in Crystal Caves", types: ["cave","fairy"] },
		{ name: "All Blueprints in Creepy Castle", types: ["manybp","castle","bp","castlebp"] },
		{ name: "All Blueprints in Crystal Caves", types: ["manybp","cave","bp","cavebp"] },
		{ name: "Key 7", types: ["castle","key7","key"] },
		{ name: "200 Bananas in Jungle Japes", types: ["japes","banana","japesbananas"] },
		{ name: "Activate All Warps in Gloomy Galleon", types: ["gloomy","gloomywarp"] },
		{ name: "10 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "5 Donkey Blueprints", types: ["bp","donkey","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Beanstalk GB", types: ["tiny","fungi"] },
		{ name: "Creepy Castle Battle Crown", types: ["castlecrown","castle","lanky"] },
		{ name: "Enter Every Level", types: ["helm","manylevel"] }
	];
	bingoList[11] = [
		{ name: "No Rainbow Coins", types: ["restrict","restrict_coin","coin"] },
		{ name: "Chunky Minecart GB", types: ["chunky","fungi","race"] },
		{ name: "8 Banana Fairies", types: ["fairy"] },
		{ name: "Both Speedy Swing Sortie GBs", types: ["japes","bonus","fungi"] },
		{ name: "5 Bonus Barrel GBs", types: ["bonus","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "3 Banana Medals in Jungle Japes", types: ["banana","japesbananas","japes","medal"] },
		{ name: "10 Donkey GBs", types: ["donkey","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "1 GB for each Kong in Gloomy Galleon", types: ["gloomy","gloomygb"] },
		{ name: "200 Bananas in Frantic Factory", types: ["banana","factorybananas","factory"] },
		{ name: "100 Bananas for 1 Kong in Angry Aztec", types: ["aztec","banana","aztecbananas"] },
		{ name: "Activate All Warps in Crystal Caves", types: ["cave","cavewarp"] }
	];
	bingoList[12] = [
		{ name: "Rabbit Race GB", types: ["fungi","lanky"] },
		{ name: "Ballroom GB", types: ["diddy","castle","bonus"] },
		{ name: "Both Banana Fairies in Fungi Forest", types: ["fungi","fairy"] },
		{ name: "5 Lanky Blueprints", types: ["bp","lanky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "5 Chunky Blueprints", types: ["bp","chunky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "2 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Activate All Warps in Fungi Forest", types: ["fungi","fungiwarp"] },
		{ name: "5 GBs in Crystal Caves", types: ["cave","cavegb"] },
		{ name: "3 Banana Medals", types: ["banana","medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "All 5 DK Isles Instrument Pad GBs", types: ["islesgb","isles"] },
		{ name: "Hideout Helm Battle Crown", types: ["helm","helmcrown"] }
	];
	bingoList[13] = [
		{ name: "Owl GB", types: ["diddy","bonus","fungi"] },
		{ name: "Both DK Isles Battle Crowns", types: ["islescrown","isles"] },
		{ name: "Both Banana Fairies in Creepy Castle", types: ["fairy","castle"] },
		{ name: "Donkey Minecart GB", types: ["donkey","castle","race"] },
		{ name: "250 Total Bananas With Donkey", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas","donkey"] },
		{ name: "200 Bananas in Gloomy Galleon", types: ["gloomy","banana","gloomybananas"] },
		{ name: "15 GBs", types: ["manybp","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "All 4 GB's in Llama Temple", types: ["aztec","manygb"] },
		{ name: "100 Bananas for 1 Kong in Frantic Factory", types: ["factory","banana","factorybananas"] },
		{ name: "100 Bananas for 1 Kong in Gloomy Galleon", types: ["gloomy","banana","gloomybananas"] }
	];
	bingoList[14] = [
		{ name: "5 GBs in Fungi Forest", types: ["fungi","fungigb"] },
		{ name: "All Banana Fairies in DK Isles", types: ["fairy","isles"] },
		{ name: "All Blueprints in DK Isles", types: ["isles","bp","manybp","islesbp"] },
		{ name: "All 5 Production Room GBs in Frantic Factory", types: ["factory","factorygb"] },
		{ name: "1 GB for each Kong in Angry Aztec", types: ["aztec","aztecgb"] },
		{ name: "2 Blueprints on each Kong", types: ["manybp","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "All Blueprints in Angry Aztec", types: ["aztec","bp","manybp","aztecbp"] },
		{ name: "200 Bananas in Angry Aztec", types: ["aztec","banana","aztecbananas"] },
		{ name: "1 GB for each Kong in Crystal Caves", types: ["cave","cavegb"] },
		{ name: "2 Minecart Mayhem GBs", types: ["bonus"] }
	];
	bingoList[15] = [
		{ name: "3 Banana Medals in Frantic Factory", types: ["factory","medal","banana","factorybananas"] },
		{ name: "100 bananas for Any Kong in Fungi Forest", types: ["fungi","banana","fungibananas"] },
		{ name: "Shoot 20 Banana Balloons", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "100 bananas for Any Kong in Crystal Caves", types: ["cave","banana","cavebananas"] },
		{ name: "5 GBs in Creepy Castle", types: ["castle","castlegb"] },
		{ name: "3 Donkey Banana Medals", types: ["medal","banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "10 GBs in Jungle Japes", types: ["japes","japesgb"] },
		{ name: "350 Total Bananas", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "Both Car Races", types: ["tiny","race"] },
		{ name: "All 4 GBs in Tiny Temple", types: ["aztecgb","aztec"] },
	];
	bingoList[16] = [
		{ name: "All 5 GBs from 5 Door Ship", types: ["gloomy","gloomygb"] },
		{ name: "13 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "250 Total Bananas With Diddy", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas","diddy"] },
		{ name: "Both Beetle Slides", types: ["race"] },
		{ name: "1 GB for each Kong in Fungi Forest", types: ["fungi","fungigb"] },
		{ name: "All 3 Beaver Bother GBs", types: ["bonus","castle"] },
		{ name: "100 bananas for Any Kong in Creepy Castle", types: ["castle","banana","castlebananas"] },
		{ name: "3 Banana Medals in Angry Aztec", types: ["aztec","banana","aztecbananas"] },
		{ name: "10 Banana Fairies", types: ["fairy"] },
		{ name: "200 Bananas in Crystal Caves", types: ["cave","banana","cavebananas"] }
	];
	bingoList[17] = [
		{ name: "1 GB per level", types: ["manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "All 5 GBs in 5 Door Igloo", types: ["cavegb","cave"] },
		{ name: "Donkey's Banana Medal in Hideout Helm", types: ["donkey","helm","medal"] },
		{ name: "50 Bananas in every level", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "All 5 GBs in 5 Door Cabin", types: ["cavegb","diddy","cave"] },
		{ name: "3 Banana Medals in Gloomy Galleon", types: ["gloomy","medal","banana","gloomybananas"] },
		{ name: "All 7 DK Isles Rainbow Coins", types: ["coin","isles","restrict_coin"] },
		{ name: "All Blueprints in Fungi Forest", types: ["fungi","bp","manybp","fungibp"] },
		{ name: "7 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "1 GB for each Kong in Creepy Castle", types: ["castlegb","castle"] }
	];
	bingoList[18] = [
		{ name: "10 Diddy GBs", types: ["diddy","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "12 Rainbow Coins", types: ["coin ","restrict_coin"] },
		{ name: "3 Banana Medals in Crystal Caves", types: ["medal","banana","cavebananas","cave"] },
		{ name: "16 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "250 Total Bananas With Chunky", types: ["chunky","banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "3 Diddy Banana Medals", types: ["diddy","medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "250 Total Bananas With Tiny", types: ["tiny","banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "250 Total Bananas With Lanky", types: ["lanky","banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "5 Boss Keys", types: ["key","manykey"] },
		{ name: "2 GBs for each Kong in Jungle Japes", types: ["japesgb","manybp","japes"] }
	];
	bingoList[19] = [
		{ name: "Open Crown Door in Helm", types: ["helm","japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
		{ name: "3 Chunky Banana Medals", types: ["banana","medal","chunky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "3 Tiny Banana Medals", types: ["banana","medal","tiny","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "3 Lanky Banana Medals", types: ["banana","medal","lanky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "200 Bananas in Fungi Forest", types: ["banana","fungibananas","fungi"] },
		{ name: "75 Coins with any Kong", types: ["coin","restrict_coin"] },
		{ name: "7 Chunky Blueprints", types: ["bp","chunky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "7 Lanky Blueprints", types: ["bp","lanky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "2 GBs for each Kong in Frantic Factory", types: ["factory","manybp","factorygb"] },
		{ name: "3 Blueprints on each Kong", types: ["manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] }
	];
	bingoList[20] = [
		{ name: "10 Chunky GBs", types: ["chunky","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "10 GBs in Frantic Factory", types: ["factory","factorygb"] },
		{ name: "10 GBs in DK Isles", types: ["isles","islesgb"] },
		{ name: "7 Diddy Blueprints", types: ["bp","diddy","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Spawn K. Rool Ship", types: ["key3","key8","key","manykey"] },
		{ name: "10 Lanky GBs", types: ["lanky","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "200 Bananas in Creepy Castle", types: ["banana","castlebananas","castle"] },
		{ name: "50 Coins with any 3 Kongs", types: ["coin","restrict_coin"] },
		{ name: "10 GBs in Gloomy Galleon", types: ["gloomy","galleongb"] },
		{ name: "10 Tiny GBs", types: ["tiny","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
	];
	bingoList[21] = [
		{ name: "10 GBs in Crystal Caves", types: ["cavegb","cave"] },
		{ name: "7 Donkey Blueprints", types: ["bp","donkey","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "Nintendo Coin", types: ["factory","donkey"] },
		{ name: "3 Banana Medals in Fungi Forest", types: ["banana","fungibananas","medal","fungi"] },
		{ name: "Open K. Rool's Mouth", types: ["key7","key6","key","manykey"] },
		{ name: "10 GBs in Angry Aztec", types: ["aztecgb","aztec"] },
		{ name: "20 GBs", types: ["bp","manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Banana Medal with Every Kong", types: ["banana","medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "3 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "2 GBs for each Kong in Gloomy Galleon", types: ["gloomy","manybp","galleongb"] }
	];
	bingoList[22] = [
		{ name: "Chunky's Banana Medal in Hideout Helm", types: ["helm","medal","chunky"] },
		{ name: "All 4 R&D GBs in Frantic Factory", types: ["factorygb","factory"] },
		{ name: "All 5 GBs from 5 Door Temple", types: ["aztecgb","aztec"] },
		{ name: "500 Total Bananas", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "20 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "3 Banana Medals in Creepy Castle", types: ["banana","castlebananas","castle","medal"] },
		{ name: "15 Donkey GBs", types: ["donkey","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Activate All Purple Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
		{ name: "2 GBs for each Kong in DK Isles", types: ["isles","manybp","islesgb"] },
		{ name: "2 GBs for each Kong in Angry Aztec", types: ["aztec","manybp","aztecgb"] }
	];
	bingoList[23] = [
		{ name: "10 GBs in Fungi Forest", types: ["fungigb","fungi"] },
		{ name: "6 Boss Keys", types: ["key","manykey"] },
		{ name: "Complete All 7 Baboon Blasts", types: ["donkey","manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Complete DK phase of K. Rool Fight", types: ["key3","key8","key","manykey"] },
		{ name: "10 GBs in Creepy Castle", types: ["castlegb","castle"] },
		{ name: "2 GBs per level", types: ["manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Activate All Green Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
		{ name: "6 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
		{ name: "2 GBs for each Kong in Crystal Caves", types: ["cavegb","cave","manybp"] },
		{ name: "All banana medals for any level", types: ["banana","medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] }
	];
	bingoList[24] = [
		{ name: "All 5 Crypt GBs in Castle", types: ["castle","castlegb"] },
		{ name: "13 Banana Fairies", types: ["fairy","key8"] },
		{ name: "4 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "2 GBs for each Kong in Fungi Forest", types: ["fungigb","fungi"] },
		{ name: "4 Blueprints on each Kong", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "300 Total Banana Coins", types: ["coin","restrict_coin"] },
		{ name: "All 3 Minecart rides", types: ["race"] },
		{ name: "Activate All Red Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
		{ name: "Activate All Yellow Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
		{ name: "10 Bonus Barrel GBs", types: ["bonus","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
	];
	bingoList[25] = [
		{ name: "90 coins with one Kong", types: ["coin","restrict_coin"] },
		{ name: "Complete Diddy's phase of K. Rool Fight", types: ["key3","key8","key","manykey"] },
		{ name: "Complete 4 Coin-Collecting Courses", types: ["race"] },
		{ name: "600 Total Bananas", types: ["banana","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
		{ name: "25 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
		{ name: "2 GBs for Each Kong in Creepy Castle", types: ["castle","castlegb"] },
		{ name: "15 Diddy GBs", types: ["diddy","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Lanky's Medal in Helm", types: ["helm","medal","lanky"] },
		{ name: "25 GBs", types: ["bp","manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
		{ name: "Activate All Blue Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] }

	];
