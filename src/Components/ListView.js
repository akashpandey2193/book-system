import React from 'react'
import '../styles/listview.scss';
import EditComponent from './EditComponent'

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      filterList: [],
      edit: false,
      selectedBook: {},
      selectedBookIndex: null,
      loading: false
    }
    this.timeout = null;
    this.editSaveBooks = this.editSaveBooks.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.toggleEditBook =  this.toggleEditBook.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
  }

  toggleEditBook(val, selectedBookIndex = null ) {

    if(selectedBookIndex === null) this.setState({ edit: false, selectedBook: null, selectedBookIndex: null })
    else {

      if(selectedBookIndex !== '_null' && this.state.filterList.length > 0) {
        let correctIndex = null
        this.props.books.map((item, index) => {
          if (item.author === this.state.filterList[selectedBookIndex].author) {
            correctIndex = index
          }
        })
        selectedBookIndex = correctIndex
      }

      this.setState({
        edit: val,
        selectedBookIndex: selectedBookIndex === '_null' ? null: selectedBookIndex,
        selectedBook: selectedBookIndex === '_null' ? {} : this.props.books[selectedBookIndex]
      })
    }

  }

  handleChange(e) {
    this.setState({
      searchVal: e.target.value
    })
    if(e.target.value) this.setState({ filterList: [] })

    if(this.timeout) {
      this.setState({
        loading: false
      })
      clearTimeout(this.timeout);
    }
    this.setState({
      loading: true
    })
    this.timeout = setTimeout(() => {
      this.filterBookList();
      this.setState({
        loading: false
      })
    }, 2000);
  }

  filterBookList = () => {
    const filterList = this.props.books.filter( book => book['author'].includes(this.state.searchVal) || book['title'].includes(this.state.searchVal))
    this.setState({
      filterList
    })
  }

  editSaveBooks = (book) => {
    this.setState({
      filterList: [],
      searchVal: ''
    })
    this.props.editSaveBooks(book)
  }

  render() {
    return (
      <div>
        { this.state.edit ?
        <EditComponent
          selectedBookIndex={this.state.selectedBookIndex}
          selectedBook= {this.state.selectedBook }
          editSaveBooks={this.editSaveBooks}
          toggleEditBook={this.toggleEditBook}/>
        : null
        }
        <label>
          Search
          <input value={this.state.searchVal} onChange={this.handleChange} />
        </label>
        {
          this.state.loading ?
          <div style={{ margin: '10px 0' }}> Loading Please wait</div>
          :
          <div>
            <table>
              <thead>
                <tr>
                  {['isbn', 'title', 'author', 'publisher', 'action'].map(heading => <th key={heading}>{heading.toUpperCase()}</th>)}
                </tr>
              </thead>
              <tbody>
                { this.state.searchVal === '' ? this.props.books.map((item,idx) => {
                    return <tr key={`book_${idx}`}>{['isbn', 'title', 'author', 'publisher', 'action'].map((field,index) => field !== 'action' ? <td key={`${index}_field `}>{ item[field] }</td>: <td key={`${index}_field `} onClick={() => this.toggleEditBook(true, idx)} className="edit-button" align="center"></td> )}</tr>
                  }) : this.state.filterList.map((item,idx) => {
                    return <tr key={`book_${idx}`}>{['isbn', 'title', 'author', 'publisher', 'action'].map((field,index) =>  field !== 'action' ? <td key={`${index}_field `}>{ item[field] }</td>: <td key={`${index}_field `} onClick={() => this.toggleEditBook(true, idx)} className="edit-button" align="center"></td>)}</tr>
                  })
                }
              </tbody>
            </table>
            <input type="button" value="Add Book" className="buttons" onClick={() => this.toggleEditBook(true, '_null')}/>
          </div>
        }
      </div>
    )
  }
}

