'use strict';

exports.BattleScripts = {
	randomSeasonalMeleeTeam: function (side) {
		let team = [];
		let sets = {
			//gen1
			'Brock': {
				species: 'Onix',
				ability: 'Sturdy',
				item: 'Weakness Policy',
				gender: 'M',
				moves: ['flail', 'rockpolish', 'stoneedge'],
				signatureMove: 'Earthquake',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Jolly',
			},
			'Ash': {
				species: 'Pikachu',
				ability: 'Static',
				item: 'Light Ball',
				gender: 'M',
				moves: ['volttackle', 'irontail', 'fakeout'],
				signatureMove: 'Extreme Speed',
				evs: {
					atk: 252,
					spe: 252,
					def: 4,
				},
				nature: 'Jolly',
			},
			'Misty': {
				species: 'Starmie',
				ability: 'Natural Cure',
				item: 'Life Orb',
				gender: 'F',
				moves: ['hydropump', 'icebeam', 'thunderbolt'],
				signatureMove: 'Psyshock',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Koga': {
				species: 'Weezing',
				ability: 'Levitate',
				item: 'Black Sludge',
				gender: 'M',
				moves: ['toxicspikes', 'painsplit', 'sludgebomb'],
				signatureMove: 'Explosion',
				evs: {
					hp: 252,
					def: 252,
					spd: 4,
				},
				nature: 'Relaxed',
			},
			'Lt. Surge': {
				species: 'Raichu',
				ability: 'Lightning Rod',
				item: 'Life Orb',
				gender: 'M',
				moves: ['thunderbolt', 'focusblast', 'voltswitch'],
				signatureMove: 'Hidden Power Ice',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Blaine': {
				species: 'Arcanine',
				ability: 'Intimidate',
				item: 'Leftovers',
				gender: 'M',
				moves: ['flareblitz', 'wildcharge', 'morningsun'],
				signatureMove: 'Extreme Speed',
				evs: {
					atk: 4,
					hp: 252,
					def: 252,
				},
				nature: 'Impish',
			},
			'Sabrina': {
				species: 'Alakazam',
				ability: 'Magic Guard',
				item: 'Focus Sash',
				gender: 'F',
				moves: ['focusblast', 'dazzlinggleam', 'shadowball'],
				signatureMove: 'Psychic',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Erika': {
				species: 'Vileplume',
				ability: 'Effect Spore',
				item: 'Black Sludge',
				gender: 'F',
				moves: ['gigadrain', 'toxic', 'teeterdance'],
				signatureMove: 'Synthesis',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Calm',
			},
			'Giovanni': {
				species: 'Nidoking',
				ability: 'Sheer Force',
				item: 'Life Orb',
				gender: 'M',
				moves: ['sludgewave', 'thunderbolt', 'icebeam'],
				signatureMove: 'Earth Power',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Timid',
			},
			'Lorelei': {
				species: 'Lapras',
				ability: 'Water Absorb',
				item: 'Leftovers',
				gender: 'F',
				moves: ['scald', 'freezedry', 'rest'],
				signatureMove: 'Sleep Talk',
				evs: {
					spa: 252,
					hp: 252,
					def: 4,
				},
				nature: 'Modest',
			},
			'Bruno': {
				species: 'Machamp',
				ability: 'No Guard',
				item: 'Life Orb',
				gender: 'M',
				moves: ['dynamicpunch', 'bulletpunch', 'knockoff'],
				signatureMove: 'Stone Edge',
				evs: {
					atk: 252,
					hp: 252,
					def: 4,
				},
				nature: 'Adamant',
			},
			'Agatha': {
				species: 'Gengar',
				ability: 'Levitate',
				item: 'Focus Sash',
				gender: 'F',
				moves: ['shadowball', 'sludgewave', 'dazzlinggleam'],
				signatureMove: 'Destiny Bond',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Timid',
			},
			'Lance': {
				species: 'Dragonite',
				ability: 'Multiscale',
				item: 'Lum Berry',
				gender: 'M',
				moves: ['outrage', 'earthquake', 'extremespeed'],
				signatureMove: 'Dragon Dance',
				evs: {
					atk: 252,
					spe: 252,
					def: 4,
				},
				nature: 'Adamant',
			},
			'Blue': {
				species: 'Blastoise',
				ability: 'Rain Dish',
				item: 'Assault Vest',
				gender: 'M',
				moves: ['scald', 'icebeam', 'flashcannon'],
				signatureMove: 'Aura Sphere',
				evs: {
					spa: 252,
					hp: 252,
					spd: 4,
				},
				nature: 'Modest',
			},
			'Red': {
				species: 'Charizard',
				ability: 'Blaze',
				item: 'Charizardite-X',
				gender: 'M',
				moves: ['firepunch', 'bellydrum', 'roost'],
				signatureMove: 'dragonclaw',
				evs: {
					atk: 252,
					spe: 252,
					def: 4,
				},
				nature: 'Jolly',
			},
			'Green': {
				species: 'Venusaur',
				ability: 'Overgrow',
				item: 'Black Sludge',
				gender: 'M',
				moves: ['gigadrain', 'synthesis', 'toxic'],
				signatureMove: 'Knock Off',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Calm',
			},
			'Team Rocket': {
				species: 'Persian',
				ability: 'Technician',
				item: 'Life Orb',
				gender: 'M',
				moves: ['fakeout', 'return', 'uturn'],
				signatureMove: 'Knock Off',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Jolly',
			},
			//gen2
			'Falkner': {
				species: 'Pidgeot',
				ability: 'Big Pecks',
				item: 'Life Orb',
				gender: 'M',
				moves: ['bravebird', 'return', 'uturn'],
				signatureMove: 'Defog',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Bugsy': {
				species: 'Scyther',
				ability: 'Technician',
				item: 'Eviolite',
				gender: 'M',
				moves: ['swordsdance', 'roost', 'aerialace'],
				signatureMove: 'bugbite',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Whitney': {
				species: 'Miltank',
				ability: 'Thick Fat',
				item: 'Leftovers',
				gender: 'F',
				moves: ['seismictoss', 'curse', 'toxic'],
				signatureMove: 'Milk Drink',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Careful',
			},
			'Morty': {
				species: 'Gengar',
				ability: 'Levitate',
				item: 'Life Orb',
				gender: 'M',
				moves: ['sludgewave', 'dazzlinggleam', 'psychic'],
				signatureMove: 'Shadow Ball',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Janine': {
				species: 'Venomoth',
				ability: 'Tinted Lens',
				item: 'Leftovers',
				gender: 'F',
				moves: ['bugbuzz', 'sludgebomb', 'gigadrain'],
				signatureMove: 'Quiver Dance',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Chuck': {
				species: 'Poliwrath',
				ability: 'Water Absorb',
				item: 'Life Orb',
				gender: 'M',
				moves: ['waterfall', 'bellydrum', 'icepunch'],
				signatureMove: 'Brick Break',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Jasmine': {
				species: 'Steelix',
				ability: 'Sheer Force',
				item: 'Leftovers',
				gender: 'F',
				moves: ['rockslide', 'earthquake', 'stealthrock'],
				signatureMove: 'Iron Head',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Pryce': {
				species: 'Mamoswine',
				ability: 'Thick Fat',
				item: 'Life Orb',
				gender: 'M',
				moves: ['iciclecrash', 'knockoff', 'iceshard'],
				signatureMove: 'Earthquake',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'Clair': {
				species: 'Kingdra',
				ability: 'Sniper',
				item: 'Scope Lens',
				gender: 'F',
				moves: ['scald', 'dracometeor', 'focusenergy'],
				signatureMove: 'Ice Beam',
				evs: {
					spa: 252,
					hp: 252,
					def: 4
				},
				nature: 'Modest',
			},
			'Will': {
				species: 'Xatu',
				ability: 'Magic Bounce',
				item: 'Light Clay',
				gender: 'M',
				moves: ['psyshock', 'airslash', 'reflect'],
				signatureMove: 'Light Screen',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Karen': {
				species: 'Houndoom',
				ability: 'Flash Fire',
				item: 'Life Orb',
				gender: 'F',
				moves: ['flamethrower', 'energyball', 'suckerpunch'],
				signatureMove: 'Dark Pulse',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Naive',
			},
			//gen3
			'Brawly': {
				species: 'Hariyama',
				ability: 'Thick Fat',
				item: 'Assault Vest',
				gender: 'M',
				moves: ['closecombat', 'knockoff', 'earthquake'],
				signatureMove: 'Bullet Punch',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Liza': {
				species: 'Lunatone',
				ability: 'Levitate',
				item: 'Choice Specs',
				gender: 'F',
				moves: ['earthpower', 'icebeam', 'moonblast'],
				signatureMove: 'Psychic',
				evs: {
					spa: 252,
					hp: 252,
					def: 4
				},
				nature: 'Modest',
			},
			'Tate': {
				species: 'Solrock',
				ability: 'Levitate',
				item: 'Leftovers',
				gender: 'M',
				moves: ['willowisp', 'morningsun', 'rockslide'],
				signatureMove: 'Zen Headbutt',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Impish',
			},
			'Winona': {
				species: 'Altaria',
				ability: 'Natural Cure',
				item: 'Leftovers',
				gender: 'F',
				moves: ['healbell', 'roost', 'cottonguard'],
				signatureMove: 'Dragon Pulse',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Calm',
			},
			'Roxanne': {
				species: 'Probopass',
				ability: 'Sturdy',
				item: 'Leftovers',
				gender: 'F',
				moves: ['powergem', 'painsplit', 'toxic'],
				signatureMove: 'Stealth Rock',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Relaxed',
			},
			'Wattson': {
				species: 'Magneton',
				ability: 'Analytic',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['thunderbolt', 'hiddenpowerfire', 'flashcannon'],
				signatureMove: 'Volt Switch',
				evs: {
					spa: 252,
					spe: 252,
					def: 4
				},
				nature: 'Timid',
			},
			'Flannery': {
				species: 'Torkoal',
				ability: 'Shell Armor',
				item: 'White Herb',
				gender: 'F',
				moves: ['flamethrower', 'earthpower', 'sludgewave'],
				signatureMove: 'Shell Smash',
				evs: {
					spa: 252,
					hp: 252,
					def: 4
				},
				nature: 'Modest',
			},
			'Norman': {
				species: 'Slaking',
				ability: 'Truant',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['gigaimpact', 'nightslash', 'icepunch'],
				signatureMove: 'Earthquake',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Wallace': {
				species: 'Milotic',
				ability: 'Marvel Scale',
				item: 'Flame Orb',
				gender: 'M',
				moves: ['scald', 'dragontail', 'recover'],
				signatureMove: 'Toxic',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Bold',
			},
			'Sidney': {
				species: 'Absol',
				ability: 'Super Luck',
				item: 'Absolite',
				gender: 'M',
				moves: ['swordsdance', 'psychocut', 'knockoff'],
				signatureMove: 'Sucker Punch',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Phoebe': {
				species: 'Sableye',
				ability: 'Prankster',
				item: 'Sablenite',
				gender: 'F',
				moves: ['willowisp', 'darkpulse', 'recover'],
				signatureMove: 'Calm Mind',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4
				},
				nature: 'Calm',
			},
			'Glacia': {
				species: 'Glalie',
				ability: 'Ice Body',
				item: 'Glalitite',
				gender: 'F',
				moves: ['return', 'iceshard', 'earthquake'],
				signatureMove: 'Explosion',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Drake': {
				species: 'Salamence',
				ability: 'Intimidate',
				item: 'Salamencite',
				gender: 'M',
				moves: ['return', 'roost', 'dragondance'],
				signatureMove: 'Earthquake',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Steven': {
				species: 'Metagross',
				ability: 'Clear Body',
				item: 'Metagrossite',
				gender: 'M',
				moves: ['meteormash', 'zenheadbutt', 'earthquake'],
				signatureMove: 'Bullet Punch',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Wally': {
				species: 'Gallade',
				ability: 'Justified',
				item: 'Galladite',
				gender: 'M',
				moves: ['closecombat', 'psychocut', 'swordsdance'],
				signatureMove: 'Knock Off',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Juan': {
				species: 'Kingdra',
				ability: 'Sniper',
				item: 'Scope Lens',
				gender: 'M',
				moves: ['outrage', 'waterfall', 'ironhead'],
				signatureMove: 'Focus Energy',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Team Magma': {
				species: 'Camerupt',
				ability: 'Solid Rock',
				item: 'Cameruptite',
				gender: 'M',
				moves: ['flamethrower', 'earthpower', 'rockpolish'],
				signatureMove: 'Flash Cannon',
				evs: {
					spa: 252,
					spe: 252,
					def: 4
				},
				nature: 'Timid',
			},
			'Team Aqua': {
				species: 'Sharpedo',
				ability: 'Speed Boost',
				item: 'Sharpedonite',
				gender: 'M',
				moves: ['waterfall', 'crunch', 'protect'],
				signatureMove: 'Ice Fang',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			//gen4
			'Roark': {
				species: 'Rampardos',
				ability: 'Sheer Force',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['headsmash', 'earthquake', 'ironhead'],
				signatureMove: 'Zen Headbutt',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Gardenia': {
				species: 'Roserade',
				ability: 'Technician',
				item: 'Life Orb',
				gender: 'M',
				moves: ['gigadrain', 'sludgebomb', 'hiddenpowerfire'],
				signatureMove: 'Dazzling Gleam',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Maylene': {
				species: 'Lucario',
				ability: 'Justified',
				item: 'Life Orb',
				gender: 'M',
				moves: ['closecombat', 'bulletpunch', 'extremespeed'],
				signatureMove: 'Ice Punch',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Crasher Wake': {
				species: 'Floatzel',
				ability: 'Water Veil',
				item: 'Leftovers',
				gender: 'M',
				moves: ['waterfall', 'icepunch', 'bulkup'],
				signatureMove: 'Aqua Jet',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Fantina': {
				species: 'Mismagius',
				ability: 'Levitate',
				item: 'Life Orb',
				gender: 'F',
				moves: ['shadowball', 'dazzlinggleam', 'suckerpunch'],
				signatureMove: 'Nasty Plot',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Byron': {
				species: 'Bastiodon',
				ability: 'Sturdy',
				item: 'Air Balloon',
				gender: 'M',
				moves: ['ironhead', 'rockslide', 'earthquake'],
				signatureMove: 'Stealth Rock',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Careful',
			},
			'Candice': {
				species: 'Froslass',
				ability: 'Cursed Body',
				item: 'Focus Sash',
				gender: 'F',
				moves: ['icebeam', 'shadowball', 'thunderwave'],
				signatureMove: 'Destiny Bond',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Volkner': {
				species: 'Electivire',
				ability: 'Vital Spirit',
				item: 'Choice Band',
				gender: 'M',
				moves: ['icepunch', 'earthquake', 'crosschop'],
				signatureMove: 'Wild Charge',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Aaron': {
				species: 'Drapion',
				ability: 'Battle Armor',
				item: 'Assault Vest',
				gender: 'M',
				moves: ['poisonjab', 'knockoff', 'earthquake'],
				signatureMove: 'Rock Slide',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Bertha': {
				species: 'Hippowdon',
				ability: 'Sand Stream',
				item: 'Leftovers',
				gender: 'F',
				moves: ['earthquake', 'whirlwind', 'stealthrock'],
				signatureMove: 'Slack Off',
				evs: {
					hp: 252,
					def: 252,
					atk: 4
				},
				nature: 'Impish',
			},
			'Flint': {
				species: 'Infernape',
				ability: 'Iron Fist',
				item: 'Life Orb',
				gender: 'M',
				moves: ['flareblitz', 'closecombat', 'uturn'],
				signatureMove: 'Mach Punch',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Lucian': {
				species: 'Bronzong',
				ability: 'Levitate',
				item: 'Light Clay',
				gender: 'F',
				moves: ['gyroball', 'reflect', 'lightscreen'],
				signatureMove: 'Stealth Rock',
				evs: {
					hp: 248,
					spd: 252,
					def: 8
				},
				nature: 'Sassy',
			},
			'Cynthia': {
				species: 'Garchomp',
				ability: 'Rough Skin',
				item: 'Life Orb',
				gender: 'F',
				moves: ['outrage', 'earthquake', 'rockslide'],
				signatureMove: 'Stealth Rock',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Team Galactic': {
				species: 'Porygon-Z',
				ability: 'Download',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['triattack', 'psychic', 'thunderbolt'],
				signatureMove: 'Ice Beam',
				evs: {
					spa: 252,
					spe: 252,
					def: 4
				},
				nature: 'Timid',
			},
			//gen5
			'Cilan': {
				species: 'Simisage',
				ability: 'Overgrow',
				item: 'Life Orb',
				gender: 'M',
				moves: ['leafstorm', 'focusblast', 'hiddenpowerice'],
				signatureMove: 'Giga Drain',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Chili': {
				species: 'Simisear',
				ability: 'Blaze',
				item: 'Life Orb',
				gender: 'M',
				moves: ['overheat', 'rockslide', 'knockoff'],
				signatureMove: 'Gunk Shot',
				evs: {
					atk: 252,
					spe: 252,
					spa: 4
				},
				nature: 'Hasty',
			},
			'Cress': {
				species: 'Simipour',
				ability: 'Torrent',
				item: 'Life Orb',
				gender: 'M',
				moves: ['scald', 'knockoff', 'icebeam'],
				signatureMove: 'Grass Knot',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Lenora': {
				species: 'Watchog',
				ability: 'Analytic',
				item: 'Leftovers',
				gender: 'F',
				moves: ['return', 'knockoff', 'gunkshot'],
				signatureMove: 'Zen Headbutt',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Burgh': {
				species: 'Leavanny',
				ability: 'Swarm',
				item: 'Focus Sash',
				gender: 'M',
				moves: ['xscissor', 'leafblade', 'knockoff'],
				signatureMove: 'Sticky Web',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Elesa': {
				species: 'Zebstrika',
				ability: 'Motor Drive',
				item: 'Life Orb',
				gender: 'F',
				moves: ['thunderbolt', 'overheat', 'hiddenpowerice'],
				signatureMove: 'Volt Switch',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Clay': {
				species: 'Excadrill',
				ability: 'Mold Breaker',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['earthquake', 'ironhead', 'xscissor'],
				signatureMove: 'Rock Slide',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Skyla': {
				species: 'Swanna',
				ability: 'Hydration',
				item: 'Life Orb',
				gender: 'M',
				moves: ['scald', 'airslash', 'roost'],
				signatureMove: 'Defog',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Brycen': {
				species: 'Beartic',
				ability: 'Swift Swim',
				item: 'Life Orb',
				gender: 'M',
				moves: ['iciclecrash', 'playrough', 'superpower'],
				signatureMove: 'Aqua Jet',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Drayden': {
				species: 'Haxorus',
				ability: 'Mold Breaker',
				item: 'Choice Band',
				gender: 'M',
				moves: ['outrage', 'earthquake', 'rockslide'],
				signatureMove: 'Poison Jab',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Iris': {
				species: 'Haxorus',
				ability: 'Rivalry',
				item: 'Life Orb',
				gender: 'F',
				moves: ['dragonclaw', 'earthquake', 'rockslide'],
				signatureMove: 'Poison Jab',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Shauntal': {
				species: 'Chandelure',
				ability: 'Flash Fire',
				item: 'Choice Scarf',
				gender: 'F',
				moves: ['shadowball', 'flamethrower', 'energyball'],
				signatureMove: 'Psychic',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Grimsley': {
				species: 'Bisharp',
				ability: 'Defiant',
				item: 'Focus Sash',
				gender: 'M',
				moves: ['ironhead', 'knockoff', 'swordsdance'],
				signatureMove: 'Sucker Punch',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Caitlin': {
				species: 'Gothitelle',
				ability: 'Shadow Tag',
				item: 'Choice Scarf',
				gender: 'F',
				moves: ['psyshock', 'trick', 'calmmind'],
				signatureMove: 'Rest',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Marshal': {
				species: 'Mienshao',
				ability: 'Reckless',
				item: 'Life Orb',
				gender: 'M',
				moves: ['fakeout', 'highjumpkick', 'knockoff'],
				signatureMove: 'U-Turn',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Alder': {
				species: 'Volcarona',
				ability: 'Swarm',
				item: 'Leftovers',
				gender: 'M',
				moves: ['fierydance', 'bugbuzz', 'gigadrain'],
				signatureMove: 'Quiver Dance',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Modest',
			},
			'Team Plasma': {
				species: 'Liepard',
				ability: 'Unburden',
				item: 'Focus Sash',
				gender: 'F',
				moves: ['knockoff', 'suckerpunch', 'playrough'],
				signatureMove: 'Gunk Shot',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			//gen6
			'Lysandre': {
				species: 'Gyarados',
				ability: 'Intimidate',
				item: 'Gyaradosite',
				gender: 'M',
				moves: ['waterfall', 'earthquake', 'crunch'],
				signatureMove: 'Dragon Dance',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Viola': {
				species: 'Vivillon',
				ability: 'Compound Eyes',
				item: 'Focus Sash',
				gender: 'F',
				moves: ['bugbuzz', 'hurricane', 'sleeppowder'],
				signatureMove: 'Quiver Dance',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Grant': {
				species: 'Tyrantrum',
				ability: 'Rock Head',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['earthquake', 'superpower', 'icefang'],
				signatureMove: 'Head Smash',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Korrina': {
				species: 'Hawlucha',
				ability: 'Unburden',
				item: 'Sitrus Berry',
				gender: 'F',
				moves: ['zenheadbutt', 'stoneedge', 'swordsdance'],
				signatureMove: 'Flying Press',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Ramos': {
				species: 'Gogoat',
				ability: 'Sap Sipper',
				item: 'Leftovers',
				gender: 'M',
				moves: ['milkdrink', 'bulkup', 'earthquake'],
				signatureMove: 'Horn Leech',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Clemont': {
				species: 'Heliolisk',
				ability: 'Dry Skin',
				item: 'Life Orb',
				gender: 'M',
				moves: ['thunderbolt', 'hypervoice', 'surf'],
				signatureMove: 'Focus Blast',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Valerie': {
				species: 'Sylveon',
				ability: 'Pixilate',
				item: 'Leftovers',
				gender: 'F',
				moves: ['hypervoice', 'wish', 'protect'],
				signatureMove: 'Calm Mind',
				evs: {
					def: 252,
					hp: 252,
					spa: 4
				},
				nature: 'Bold',
			},
			'Olympia': {
				species: 'Meowstic-F',
				ability: 'Competitive',
				item: 'Life Orb',
				gender: 'F',
				moves: ['fakeout', 'suckerpunch', 'thunderbolt'],
				signatureMove: 'Psychic',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Wulfric': {
				species: 'Avalugg',
				ability: 'Sturdy',
				item: 'Leftovers',
				gender: 'M',
				moves: ['avalanche', 'earthquake', 'curse'],
				signatureMove: 'Recover',
				evs: {
					hp: 252,
					def: 252,
					atk: 4
				},
				nature: 'Relaxed',
			},
			'Wilkstrom': {
				species: 'Aegislash',
				ability: 'Stance Change',
				item: 'Weakness Policy',
				gender: 'M',
				moves: ['ironhead', 'shadowsneak', 'sacredsword'],
				signatureMove: 'King\'s Shield',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Malva': {
				species: 'Talonflame',
				ability: 'Gale Wings',
				item: 'Leftovers',
				gender: 'F',
				moves: ['bravebird', 'Taunt', 'roost'],
				signatureMove: 'Bulk Up',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Careful',
			},
			'Drasna': {
				species: 'Noivern',
				ability: 'Infiltrator',
				item: 'Life Orb',
				gender: 'F',
				moves: ['dracometeor', 'hurricane', 'flamethrower'],
				signatureMove: 'Focus Blast',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Siebold': {
				species: 'Barbaracle',
				ability: 'Tough Claws',
				item: 'White Herb',
				gender: 'M',
				moves: ['waterfall', 'stoneedge', 'earthquake'],
				signatureMove: 'Shell Smash',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Diantha': {
				species: 'Gardevoir',
				ability: 'Trace',
				item: 'Gardevoirite',
				gender: 'F',
				moves: ['psychic', 'hypervoice', 'focusblast'],
				signatureMove: 'Thunderbolt',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Team Flare': {
				species: 'Scrafty',
				ability: 'Moxie',
				item: 'Chople Berry',
				gender: 'M',
				moves: ['dragondance', 'highjumpkick', 'ironhead'],
				signatureMove: 'Knock Off',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Jolly',
			},
			//Random Stuff (there was some up there but oh well) Mainly Anime based/Rivals etc
			'May': {
				species: 'Blaziken',
				ability: 'Speed Boost',
				item: 'Life Orb',
				gender: 'F',
				moves: ['knockoff', 'highjumpkick', 'protect'],
				signatureMove: 'Flare Blitz',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Cameron': {
				species: 'Lucario',
				ability: 'Justified',
				item: 'Life Orb',
				gender: 'M',
				moves: ['nastyplot', 'vacuumwave', 'flashcannon'],
				signatureMove: 'Aura Sphere',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Gary': {
				species: 'Blastoise',
				ability: 'Torrent',
				item: 'Leftovers',
				gender: 'M',
				moves: ['scald', 'toxic', 'rapidspin'],
				signatureMove: 'Refresh',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Bold',
			},
			'Bianca': {
				species: 'Emboar',
				ability: 'Reckless',
				item: 'Life Orb',
				gender: 'F',
				moves: ['flareblitz', 'suckerpunch', 'wildcharge'],
				signatureMove: 'Head Smash',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Ash\'s Housekeeper': {
				species: 'Mr. Mime',
				ability: 'Filter',
				item: 'Choice Scarf',
				gender: 'F',
				moves: ['psychic', 'thunderbolt', 'dazzlinggleam'],
				signatureMove: 'Shadow Ball',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Serena': {
				species: 'Delphox',
				ability: 'Magician',
				item: 'Power Herb',
				gender: 'F',
				moves: ['flamethrower', 'solarbeam', 'grassknot'],
				signatureMove: 'Psychic',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Nurse Joy': {
				species: 'Chansey',
				ability: 'Natural Cure',
				item: 'Eviolite',
				gender: 'F',
				moves: ['seismictoss', 'toxic', 'healbell'],
				signatureMove: 'Soft-Boiled',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Bold',
			},
			'Officer Jenny': {
				species: 'Arcanine',
				ability: 'Intimidate',
				item: 'Leftovers',
				gender: 'F',
				moves: ['flareblitz', 'wildcharge', 'closecombat'],
				signatureMove: 'Extreme Speed',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'James': {
				species: 'Weezing',
				ability: 'Levitate',
				item: 'Black Sludge',
				gender: 'M',
				moves: ['sludgebomb', 'destinybond', 'willowisp'],
				signatureMove: 'Pain Split',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Bold',
			},
			'Jessie': {
				species: 'Arbok',
				ability: 'Shed Skin',
				item: 'Black Sludge',
				gender: 'F',
				moves: ['poisonjab', 'suckerpunch', 'earthquake'],
				signatureMove: 'Coil',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Dawn': {
				species: 'Empoleon',
				ability: 'Torrent',
				item: 'Leftovers',
				gender: 'F',
				moves: ['defog', 'toxic', 'stealthrock'],
				signatureMove: 'Scald',
				evs: {
					hp: 252,
					def: 252,
					spa: 4
				},
				nature: 'Bold',
			},
			'Youngster Joey': {
				species: 'Rattata',
				ability: 'Guts',
				item: 'Focus Sash',
				gender: 'M',
				moves: ['facade', 'endeavor', 'suckerpunch'],
				signatureMove: 'Quick Attack',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Cheren': {
				species: 'Stoutland',
				ability: 'Scrappy',
				item: 'Choice Band',
				gender: 'M',
				moves: ['crunch', 'playrough', 'return'],
				signatureMove: 'Superpower',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'Professor Oak': {
				species: 'Dragonite',
				ability: 'Multiscale',
				item: 'Choice Band',
				gender: 'M',
				moves: ['earthquake', 'firepunch', 'extremespeed'],
				signatureMove: 'Dragon Claw',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Zinnia': {
				species: 'Exploud',
				ability: 'Scrappy',
				item: 'Choice Specs',
				gender: 'F',
				moves: ['boomburst', 'fireblast', 'surf'],
				signatureMove: 'Focus Blast',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Modest',
			},
			'N': {
				species: 'Reshiram',
				ability: 'Turboblaze',
				item: 'Choice Specs',
				gender: 'M',
				moves: ['blueflare', 'dracometeor', 'earthpower'],
				signatureMove: 'Hidden Power Ice',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Modest',
			},
			'Colress': {
				species: 'Klinklang',
				ability: 'Clear Body',
				item: 'Leftovers',
				gender: 'M',
				moves: ['shiftgear', 'geargrind', 'magnetrise'],
				signatureMove: 'Wild Charge',
				evs: {
					hp: 252,
					atk: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Ghetsis': {
				species: 'Hydreigon',
				ability: 'Levitate',
				item: 'Choice Scarf',
				gender: 'M',
				moves: ['darkpulse', 'dracometeor', 'flashcannon'],
				signatureMove: 'Fire Blast',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'White': {
				species: 'Serperior',
				ability: 'Contrary',
				item: 'Life Orb',
				gender: 'F',
				moves: ['leafstorm', 'hiddenpowerfire', 'glare'],
				signatureMove: 'Dragon Pulse',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Timid',
			},
			'Silver': {
				species: 'Feraligatr',
				ability: 'Sheer Force',
				item: 'Life Orb',
				gender: 'M',
				moves: ['waterfall', 'icepunch', 'crunch'],
				signatureMove: 'Dragon Dance',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Adamant',
			},
		};

		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
			let set = sets[name];
			set.name = name;
			set.level = 100;
			if (!set.ivs) {
				set.ivs = {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31
				};
			}
			else {
				for (let iv in {
						hp: 31,
						atk: 31,
						def: 31,
						spa: 31,
						spd: 31,
						spe: 31
					}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {
				hp: 84,
				atk: 84,
				def: 84,
				spa: 84,
				spd: 84,
				spe: 84
			};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};
