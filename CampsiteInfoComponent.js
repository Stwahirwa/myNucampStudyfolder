import { div } from 'prelude-ls';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    renderCampsite(){
        const campsite = this.props.campsite;
        return(
            <div className="col-md-5 m-1">
                <Card>
                  <CardImg top src={campsite.image} alt={campsite.name} />
                  <CardBody>
                      <CardTitle>{campsite.name}</CardTitle>
                      <CardText>{campsite.description}</CardText>
                  </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(){
        const comments = this.props.campsite.comments;
        if(comments){
            return(
                <div className = "col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                    <div key={comment.id}>
                            <div>{comment.text}</div>
                            <div>{comment.author}-{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                    </div>)}
                </div>
            );
        }
        return <div />
    }

    
render(){
    if(this.props.campsite){
        return(
        <div className = "row">
           {this.renderCampsite()}
           {this.renderComments()}
        </div>);
    }
    return <div />;
}
};

export default CampsiteInfo;