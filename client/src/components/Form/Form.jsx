import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { subjects, grades, resourceTypes, formats } from '../../CONSTANTS';
import './Form.css';

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
      <h3>Title your request</h3>
      <input
        className="title-input"
        value={title}
        onChange={() => setTitle(event.target.value)}
      ></input>
      <h3> Select an option for each dropdown. </h3>
      <div className="dropdown-container">
        <Dropdown
          options={subjects}
          label="Subject"
          selected={subjectSelected}
          setSelected={setSubjectSelected}
        />

        <Dropdown
          options={resourceTypes}
          label="Resource Type"
          selected={resourceTypeSelected}
          setSelected={setResourceTypeSelected}
        />
        <Dropdown
          options={formats}
          label="Format"
          selected={formatSelected}
          setSelected={setFormatSelected}
        />
      </div>
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

      <h3> Describe your request</h3>
      <textarea
        className="description-input"
        onInput={handleDescriptionInput}
        value={description}
      >
        {' '}
      </textarea>
      <div> {`${description.length}/600`}</div>
      {/* {!isARequest && (
        <label>
      <div> {`${description.length}/1500`}</div>
      {!isARequest && (
        <label className="link-input">
          Link to your Resource<input type="link" placeholder="Link"></input>
        </label>
      )} */}
      {isARequest ? (
        <h3>Provide your email to get updates on your request.</h3>
      ) : (
        <h3>Provide your email to get updates on your resource.</h3>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={() => setEmail(event.target.value)}
      ></input>
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
