import React from 'react';
import { connect } from 'react-redux';
import './nihilistSquare.scss';
import { v4 as uuidv4 } from 'uuid';

class NihilistSquare extends React.PureComponent {
  /**
   * This generates the alphabet matrix
   * for the nihilist-specific polybius
   * square.
   */
  createVisualMatrix = () => {
    if (!this.props.nihilistSquare || this.props.nihilistSquare.length === 0)
      return;
    let table = (
      <table id='nihilistSquare'>
        <tbody>
          <tr>
            {['#', '1', '2', '3', '4', '5'].map((number) => (
              <th key={uuidv4()}>{number}</th>
            ))}
          </tr>
          {['1', '2', '3', '4', '5'].map((number) => {
            return (
              <tr key={uuidv4()}>
                <td>{number}</td>
                {this.props.nihilistSquare[Number(number) - 1].map((num) => (
                  <td key={uuidv4()}>{num}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
    return table;
  };

  render() {
    return (
      <div className='contentbox' style={{ borderBottom: 'none' }}>
        <div className='content-element'>
          <div className='content-element__settings-name'>
            Nihilist Polybius Square
          </div>
          <div className='content-element__settings-operators'>
            {this.createVisualMatrix()}
          </div>
          <p className='content-element__feature_text'>
            This method is a bit shaky encrypting forth and back. The letter "J"
            is left out and will be replaced by an 'I' - either not use this
            letter or at least be aware that there might be inconsistencies.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nihilistSquare: state.nihilistSquare,
});

export default connect(mapStateToProps)(NihilistSquare);