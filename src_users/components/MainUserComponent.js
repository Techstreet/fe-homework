import React from 'react'
import { Link } from 'react-router'

const MainUserComponent = (props) => (
	<div className='w100p'>
		<div className='contentWrapper'>
			<div className='header'>
				Create New User
			</div>
			<div className='contentContainer'>
				Create a new user account by clicking the new account button below.
				<div className='btnWrapper'>
					<Link to='/create'>
						<button className='btnStyles'>Create New User</button>
					</Link>
					<Link to='/edit'>
						<button className='btnStyles'>Edit Existing User</button>
					</Link>
				</div>
			</div>
		</div>
	</div>
)

export default MainUserComponent;
