import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'
import { Color4 } from '@dcl/sdk/math'
import { LabelCustom } from './ui.components'


// MARK: UV Test UI
export function UVTest() {

	return (
		<UiEntity
			key = "ui_root"
			uiTransform={{
				width         : '100%',
				height        : '100%',
				flexDirection : 'column',
				alignItems    : 'center',
				justifyContent: 'center',
				positionType  : "absolute",
			}}
		>


			<UiEntity
				key = "ui_body"
				uiTransform={{
					display       : 'flex',
					width         : 640,
					height        : 264,
					flexDirection : 'row',
					alignItems    : 'center',
					justifyContent: 'space-between',
					borderRadius  : { topLeft: 24, topRight: 8, bottomLeft: 8, bottomRight: 24 },
					padding       : { left: 8, right: 8, bottom: 32 },
					borderColor   : Color4.fromHexString("#4C9581FF"),
					borderWidth   : 3,
				}}
				uiBackground={{ color: Color4.fromHexString("#4C958166") }}
			>


	
				{/* MARK: 1: No UVS 
				*/}
				<UiEntity
					key = "uv_test_1"
					uiTransform={{
						width         : 200,
						height        : 200,
						flexDirection : 'column',
						alignItems    : 'center',
						justifyContent: 'flex-end',
					}}
					uiBackground={{ 
						texture: { src: 'assets/UVGrid.png' },
						textureMode: 'stretch',
					}}
				>
					<LabelCustom value="No UVS | stretch" />
				</UiEntity>



				{/* MARK: 2: stretch 
				*/}
				<UiEntity
					key = "uv_test_2"
					uiTransform={{
						width         : 200,
						height        : 200,
						flexDirection : 'column',
						alignItems    : 'center',
						justifyContent: 'flex-end',

					}}
					uiBackground={{ 
						texture: { src: 'assets/UVGrid.png' },
						textureMode: 'stretch',
						uvs: [0, 0, 0.5, 0.5]
					}}
				>
					<LabelCustom value="UVS [0, 0, 0.5, 0.5] | stretch" />
				</UiEntity>



				{/* MARK: 3: center 
				*/}
				<UiEntity
					key = "uv_test_3"
					uiTransform={{
						width         : 200,
						height        : 200,
						flexDirection : 'column',
						alignItems    : 'center',
						justifyContent: 'flex-end',

					}}
					uiBackground={{ 
						texture: { src: 'assets/UVGrid.png' },
						textureMode: 'center',
						uvs: [0, 0, 0.5, 0.5]
					}}
				>
					<LabelCustom value="UVS [0, 0, 0.5, 0.5] | center" />
				</UiEntity>


			</UiEntity>		
		</UiEntity>
	)
}
