import React from 'react'

const Alphabet = ({alphabet, alphabetUpdate, alphabetActive}) => {
  return (
    <div className="controller">
      <div className="settings_name">Alphabet</div>
      <div className="settings_operators">
          <textarea style={{boxShadow: 'none'}}
            id="alphabet" 
            value={alphabet}
            readOnly = {!alphabetActive}
            onChange = {(evt) => {
              alphabetUpdate(evt)  
            }}
          />
      </div>
    </div>
  )
}

export default Alphabet