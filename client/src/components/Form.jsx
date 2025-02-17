import { useState } from 'react';
import  Dropdown  from './Dropdown';
import { subjects, grades, resourceTypes, formats } from '../CONSTANTS';



function Form({ formTitle, children }) {
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
          <form>
               <h1>{formTitle}</h1>
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
               <div className="link-and-price">{children}</div>
               
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
     )
}

export default Form;