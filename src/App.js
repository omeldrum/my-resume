import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Resume from './Resume'
import Basics from './Basics'
import Work from './Work'
import Education from './Education'
import Skills from './Skills'
import Volunteer from './Volunteer'
import Awards from './Awards'

class App extends Component {
    render() {
        return (
            <div>
                <Helmet title={Resume.basics.name}/>
                <Basics items={Resume.basics}/>
                <div className="container">
                    <div className="col-12">
                        <Education items={Resume.education}/>
                    </div>
                    <br/>
                    <div className="col-12">
                        <Skills items={Resume.skills}/>
                    </div>
                    <br/>
                    <div className="col-12">
                        <Work items={Resume.work}/>
                    </div>
                    <br/>
                    <div className="col-12">
                        <Volunteer items={Resume.volunteer}/>
                    </div>
                    <br/>
                    <div className="col-12">
                        <Awards items={Resume.awards}/>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default App;
