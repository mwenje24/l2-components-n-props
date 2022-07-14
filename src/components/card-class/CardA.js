import React from "react";


class CardA extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const name =  this.props.name
        const role = this.props.role
        const image = this.props.image

        return (
            <div className="card">
                <img src={image} />
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{role}</p>
                </div>
            </div>
        )
    }
}


export default CardA