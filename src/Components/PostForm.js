import React, { Component } from 'react';

 class PostForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            title:'',
            body:''
        };
        this.ValueChange=this.ValueChange.bind(this);
        this.SaveChanges=this.SaveChanges.bind(this);
    }
    ValueChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    SaveChanges(e)
    {
      e.preventDefault();
      const post={
          title:this.state.title,
          body:this.state.body
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post) 
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
    }
render()
{
    
    return(
        <div>
            <h1>Add post</h1>
            <form onSubmit={this.SaveChanges}>
                <div>
                    <label>title:</label>
                    <br/>
                    <input type='text' name='title' value={this.state.title} onChange={this.ValueChange}/>
                </div>    
                <div>
                    <label>body</label>
                    <br/>
                    <textarea name="body" value={this.state.body} onChange={this.ValueChange}/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}

};
export default PostForm;