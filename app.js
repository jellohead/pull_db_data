var CommentList = React.createClass ({

  pullData: function() {
    $.get('/db', function (data) {
      //console.log(data.rows);
      console.log('Printing the data from comments database');
    }).bind(this);
    console.log('Seeing if get data is bound to this')
    console.log(this.data);
  },

  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {

      return(
        <div>
        <h2>commentNodes</h2>
          <Comment name={comment.name} key={index}>
            {comment.text}
          </Comment>
        </div>
      );

    });

      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );

  }
});

React.render(
  <CommentList url="/db" pollInterval={2000} />,
  document.getElementById('content')
);