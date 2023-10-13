StartupEvents.registry('item', event => {
	event.create("chain_link").displayName("Chain Link").texture("kubejs:item/chain_link")
	event.create("leather_strap").displayName("Leather Strap").texture("kubejs:item/leather_strap")
	event.create("stove_grille").displayName("Stove Grille").texture("kubejs:item/stove_grille")
	event.create('incomplete_sweet_berry_cheesecake').displayName('Incomplete Sweet Berry Cheesecake').texture('kubejs:item/incomplete_sweet_berry_cheesecake').food(food => {food.hunger(1).saturation(0.5)});
	event.create('incomplete_barbecue_on_a_stick').displayName('Incomplete Barbecue on a Stick').texture('kubejs:item/incomplete_barbecue_on_a_stick').food(food => {food.hunger(0.5).saturation(0.2)});
	event.create('incomplete_apple_pie').displayName('Incomplete Apple Pie').texture('kubejs:item/incomplete_apple_pie').food(food => {food.hunger(0.5).saturation(0.2)});
	event.create('incomplete_melon_popsicle').displayName('Incomplete Melon Popsicle').texture('kubejs:item/incomplete_melon_popsicle').food(food => {food.hunger(1).saturation(0.1)});
	event.create('incomplete_stuffed_potato').displayName('Incomplete Stuffed Potato').texture('kubejs:item/incomplete_stuffed_potato').food(food => {food.hunger(2).saturation(1)});
	event.create('incomplete_black_glowlights').displayName('Incomplete Black Glow Lights').texture('kubejs:item/incomplete_black_glowlights');
	event.create('incomplete_blue_glowlights').displayName('Incomplete Blue Glow Lights').texture('kubejs:item/incomplete_blue_glowlights');
	event.create('incomplete_brown_glowlights').displayName('Incomplete Brown Glow Lights').texture('kubejs:item/incomplete_brown_glowlights');
	event.create('incomplete_cyan_glowlights').displayName('Incomplete Cyan Glow Lights').texture('kubejs:item/incomplete_cyan_glowlights');
	event.create('incomplete_gray_glowlights').displayName('Incomplete Gray Glow Lights').texture('kubejs:item/incomplete_gray_glowlights');
	event.create('incomplete_green_glowlights').displayName('Incomplete Green Glow Lights').texture('kubejs:item/incomplete_green_glowlights');
	event.create('incomplete_light_blue_glowlights').displayName('Incomplete Light Blue Glow Lights').texture('kubejs:item/incomplete_light_blue_glowlights');
	event.create('incomplete_light_gray_glowlights').displayName('Incomplete Light Gray Glow Lights').texture('kubejs:item/incomplete_light_gray_glowlights');
	event.create('incomplete_lime_glowlights').displayName('Incomplete Lime Glow Lights').texture('kubejs:item/incomplete_lime_glowlights');
	event.create('incomplete_magenta_glowlights').displayName('Incomplete Magenta Glow Lights').texture('kubejs:item/incomplete_magenta_glowlights');
	event.create('incomplete_orange_glowlights').displayName('Incomplete Orange Glow Lights').texture('kubejs:item/incomplete_orange_glowlights');
	event.create('incomplete_pink_glowlights').displayName('Incomplete Pink Glow Lights').texture('kubejs:item/incomplete_pink_glowlights');
	event.create('incomplete_purple_glowlights').displayName('Incomplete Purple Glow Lights').texture('kubejs:item/incomplete_purple_glowlights');
	event.create('incomplete_prismatic_glowlights').displayName('Incomplete Prismatic Glow Lights').texture('kubejs:item/incomplete_prismatic_glowlights');
	event.create('incomplete_red_glowlights').displayName('Incomplete Red Glow Lights').texture('kubejs:item/incomplete_red_glowlights');
	event.create('incomplete_white_glowlights').displayName('Incomplete White Glow Lights').texture('kubejs:item/incomplete_white_glowlights');
	event.create('incomplete_yellow_glowlights').displayName('Incomplete Yellow Glow Lights').texture('kubejs:item/incomplete_yellow_glowlights');
})
StartupEvents.registry('block', event => {
	event.create("sturdy_stone").displayName("Sturdy Stone").stoneSoundType().hardness(2.0).resistance(7.0).requiresTool(true).fullBlock(true).tagBlock("mineable/pickaxe").textureAll('kubejs:block/sturdy_stone').tagItem('forge:stone').tagBlock('forge:stone');
});

ItemEvents.modification(event => {
	event.modify('minecraft:cookie', item => {item.foodProperties = food => {food.alwaysEdible(true);food.fastToEat(true);food.saturation(0.2)};
	event.modify('farmersdelight:sweet_berry_cookie', item => {item.foodProperties = food => {food.alwaysEdible(true);food.fastToEat(true);food.saturation(0.2)};
	event.modify('farmersdelight:honey_cookie', item => {item.foodProperties = food => {food.alwaysEdible(true);food.fastToEat(true);food.saturation(0.2)};
})})})})
