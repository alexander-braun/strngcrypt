import React from 'react'


class PlayfaireSquare extends React.Component {

    createVisualMatrix = () => {
        let parent = []
        let children = []
        for(let i = 0; i < 25; i++) {
            let ID = 'table' + i;
            children.push(
                <div    key={ID} 
                        id={ID} 
                        className="playfairTable"
                    >
                        {this.props.playSquare[i]}
                </div>
            )
        }
        parent.push(
            <div id="visualMatrix" style={{boxShadow:'none'}} className="controller">{children}</div>
        )
        return parent
    }

    render() {
        return (
            <div className="controller" style={{boxShadow: 'inset 0 10px 10px -10px #0000005b'}}>
                <div className="settings_name">PLAYFAIR SQUARE</div>
                <div className="settings_operators">
                    {this.createVisualMatrix()}
                </div>
                <div id="skytale_explanatory_text">
                    <p className="feature_text"> 
                        This method is a bit shaky encrypting forth and back. One letter is
                        left out and substituted with another letter - either not use this letter or
                        at least be aware that there might be inconsistencies. A substitution letter will 
                        be added if two of the same letters occure directly after each other (if the first letter 
                        is on an even index). Change the '<b>j</b>' in the default input message to an '<b>i</b>' 
                        for a better encryption result.
                    </p>
                </div>    
            </div> 
        )
    }
}

export default PlayfaireSquare