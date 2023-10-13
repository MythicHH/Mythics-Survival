// Recipe Removals
ServerEvents.recipes(event => {
	event.remove({ output: 'createaddition:electrum_wire'})
	event.remove({ output: 'createaddition:copper_spool'})
	event.remove({ output: 'createaddition:gold_spool'})
	event.remove({ output: 'createaddition:electrun_ingot'})
	event.remove({ output: 'createaddition:electrun_sheet'})
	event.remove({ output: 'createaddition:large_connector'})
	event.remove({ output: 'createaddition:connector'})
	event.remove({ output: 'createaddition:festive_spool'})
	event.remove({ output: 'createaddition:spool'})
	event.remove({ output: 'createaddition:electric_motor'})
	event.remove({ output: 'createaddition:alternator'})
	event.remove({ output: 'createaddition:creative_energy'})
	event.remove({ output: 'createaddition:redstone_relay'})
	event.remove({ output: 'createaddition:modular_accumulator'})
	event.remove({ output: 'createaddition:tesla_coil'})
	event.remove({ output: 'createaddition:portable_energy_interface'})
	event.remove({ output: 'createaddition:capacitor'})
	event.remove({ output: 'createaddition:zinc_sheet'})
	event.remove({ output: 'createaddition:electrum_rod'})
	event.remove({ output: 'createaddition:electrum_amulet'})
	event.remove({ output: 'createaddition:electrum_spool'})
	event.remove({ output: 'createaddition:gold_wire'})
	event.remove({ output: 'createaddition:copper_wire'})
	event.remove({ output: 'simplytools:clean_end_stone'})
	event.remove({ output: 'simplytools:clean_end_stone_button'})
	event.remove({ output: 'simplytools:clean_end_stone_pressure_plate'})
	event.remove({ output: 'simplytools:clean_end_stone_slab'})
	event.remove({ output: 'simplytools:clean_end_stone_wall'})
	event.remove({ output: 'simplytools:clean_end_stone_stairs'})
	event.remove({ output: 'simplytools:wooden_hammer'})
	event.remove({ output: 'simplytools:wooden_hammer_head'})
	event.remove({ output: 'simplytools:wooden_excavator_head'})
	event.remove({ output: 'simplytools:wooden_excavator'})
	event.remove({ output: 'minecraft:furnace'})
	event.remove({ output: 'minecraft:smoker'})
	event.remove({ output: 'minecraft:chain'})
	event.remove({ output: 'farmersdelight:stove'})
	event.remove({ output: 'farmersdelight:safety_net'})
	event.remove({ output: 'beautify:hanging_pot'})
	event.remove({ output: 'beautify:bookstack'})
	event.remove({ output: 'handcrafted:stackable_book'})
	event.remove({ output: 'storagenetwork:request'})
	event.remove({ output: 'storagenetwork:kabel'})
	event.remove({ output: 'storagenetwork:master'})
	event.remove({ output: 'storagenetwork:crafting_remote'})
	event.remove({ output: 'storagenetwork:inventory'})
	event.remove({ output: 'handcrafted:black_sheet'})
	event.remove({ output: 'handcrafted:blue_sheet'})
	event.remove({ output: 'handcrafted:brown_sheet'})
	event.remove({ output: 'handcrafted:cyan_sheet'})
	event.remove({ output: 'handcrafted:gray_sheet'})
	event.remove({ output: 'handcrafted:green_sheet'})
	event.remove({ output: 'handcrafted:blue_sheet'})
	event.remove({ output: 'handcrafted:light_gray_sheet'})
	event.remove({ output: 'handcrafted:lime_sheet'})
	event.remove({ output: 'handcrafted:magenta_sheet'})
	event.remove({ output: 'handcrafted:orange_sheet'})
	event.remove({ output: 'handcrafted:pink_sheet'})
	event.remove({ output: 'handcrafted:purple_sheet'})
	event.remove({ output: 'handcrafted:red_sheet'})
	event.remove({ output: 'handcrafted:white_sheet'})
	event.remove({ output: 'handcrafted:yellow_sheet'})
	event.remove({ output: 'handcrafted:light_blue_sheet'})
	event.remove({ output: 'storagenetwork:inventory_remote'})
	event.remove({ output: 'storagenetwork:collector'})
	event.remove({ output: 'storagenetwork:exchange'})
})
// Tags
ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', 'minecraft:milk')
  event.add('create:bottomless/allow', 'create:chocolate')
  event.add('create:bottomless/allow', 'decorative_blocks:thatch')
  event.add('create:bottomless/allow', 'create:honey')
})
// Tags
ServerEvents.tags('items', event => {
  event.add('supplementaries:ropes', 'beautify:rope')
  event.add('forge:rope', 'beautify:rope')
  event.add('create:upright_on_belt', 'kubejs:incomplete_sweet_berry_cheesecake')
})
ServerEvents.recipes(event => {
// Furnace Recipe
event.shaped(
  Item.of('minecraft:furnace', 1), 
  [ 
    'AAA', 
    'A A', 
    'AAA'  
  ],
  {
    A: 'kubejs:sturdy_stone',   
  }
)
// Fixes
event.shaped(
  Item.of('handcrafted:black_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:black_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:blue_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:blue_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:brown_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:brown_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:cyan_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:cyan_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:gray_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:gray_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:green_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:green_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:light_blue_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:light_blue_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:light_gray_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:light_gray_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:lime_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:lime_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:magenta_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:magenta_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:orange_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:orange_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:pink_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:pink_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:purple_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:purple_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:red_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:red_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:white_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:white_carpet'
  }
)
event.shaped(
  Item.of('handcrafted:yellow_sheet', 6),
  [
    '   ',
	'   ',
	'AAA'
  ],
  {
	 A: 'minecraft:yellow_carpet'
  }
)
// Misc Recipes
event.shapeless(
  Item.of('handcrafted:black_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:black_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:blue_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:blue_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:brown_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:brown_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:cyan_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:cyan_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:gray_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:gray_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:green_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:green_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:light_blue_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:light_blue_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:light_gray_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:light_gray_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:lime_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:lime_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:magenta_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:magenta_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:orange_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:orange_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:pink_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:pink_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:purple_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:purple_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:red_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:red_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:white_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:white_dye',
  ]
)
event.shapeless(
  Item.of('handcrafted:yellow_sheet', 1),
  [ 
    '#handcrafted:sheets',
	'minecraft:yellow_dye',
  ]
)
// Simple Storage Network
event.shaped(
  Item.of('storagenetwork:request', 1),
  [
    'EXE',
	'XDX',
	'EXE'
  ],
  {
	D: 'storagenetwork:inventory',
	X: 'create:mechanical_crafter',
	E: 'create:brass_casing',
  }
)
event.shaped(
  Item.of('storagenetwork:collector', 1),
  [
    'EXE',
	'XDX',
	'EXE'
  ],
  {
	D: 'storagenetwork:inventory',
	X: 'storagenetwork:speed_upgrade',
	E: 'create:brass_casing',
  }
)
event.shaped(
  Item.of('storagenetwork:exchange', 1),
  [
    'EXE',
	'XDX',
	'EXE'
  ],
  {
	D: 'storagenetwork:inventory',
	X: 'storagenetwork:stack_upgrade',
	E: 'create:brass_casing',
  }
)
event.shaped(
  Item.of('storagenetwork:crafting_remote', 1),
  [
	'BEL',
	'AXP',
	'LLL'
  ],
  {
	L: 'create:brass_ingot',
	X: 'storagenetwork:request',
	B: 'create:redstone_link',
	E: 'create:display_board',
	A: 'minecraft:glowstone_dust',
	P: 'minecraft:redstone'
  }
)
event.shaped(
  Item.of('storagenetwork:crafting_remote', 1),
  [
	'BEL',
	'AXP',
	'LLL'
  ],
  {
	L: 'create:brass_ingot',
	X: 'storagenetwork:inventory_remote',
	B: 'create:redstone_link',
	E: 'create:display_board',
	A: 'minecraft:glowstone_dust',
	P: 'minecraft:redstone'
  }
)
event.shaped(
  Item.of('storagenetwork:inventory', 1),
  [
    'EBE',
	'BXB',
	'EBE'
  ],
  {
	B: 'storagenetwork:kabel',
	E: 'create:brass_nugget',
	X: 'create:display_board'
  }
)
event.shaped(
  Item.of('storagenetwork:inventory_remote', 1),
  [
	'BOL',
	'AXE',
	'LLL'
  ],
  {
	L: 'create:brass_ingot',
	X: 'storagenetwork:inventory',
	B: 'create:redstone_link',
	O: 'create:display_board',
	E: 'minecraft:redstone',
	A: 'minecraft:glowstone_dust'
  }
)	
event.shaped(
  Item.of('storagenetwork:kabel', 8),
  [
    '   ',
	'   ',
	'EXE'
  ],
  {
	X: 'create:brass_sheet',
	E: 'create:brass_nugget',
  }
)

event.shaped(
  Item.of('storagenetwork:master', 1),
  [
	'XDX',
	'DAD',
	'XDX'
  ],
  {
	 X: 'create:brass_casing',
	 D: 'storagenetwork:kabel',
	 A: 'minecraft:diamond'
  }
)
// Chain Link Recipe
event.shaped(
  Item.of('kubejs:chain_link', 3), 
  [ 
    'AAA', 
    'AAA', 
    'XVX'  
  ],
  {
    V: 'minecraft:iron_ingot', 
	X: 'minecraft:iron_nugget',
	A: 'minecraft:air',
  }
)
// QOL Recipes
event.shapeless(
  Item.of('minecraft:quartz', 4),
  [ 
    'minecraft:quartz_block'
  ]
)
event.shapeless(
  Item.of('minecraft:nether_wart', 9),
  [
    'minecraft:nether_wart_block'
  ]
)
event.shaped(
  Item.of('minecraft:chainmail_helmet', 1), 
  [ 
    'AAA', 
    'A A', 
    '   '  
  ],
  {
    A: 'kubejs:chain_link', 
  }
)
event.shaped(
  Item.of('minecraft:chainmail_chestplate', 1), 
  [ 
    'V V', 
    'VVV', 
    'AXA'  
  ],
  {
    V: 'kubejs:chain_link',
	A: 'minecraft:leather',
	X: 'kubejs:leather_strap',
  }
)
event.shaped(
  Item.of('minecraft:chainmail_leggings', 1), 
  [ 
    'VVV',
    'V V', 
    'V V'  
  ],
  {
    V: 'kubejs:chain_link', 
  }
)
event.shaped(
  Item.of('minecraft:chainmail_boots', 1), 
  [ 
    '   ',
    'V V', 
    'A A'  
  ],
  {
    V: 'kubejs:chain_link',
	A: 'minecraft:leather',
  }
)
event.shaped(
  Item.of('kubejs:leather_strap', 1), 
  [ 
    'AAA', 
    '   ', 
    '   '  
  ],
  {
    A: 'minecraft:leather', 
  }
)
event.shaped(
  Item.of('minecraft:chain', 3), 
  [ 
    'A  ', 
    'A  ', 
    'A  '  
  ],
  {
    A: 'kubejs:chain_link', 
  }
)
// Smoker Recipe
event.shaped(
  Item.of('minecraft:smoker', 1), 
  [ 
    'AAA', 
    'ADA', 
    'CCC',  
  ],
  {
    A: '#minecraft:logs',
	D: 'minecraft:furnace',
	C: 'minecraft:smooth_stone',
  }
)
// Stove Related Recipes
event.shaped(
  Item.of('kubejs:stove_grille', 3), 
  [ 
    'ACA', 
    '   ', 
    '   ',  
  ],
  {
    A: 'minecraft:iron_ingot',
	C: 'minecraft:iron_nugget',
  }
)
event.shaped(
  Item.of('farmersdelight:stove', 1), 
  [ 
    'AAA', 
    'C C', 
    'CDC',  
  ],
  {
    A: 'kubejs:stove_grille',
	C: 'minecraft:bricks',
	D: 'minecraft:campfire',
  }
)
// Sturdy Stone
event.stonecutting('1x kubejs:sturdy_stone', 'minecraft:cobblestone')
event.shaped(
  Item.of('kubejs:sturdy_stone', 1), 
  [ 
    'AA',
    'AA',  
  ],
  {
    A: 'minecraft:cobblestone',
  }
)
// Compat Recipes
event.shaped(
  Item.of('farmersdelight:safety_net', 1), 
  [ 
    'AA',
    'AA',  
  ],
  {
    A: '#forge:rope',
  })
  })
ServerEvents.recipes(event => {
event.shaped(
  Item.of('beautify:hanging_pot', 1),
  [
   'A',
   'B',
  ],
  {
	A: '#forge:rope',
	B: 'minecraft:flower_pot',
  })
})
