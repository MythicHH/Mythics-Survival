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
})
ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', 'minecraft:milk')
})
ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', 'create:honey')
})
ServerEvents.recipes(event => {
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
  })
event.shaped(
  Item.of('minecraft:chainmail_helmet', 1), 
  [ 
    'AAA', 
    'A A', 
    '   '  
  ],
  {
    A: 'kubejs:chain_link', 
  })
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
  })
event.shaped(
  Item.of('minecraft:chainmail_leggings', 1), 
  [ 
    'VVV',
    'V V', 
    'V V'  
  ],
  {
    V: 'kubejs:chain_link', 
  })
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
  })
event.shaped(
  Item.of('kubejs:leather_strap', 1), 
  [ 
    'AAA', 
    '   ', 
    '   '  
  ],
  {
    A: 'minecraft:leather', 
  })
event.shaped(
  Item.of('minecraft:chain', 3), 
  [ 
    'A  ', 
    'A  ', 
    'A  '  
  ],
  {
    A: 'kubejs:chain_link', 
  })
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
  })
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
  })
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
  })
event.stonecutting('1x kubejs:sturdy_stone', 'minecraft:stone')
})


