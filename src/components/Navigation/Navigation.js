import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return( 
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3-l link dib pa3 ph4-l pointer black-80 " onClick= { () => onRouteChange('signout') }> Sign Out</p>
            </nav>
        </div>)
    }
    else {
        return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3-l link dib pa3 ph4-l pointer black-80 " onClick= { () => onRouteChange('signin') }> Sign in</p>
                <p className="f3-l link dib pa3 ph4-l pointer black-80 " onClick= { () => onRouteChange('register') }> Register</p>
            </nav>
        </div>)
    }

}

export default Navigation
