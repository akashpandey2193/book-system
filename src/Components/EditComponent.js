import React,{ useState } from 'react'
import '../styles/editComponent.scss'

function EditComponent (props) {
  const [allValues, setAllValues] = useState({
    isbn: props.selectedBook.isbn || '',
    title: props.selectedBook.title || '',
    subtitle: props.selectedBook.subtitle || '',
    author: props.selectedBook.author || '',
    published: props.selectedBook.published || '',
    publisher: props.selectedBook.publisher || '',
    pages: props.selectedBook.pages || '',
    description: props.selectedBook.description || '',
    index: props.selectedBookIndex
 });
 const changeHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
 }
 const onSubmit = () => {
  props.editSaveBooks({...allValues})
  props.toggleEditBook(false)
 }

  return (
    <div className="container-edit">
      {/* form onSubmit= */}
        <div className="form-container">
          <label>
            ISBN:
            <input name="isbn" value={allValues.isbn} onChange={changeHandler}/>
          </label>
          <label>
            Title:
            <input name="title" value={allValues.title} onChange={changeHandler}/>
          </label>
          <label>
            Subtitle:
            <input name="subtitle" value={allValues.subtitle} onChange={changeHandler}/>
          </label>
          <label>Author:
            <input name="author" value={allValues.author} onChange={changeHandler}/>
          </label>
          <label>
            Published:
            <input name="published" value={allValues.published} onChange={changeHandler}/>
          </label>
          <label> Publisher:<input name="publisher" value={allValues.publisher} onChange={changeHandler}/> </label>
          <label> Pages: <input name="pages" value={allValues.pages} onChange={changeHandler}/></label>
          <label> Description: <textarea name="description" value={allValues.description} onChange={changeHandler}/></label>
          <div className="button-container">
            <input type="submit" value="Submit" className="buttons" onClick={()=> onSubmit()}/>
            <input type="button" onClick={() => props.toggleEditBook(false)} value="Close" className="buttons ml-auto"></input>
          </div>
        </div>
    </div>
  )
}

export default EditComponent;
