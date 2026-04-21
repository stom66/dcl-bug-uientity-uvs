import ReactEcs, { Button, PositionUnit, UiEntity} from '@dcl/sdk/react-ecs'
import { Color4 } from "@dcl/sdk/math"


export const LabelCustom = ({ value }: { value: string }) => {
	return (
		<UiEntity
			uiTransform={{
				display: 'flex',
				width: '80%',
				height: '32',
				borderRadius: 8,
				positionType: 'relative',
				position: { bottom: -36 }
			}}
			uiBackground={{ 
				color: Color4.fromHexString("#000000cc") 
			}}
			uiText={{ 
				value: value, 
				textAlign: 'middle-center'
			}}
		>
		</UiEntity>
	)
}
