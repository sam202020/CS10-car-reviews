import React, { Component } from 'react';
import placeholder from '../../logo.svg';
import './mainpage.css';
import {DropdownToggle, DropdownMenu, DropdownItem, Button, UncontrolledDropdown} from 'reactstrap';

// This is our Search Results page. Users will be brought here after clicking the 'search' button
// from the Search Bar. There are 'filter by' dropdowns and a 'sort-by' dropdown, followed by the
// search results. As with the main content, I chose to represent the result cards as Buttons. 
// This is rendered in MainPage.

class SearchResults extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }
    
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

    render() { 
        return (
            <div>
                <div className="filter-row">
                    <div className="filters"> 
                        <h5>Filter by:</h5>
                        <UncontrolledDropdown className="dropdowns">
                            <DropdownToggle caret>
                                Reviewer
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>TODO:</DropdownItem>
                                <DropdownItem disabled>map reviewers onto this list</DropdownItem>
                                <DropdownItem>IheartPrius</DropdownItem>
                                <DropdownItem>FordStrong</DropdownItem>
                                <DropdownItem>ToyotaJim</DropdownItem>
                                <DropdownItem>MommaJeep</DropdownItem>
                                <DropdownItem>2004sucked</DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="dropdowns">
                            <DropdownToggle caret>
                                Owned
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Rented</DropdownItem>
                                <DropdownItem>Driven</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="sort-by">
                        <h5>Sort by:</h5>
                        <UncontrolledDropdown className="dropdowns">
                            <DropdownToggle caret>
                                Reviewer
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Rating Up</DropdownItem>
                                <DropdownItem>Rating Down</DropdownItem>
                                <DropdownItem>Year Up</DropdownItem>
                                <DropdownItem>Year Down</DropdownItem>
                                <DropdownItem>Date of Review</DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className="review-results">
                    <Button className="main-card"> 
                        <img src={placeholder} style={{ height: '60px', width: '60px' }} />
                        <p>Aggrigated Star Rating</p> 
                        <p>Year, Make, Model</p>
                        <p>Trim</p>
                    </Button>
                </div>
            </div>
        );
    }
}
 
export default SearchResults;