import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { subjects, grades, resourceTypes, formats } from '../../CONSTANTS';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ formTitle, isARequest }) {
  const [title, setTitle] = useState('');
  const [subjectSelected, setSubjectSelected] = useState('none');
  const [gradesSelected, setGradesSelected] = useState([]);
  const [gradesDisabled, setGradesDisabled] = useState(false);
  const [resourceTypeSelected, setResourceTypeSelected] = useState('none');
  const [formatSelected, setFormatSelected] = useState('none');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Status Variables (dropdown statuses are handled in dropdown component)
  const [titleStatus, setTitleStatus] = useState('normal');
  const [gradesStatus, setGradesStatus] = useState('normal');
  const [linkStatus, setLinkStatus] = useState('normal');
  const [priceStatus, setPriceStatus] = useState('normal');
  const [emailStatus, setEmailStatus] = useState('normal');

  function handleDescriptionInput(event) {
    const input = event.target.value;
    if (input.length <= 1500) {
      setDescription(input);
    } else {
      setDescription(input.substring(0, 1500));
    }
  };

  function handleCheckboxChange(event) {
    if (event.target.checked && gradesSelected.length < 4) {
      setGradesSelected([...gradesSelected, event.target.value]);
      setGradesStatus('normal');
      if (gradesSelected.length === 3) {
        setGradesDisabled(true);
      }
    } else if (event.target.checked) {
      setGradesDisabled(true);
    } else {
      setGradesSelected(
        gradesSelected.filter(grade => grade !== event.target.value)
      );
      setGradesDisabled(false);
    } 
  };

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    if (gradesSelected.length === 0) {
      setGradesStatus('error');
    }
    if (title === '') {
      setTitleStatus('error');
    }

    if (!isARequest && (link === '' || price === '')) {
      if (link === '') {
        setLinkStatus('error');
      }
      if (price === '') {
        setPriceStatus('error');
      }
    }
    if (isARequest) {
      const newRequest = {
        title: title,
        subject: subjectSelected,
        grades: gradesSelected,                     // String
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
        grades: gradesSelected,                    // Array of strings
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
  };

  return (
    <form>
      <h1>{formTitle}</h1>
      
      <div className="form-section">
        <label>
          Title your request
          <input
            className="title-input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            data-status={titleStatus}
            placeholder="Enter a clear, descriptive title"
          ></input>
          {titleStatus == 'error' && (
            <p className="error">This field is required.</p>
          )}
        </label>
      </div>

      <div className="form-section">
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
            label="Resource type"
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
      </div>

      <div className="form-section">
        <div className="form-group">
          <label className="dropdown-header">Select up to 4 grade levels</label>
          <p className="field-helper-text">Choose the appropriate grade levels for your request</p>
          <fieldset data-status={gradesStatus} className="grades-fieldset">
            <div className="grade-group">
              <h4>Elementary School</h4>
              {grades.filter(g => ['1st', '2nd', '3rd', '4th', '5th'].includes(g)).map(option => (
                <label key={option} className="grade-checkbox">
                  <input
                    type="checkbox"
                    value={option}
                    disabled={gradesDisabled && !gradesSelected.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            
            <div className="grade-group">
              <h4>Middle School</h4>
              {grades.filter(g => ['6th', '7th', '8th'].includes(g)).map(option => (
                <label key={option} className="grade-checkbox">
                  <input
                    type="checkbox"
                    value={option}
                    disabled={gradesDisabled && !gradesSelected.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            
            <div className="grade-group">
              <h4>High School</h4>
              {grades.filter(g => ['9th', '10th', '11th', '12th'].includes(g)).map(option => (
                <label key={option} className="grade-checkbox">
                  <input
                    type="checkbox"
                    value={option}
                    disabled={gradesDisabled && !gradesSelected.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>     
            {gradesStatus == 'error' && (
              <p className="error bottom-right">This field is required.</p>
            )}
          </fieldset>
        </div>
      </div>

      {!isARequest && (
        <div className="form-section">
          <div className="link-and-price">
            <label>
              {' '}
              Link to resource
              <p className="field-helper-text">Add a valid URL to your resource</p>
              <input
                type="link"
                className="link-input"
                placeholder="https://example.com/resource"
                value={link}
                onChange={event => setLink(event.target.value)}
              ></input>
              {linkStatus == 'error' && (
                <p className="error">This field is required.</p>
              )}
            </label>
            <label>
              {' '}
              Price
              <p className="field-helper-text">Enter the price in USD</p>
              <input
                type="number"
                className="price-input"
                placeholder="Price"
                value={price}
                onChange={event => setPrice(event.target.value)}
              ></input>
              {priceStatus == 'error' && (
                <p className="error">This field is required.</p>
              )}
            </label>
          </div>
        </div>
      )}

      <div className="form-section">
        <label>
          {isARequest ? 'Describe your request' : 'Describe your resource'}
          <p className="field-helper-text">Provide detailed information to help others understand your needs (max 1500 characters)</p>
          <textarea
            className="description-input"
            onInput={handleDescriptionInput}
            value={description}
            placeholder="Enter a detailed description"
          >
            {' '}
          </textarea>
          <div> {`${description.length}/1500`}</div>
        </label>
      </div>

      <div className="form-section">
        <label>
          {' '}
          {isARequest 
            ? 'Provide your email to get updates on your request' 
            : 'Provide your email to get updates on your resource'}
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>
      </div>

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