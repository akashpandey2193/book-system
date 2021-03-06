
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListView from './Components/ListView'


const data = {
  "books":[
    {"isbn":"9781449331818",
     "title":"Learning JavaScript Design Patterns",
     "subtitle":"A JavaScript and jQuery Developers Guide",
     "author":"Addy Osmani",
     "published":"2012-07-01T00:00:00.000Z",
     "publisher":"OReilly Media",
     "pages":254,
     "description":"With Learning JavaScript Design Patterns, youll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },{"isbn":"9781449365035","title":"Speaking JavaScript","subtitle":"An In-Depth Guide for Coders","author":"Axel Rauschmayer","published":"2014-02-01T00:00:00.000Z","publisher":"OReilly Media","pages":460,"description":"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position."},{"isbn":"9781491950296","title":"Programming JavaScript Applications","subtitle":"Robust Web Architecture with Node, HTML5, and Modern JS Libraries","author":"Eric Elliott","published":"2014-07-01T00:00:00.000Z","publisher":"OReilly Media","pages":254,"description":"Take advantage of JavaScripts power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code thats easier-yes, easier-to work with as your code base grows.","website":"http://chimera.labs.oreilly.com/books/1234000000262/index.html"},{"isbn":"9781593277574","title":"Understanding ECMAScript 6","subtitle":"The Definitive Guide for JavaScript Developers","author":"Nicholas C. Zakas","published":"2016-09-03T00:00:00.000Z","publisher":"No Starch Press","pages":352,"description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.","website":"https://leanpub.com/understandinges6/read"},{"isbn":"9781491904244","title":"You Dont Know JS","subtitle":"ES6 & Beyond","author":"Kyle Simpson","published":"2015-12-27T00:00:00.000Z","publisher":"OReilly Media","pages":278,"description":"No matter how much experience you have with JavaScript, odds are you dont fully understand the language. As part of the 'You Don???t Know JS' series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.","website":"https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"},{"isbn":"9781449325862","title":"Git Pocket Guide","subtitle":"A Working Introduction","author":"Richard E. Silverman","published":"2013-08-02T00:00:00.000Z","publisher":"OReilly Media","pages":234,"description":"This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.","website":"http://chimera.labs.oreilly.com/books/1230000000561/index.html"},{"isbn":"9781449337711","title":"Designing Evolvable Web APIs with ASP.NET","subtitle":"Harnessing the Power of the Web","author":"Glenn Block, et al.","published":"2014-04-07T00:00:00.000Z","publisher":"OReilly Media","pages":538,"description":"Design and build Web APIs for a broad range of clients???including browsers and mobile devices???that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft???s ASP.NET Web API framework. In the process, you???ll learn how design and implement a real-world Web API.","website":"http://chimera.labs.oreilly.com/books/1234000001708/index.html"},{"isbn":"9781593275841","title":"Introduction to C++","subtitle":"An Introduction to Programming","author":"K. R. Srinappa","published":"2016","publisher":"PAWAR PUBLICATIONS LTD.","pages":"","description":"The book comprises of various aspects of the day-to-day example to provide good scenarios for proper understanding of the languages. Each chapter is followed by a list of programming exercises to test of the understanding of the concepts."}],"count":8}


  function App() {
    const editSaveBooks = (book) => {
      const tempBook = { ...book }
      delete tempBook.index
      if(book.index !== null) {
        data.books[book.index] = { ...tempBook }
        window.alert('Sunccessfully updated')
      }
      else {
        window.alert('Sunccessfully inserted')
        data.books.push({...tempBook})
      }
    }
    return (
      <main>
        <Switch>
          <Route path='/'
            render={(props) => (
            <ListView books={data.books} editSaveBooks={editSaveBooks} />
          )}  />
        </Switch>
      </main>
    );
}

export default App;
