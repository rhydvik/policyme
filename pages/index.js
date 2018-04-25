// Libraries
import React, {Component} from  'react'
import Link from   'next/link'

// Components

import CTA from 'components/CTA'
import DetailedCTA from 'components/DetailedCTA'
import Points from 'components/Points'
import Button from 'components/Button'

import { PointsCircle } from 'components/SVG/PointsCircle'

export default class Index extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("Index Component mounted.")
	}
	render() {
		return (
			<div>

					<main>
						<h1>home page</h1>
					</main>
				</div>



		)
	}
}
