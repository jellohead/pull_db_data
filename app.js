var CommentList = React.createClass ({

  pullData: function() {
    $.get('/db', function (data) {
      console.log(data.rows);
    });
  },

  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {

      return(
        <div>
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