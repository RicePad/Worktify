import React, { Component } from 'react';
import { fetchGigs } from '../actions';
import { connect } from 'react-redux'
import _ from 'lodash';
import GigItem from './GigItem';
import GigsNew from './GigsNew';
import { Link } from 'react-router-dom';
import AppBanner from './AppBanner';
import Navbar from './Navbar';



class GigIndex extends Component {

	componentDidMount(){
		this.props.fetchGigs()
	}

	

	render(){
		console.log(this.props.gigs)
		return(
			<div> 
				<Navbar />
					<div>
					
				{ /********************** Render GigItem Component *********************** */ }
	 
	 				{
						_.map(this.props.gigs, gig => {
							return(
									<GigItem gig={gig} key={gig.id} />
								)
						})
					}

					<div>
						<Link to={'gigs/new'}>
							<button className="btn btn-success">Submit a Gig </button>
						</Link>
					</div>
				</div>
		</div>
			)
	}
	         /********************** End of GigItem Component *********************** */ 

}


function mapStateToProps(state){
	return {
		gigs: state.gigs
	}
}

export default connect(mapStateToProps, { fetchGigs })(GigIndex);