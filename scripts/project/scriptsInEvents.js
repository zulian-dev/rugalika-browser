


const scriptsInEvents = {

		async Game_Event16_Act1(runtime, localVars)
		{
			/*var numberString = localvars.Value.toString();
			for (var i = 0; i < numberString.length; i++){
			  runtime.objects.DamageNumbers.getFirstPickedInstance().text+= "[offsety=0]"+numberString.charAt(i)+"[/offsety]";
			}*/
		},

		async _historia_Event1(runtime, localVars)
		{
			/*
			
			BUGS: 
			- Quando sobe mais de um nivel por vez, não esta dando mais de um ponto de upgrade. para testar, pegar um diamante de XP e observar que sobe varios niveis mas só ganha um ponto.
			
			- 
			
			
			
			
			01 = 1 - 10 
			
			
			1 - 100
			x - y
			
			
			1 - 
			
			
			
			*/
		},

		async Layoutgenerator_Event1_Act1(runtime, localVars)
		{
			const {
				LevelNumber,
				BlockLayoutSize,
				BlockLayoutsCount,
				FullStageSize,
				Rows,
				Cols,
				RowAtual,
				ColAtual,
				Chance
			} = localVars
			
			const percentChance = (percent) => 
			 	Math.round( Math.random() * 100 ) <= percent
			
			const buildLayerName = "Builds"
			const tileLayerName = "TileMap"
			const bgLayerName = "Bg"
			
			for (let currentX=0; currentX<Cols; currentX++) {
				for (let currentY=0; currentY<Rows; currentY++) {
					//if (!percentChance(Chance)){
					//	continue
					//}
					
					const layout = Math.round( Math.random() * BlockLayoutsCount )
					
					const blockName = "M" + LevelNumber + "L" + layout
					const colisionName = blockName + "C"
					const tileName = blockName + "T"
					const bgName = "M" + LevelNumber + "BG"
					
					const positionX = BlockLayoutSize * currentX
					const positionY = BlockLayoutSize * currentY
					runtime.objects[bgName].createInstance(
						bgLayerName, positionX, positionY
					)
					if (!percentChance(Chance)){
						continue
					}
					runtime.objects[tileName].createInstance(
						tileLayerName, positionX, positionY
					)
					runtime.objects[colisionName].createInstance(
						buildLayerName, positionX, positionY
					)
					
				}
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

