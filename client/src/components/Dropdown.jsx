import PropTypes from 'prop-types';

function Dropdown({
  options,
  label,
  multiple,
  selected,
  setSelected,
  status,
  setStatus,
  initialTermIsDisabled,
  setInitialTermIsDisabled,
}) {
  function handleInput(event) {
    if (event.target.value !== 'none') {
      setSelected(event.target.value);
      setStatus('normal');
      setInitialTermIsDisabled(true);
    } else {
      setStatus('error');
      throw new Error('This should never happen');
    }
  }

  return (
    <label htmlFor={`${label}_input`} className="label-on-top">
      {`${label}`}
      <div className="select-container" data-status={status}>
        <select
          id={`${label}_input`}
          value={selected}
          onChange={event => handleInput(event)}
          multiple={multiple | false}
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
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  initialTermIsDisabled: PropTypes.bool.isRequired,
  setInitialTermIsDisabled: PropTypes.func.isRequired,
};

export default Dropdown;
