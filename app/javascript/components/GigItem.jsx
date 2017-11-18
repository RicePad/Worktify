import React, { Component } from 'react';


class GigItem extends Component {
	
	render(){

		const gig = this.props.gig

		
		return(
			
				<div className="col-md-2">
					<div>
						<a href="/gigs/1"><img src={gig.thumb_image}/></a>
					</div>
					<div className="caption">
						<p>
							{gig.title}
							 <span> By RicePad</span>
							 <b className="green pull-right">${gig.price}</b>

						</p>
					</div>
				</div>
			
			)
	}
}


export default GigItem;