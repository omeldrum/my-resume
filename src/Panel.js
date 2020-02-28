import React, {Component} from "react";

class Panel extends Component {
    icon = "fa-question-circle";
    title = "Panel";
    constructor(props){
        super(props);
        this.populate = this.populate.bind(this);
    }

    itemMethod(item, key) {
        return {item, key};
    }

    populate(){
        let content = [];

        for (let i = 0; i < this.props.items.length; i++){
            if( i > 0 ){
                content.push( <hr/> )
            }
            content.push( this.itemMethod( this.props.items[i], i ) )
        }

        return (
            content
        )
    }

    render(){
        return (
            <div className="card">
                <h3 className="card-header">
                    <i className={"fa " + this.icon}/> {this.title}
                </h3>
                {this.populate()}
            </div>
        )
    }
}

export default Panel;