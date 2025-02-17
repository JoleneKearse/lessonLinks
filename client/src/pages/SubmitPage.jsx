import NavBar from '../components/NavBar';
import Form from '../components/Form'

function SubmitPage({ }) {  //for children in react, no need to write props.children, already assumes children is passed in
     return (
          <>
          <NavBar/>
               <Form formTitle="Submit a Resource">
               <label> Link to Resource
                    <input type="link" className="link-input" placeholder="Link to resource"></input>
                    </label>
               <label> Price 
                  <input type="number" className="price-input" placeholder="Price"></input>
               </label>
               </Form>
          </>

     )
}

export default SubmitPage;