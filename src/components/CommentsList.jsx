import Comment from "./Comment";

const CommentsList = ({ comment }) => {
  return (
    <>
      {comment.map((c, index) => (
        <div key={index}>
          <Comment data={c} />
          <div className="pl-5 border border-l-black">
            <CommentsList comment={c.replies} key={index} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
