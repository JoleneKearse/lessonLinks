import { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { subjects, grades, resourceTypes, formats } from '../CONSTANTS';

function Form({ formTitle, isARequest }) {
  const [title, setTitle] = useState('');
  const [subjectSelected, setSubjectSelected] = useState('none');
  const [gradesSelected, setGradesSelected] = useState([]);
  const [resourceTypeSelected, setResourceTypeSelected] = useState('none');
  const [formatSelected, setFormatSelected] = useState('none');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleDescriptionInput(event) {
    const input = event.target.value;
    if (input.length <= 1500) {
      setDescription(input);
    } else {
      setDescription(input.substring(0, 1500));
    }
  }

  function handleCheckboxChange(event) {
    if (event.target.checked) {
      setGradesSelected([...gradesSelected, event.target.value]);
    } else {
      setGradesSelected(
        gradesSelected.filter(grade => grade !== event.target.value)
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);

    if (isARequest) {
      const newRequest = {
        title: title,
        subject: subjectSelected,
        grades: gradesSelected,
        resourceType: resourceTypeSelected,
        format: formatSelected,
        description: description,
        email: email,
      };
      console.log(newRequest);
      console.log(JSON.stringify(newRequest));
    } else {
      const newResource = {
        title: title,
        subject: subjectSelected,
        grades: gradesSelected,
        resourceType: resourceTypeSelected,
        format: formatSelected,
        description: description,
        link: link,
        price: price,
        email: email,
      };
      console.log(newResource);
      console.log(JSON.stringify(newResource));
    }
  }

  return (
    <form>
      <h1>{formTitle}</h1>
      <label>
        Title your request
        <input
          className="title-input"
          value={title}
          onChange={() => setTitle(event.target.value)}
        ></input>
      </label>
      <label className="dropdown-header">
        {' '}
        Select an option for each dropdown.
        <div className="dropdown-container">
          <Dropdown
            options={subjects}
            label="Subject"
            selected={subjectSelected}
            setSelected={setSubjectSelected}
            isSubmitted={isSubmitted}
          />

          <Dropdown
            options={resourceTypes}
            label="Resource Type"
            selected={resourceTypeSelected}
            setSelected={setResourceTypeSelected}
            isSubmitted={isSubmitted}
          />
          <Dropdown
            options={formats}
            label="Format"
            selected={formatSelected}
            setSelected={setFormatSelected}
            isSubmitted={isSubmitted}
          />
        </div>
      </label>
      <fieldset>
        <legend>Select up to 4 Grade Levels</legend>
        {grades.map(option => (
          <label key={option}>
            <input
              key={option}
              type="checkbox"
              label={option}
              value={option}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <div className="link-and-price">
        {!isARequest && (
          <>
            <label>
              {' '}
              Link to Resource
              <input
                type="link"
                className="link-input"
                placeholder="Link to resource"
                value={link}
                onChange={event => setLink(event.target.value)}
              ></input>
            </label>
            <label>
              {' '}
              Price
              <input
                type="number"
                className="price-input"
                placeholder="Price"
                value={price}
                onChange={event => setPrice(event.target.value)}
              ></input>
            </label>
          </>
        )}
      </div>

      <label>
        {' '}
        Describe your request
        <textarea
          className="description-input"
          onInput={handleDescriptionInput}
          value={description}
        >
          {' '}
        </textarea>
        <div> {`${description.length}/1500`}</div>
      </label>
      {isARequest ? (
        <label>
          Provide your email to get updates on your request.
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={() => setEmail(event.target.value)}
          ></input>
        </label>
      ) : (
        <label>
          Provide your email to get updates on your resource.
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={() => setEmail(event.target.value)}
          ></input>
        </label>
      )}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  isARequest: PropTypes.bool.isRequired,
};

export default Form;
