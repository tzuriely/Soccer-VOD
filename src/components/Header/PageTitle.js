import React from 'react';
import { connect } from 'react-redux';

class PageTitle extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="pageTitle">
                <div className="pageTitle-text">{this.props.currentPageTitle}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentPageTitle: state.currentPageTitle,
 });

export default connect(mapStateToProps)(PageTitle);