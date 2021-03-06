import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Actions
import { toggleAnalysisModal } from '../../../actions/toggleAnalysisModal';
import {
  toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodICInput,
  toggleAnalysisMethodICOutput,
  toggleAnalysisMethodCHIOutput,
  toggleAnalysisMethodCHIInput,
} from '../../../actions/toggleAnalysisMethod';

//Assets
import '../modal.scss';

const AnalysisModal = ({
  analysisModal,
  toggleAnalysisModal,
  toggleAnalysisMethodICInput,
  toggleAnalysisMethodICOutput,
  toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodCHIOutput,
  toggleAnalysisMethodCHIInput,
  ic_input,
  ic_output,
  fq_input,
  fq_output,
  chi_output,
  chi_input,
  isAuthenticated,
}) => {
  return (
    <Fragment>
      {analysisModal ? (
        <div className='modal-wrapper' onClick={() => toggleAnalysisModal()}>
          <div className='modal'>
            <div className='modal__header'>Add a method of cryptoanalysis</div>
            <div className='modal__body'>
              <div className='modal__content'>
                <ul>
                  {ic_input &&
                  ic_output &&
                  fq_input &&
                  fq_output &&
                  chi_output &&
                  chi_input ? (
                    <li className='modal__list-item modal__list-item--cta'>
                      All available methods already in use...
                    </li>
                  ) : null}
                  {!isAuthenticated ? (
                    <li className='modal__list-item modal__list-item--red modal__list-item--cta'>
                      Login or signup to get more analysis tools!
                    </li>
                  ) : null}
                  {!fq_input || !fq_output ? (
                    <li className='modal__list-item'>
                      <button
                        className='modal__encryption-method'
                        onClick={() => {
                          !fq_input && toggleAnalysisMethodFQInput();
                          !fq_output && toggleAnalysisMethodFQOutput();
                        }}
                      >
                        Frequency Analysis
                      </button>
                    </li>
                  ) : null}
                  {!ic_input || !ic_output ? (
                    <li className='modal__list-item'>
                      <button
                        className='modal__encryption-method'
                        onClick={() => {
                          !ic_input && toggleAnalysisMethodICInput();
                          !ic_output && toggleAnalysisMethodICOutput();
                        }}
                      >
                        Index of Coincidence
                      </button>
                    </li>
                  ) : null}
                  {!chi_input || !chi_output ? (
                    <li className='modal__list-item'>
                      <button
                        className='modal__encryption-method'
                        onClick={() => {
                          !chi_input && toggleAnalysisMethodCHIInput();
                          !chi_output && toggleAnalysisMethodCHIOutput();
                        }}
                      >
                        Chi Squared
                      </button>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  analysisModal: state.analysisModal,
  fq_input: state.analysisMethod.fq_input,
  fq_output: state.analysisMethod.fq_output,
  ic_input: state.analysisMethod.ic_input,
  ic_output: state.analysisMethod.ic_output,
  chi_input: state.analysisMethod.chi_input,
  chi_output: state.analysisMethod.chi_output,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapActionsToProps = {
  toggleAnalysisModal: toggleAnalysisModal,
  toggleAnalysisMethodFQInput: toggleAnalysisMethodFQInput,
  toggleAnalysisMethodFQOutput: toggleAnalysisMethodFQOutput,
  toggleAnalysisMethodICInput: toggleAnalysisMethodICInput,
  toggleAnalysisMethodICOutput: toggleAnalysisMethodICOutput,
  toggleAnalysisMethodCHIOutput: toggleAnalysisMethodCHIOutput,
  toggleAnalysisMethodCHIInput: toggleAnalysisMethodCHIInput,
};

AnalysisModal.propTypes = {
  analysisModal: PropTypes.bool.isRequired,
  fq_input: PropTypes.bool.isRequired,
  fq_output: PropTypes.bool.isRequired,
  ic_input: PropTypes.bool.isRequired,
  ic_output: PropTypes.bool.isRequired,
  chi_input: PropTypes.bool.isRequired,
  chi_output: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool,
  toggleAnalysisModal: PropTypes.func.isRequired,
  toggleAnalysisMethodFQInput: PropTypes.func.isRequired,
  toggleAnalysisMethodFQOutput: PropTypes.func.isRequired,
  toggleAnalysisMethodICInput: PropTypes.func.isRequired,
  toggleAnalysisMethodICOutput: PropTypes.func.isRequired,
  toggleAnalysisMethodCHIOutput: PropTypes.func.isRequired,
  toggleAnalysisMethodCHIInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(AnalysisModal);
