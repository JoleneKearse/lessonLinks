import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Dropdown({ options, label, selected, setSelected, isSubmitted }) {
  const [status, setStatus] = useState('normal');
  const [initialTermIsDisabled, setInitialTermIsDisabled] = useState(false);

  function handleInput(event) {
    if (event.target.value !== 'none') {
      setSelected(event.target.value);
      setStatus('normal');
      setInitialTermIsDisabled(true);
    } else {
      setStatus('error');
      throw new Error('This should never happen');
    }
    console.log('status: ', status);
  }

  useEffect(() => {
    if (isSubmitted) {
      if (selected !== 'none') setStatus('normal');
      else setStatus('error');
    }
  }, [isSubmitted, selected]);

  return (
    <label htmlFor={`${label}_input`} className="label-on-top">
      {`${label}`}
      <div className="select-container" data-status={status}>
        <select
          id={`${label}_input`}
          value={selected}
          onChange={event => handleInput(event)}
        >
          <option value="none" disabled={initialTermIsDisabled}>
            {`Select ${label}`}
          </option>
          <optgroup label={`${label} options`}>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      {status == 'error' && <p className="error">This field is required.</p>}
    </label>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default Dropdown;
