import React, {Component} from 'react'
import Link from               'next/link'


export default class About extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("About Component mounted.")
	}
	render() {
		return (
			<div>

		
					<main>
						<p>Sup about</p>
						<Link href='/'>
							<a>Back</a>
						</Link>
					</main>
			

			</div>
		)
	}
}
