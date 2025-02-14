import { useState } from 'react';
import Dropdown from '../components/dropdown';
import NavBar from '../components/NavBar';
import { subjects, grades, resourceTypes, formats } from '../CONSTANTS';

function RequestPage({}) {
  const [subjectSelected, setSubjectSelected] = useState('none');
  const [gradeSelected, setGradeSelected] = useState('none');
  const [resourceTypeSelected, setResourceTypeSelected] = useState('none');
  const [formatSelected, setFormatSelected] = useState('none');
  const [description, setDescription] = useState('');

  function handlesDescriptionInput(event) {
    if (event.target.value.length <= 600) {
      setDescription(event.target.value);
    }
  }
  return (
    <>
      <NavBar />
      <form>
        <h1>Request a Resource</h1>
        <h3>Title your request</h3>
        <input className="title-input"></input>
        <h3> Select an option for each dropdown. </h3>
        <div className="dropdown-container">
          <Dropdown
            options={subjects}
            label="Subject"
            selected={subjectSelected}
            setSelected={setSubjectSelected}
          />
          <Dropdown
            options={grades}
            label="Grade"
            selected={gradeSelected}
            setSelected={setGradeSelected}
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
        <h3> Describe your request</h3>
        <textarea
          className="description-input"
          onChange={handlesDescriptionInput}
        >
          {' '}
        </textarea>
        <div> {`${description.length}/600`}</div>
        <h3>Provide your email to get updates on your request.</h3>
        <input type="email" placeholder="Email"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default RequestPage;
