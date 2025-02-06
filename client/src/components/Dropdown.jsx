function Dropdown({
  term,
  setTerm,
  status,
  setStatus,
  initialTermIsDisabled,
  setInitialTermIsDisabled,
}) {
  function handleInput(event) {
    if (event.target.value !== 'none') {
      setTerm(event.target.value);
      setStatus('normal');
      setInitialTermIsDisabled(true);
    } else {
      setStatus('error');
      throw new Error('This should never happen');
    }
  }
  return (
    <label htmlFor="mortgage-term" className="label-on-top">
      Mortgage Term
      <div className="term-container" data-status={status}>
        <select
          id="mortgage-term"
          value={term}
          onChange={event => handleInput(event)}
        >
          <option value="none" disabled={initialTermIsDisabled}>
            Select Term
          </option>
          <optgroup label="term-options">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </optgroup>
        </select>
        <div id="years-unit" className="back-unit">
          years
        </div>
      </div>
      {status == 'error' && <p className="error">This field is required.</p>}
    </label>
  );
}

export default Dropdown;
