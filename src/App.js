// import './App.css';


// link of tutorial: https://stories.mlh.io/create-an-instant-search-experience-in-less-than-15-minutes-75655b8621a4
import React, {Component} from 'react'
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  // 'latency',
  // '3d9875e51fbd20c7754e65422f7ce5e1'
);

const Hit = ({hit}) =>    
  <div className="hit">
    <div className="hitImage">
      <img src={hit.image} alt='img'/>
    </div>
      <div className = "hitName">
        <Highlight attribute = "name" hit = {hit}/>
      </div>
  </div>

const Content = () =>
  <div className = "content">
    <Hits hitComponent = {Hit}/>
  </div>
function App() {
  return (
    <div className="App">
      <InstantSearch  searchClient={searchClient} indexName="bestbuy">
        <header>
          <SearchBox autoFocus translations={{placeholder: 'Search here...'}} />
        </header>
        <main>
        <Content/>
      </main>
      </InstantSearch>
    </div>
  );
}

export default App;
