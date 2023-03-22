import React, { FC, memo, CSSProperties } from "react"
import "./PlanetLoader.scss"

export type TLoader = {
	overStyle?: CSSProperties
	text?: string
}

const PlanetLoader: FC<TLoader> = memo(({ overStyle, text = "loading" }) => {
	return (
		<div className={"planet-loader-content"} style={overStyle}>
			<div className={"planet"}>
				<div className={"ring"}></div>
				<div className={"coverRing"}></div>
				<div className={"spots"}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<p className='loader-text'>{text}</p>
		</div>
	)
})

export default PlanetLoader
