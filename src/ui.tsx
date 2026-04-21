import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'

import { UVTest } from 'src/ui.uvtest'

// MARK: Main
const uiComponent = () => [
	UVTest(),
]

export function SetupUI() {
	ReactEcsRenderer.setUiRenderer(uiComponent)
}
