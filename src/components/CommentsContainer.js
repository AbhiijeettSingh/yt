import React from "react";

const commentsData = [
  {
    name: "Abhijeet Singh",
    text: "video is awesome",
    replies: [],
  },
  {
    name: "Rahul Saini",
    text: "video is bad",
    replies: [
      {
        name: "Vimlesh Patel",
        text: "I didn't like it ",
        replies: [],
      },
      {
        name: "Dhruba ",
        text: "best yt video ever seen",
        replies: [
          {
            name: "Akash gupta",
            text: "you are amazing creator dude",
            replies: [
              {
                name: "Aman",
                text: "keep up never seen video like this",
                replies: [
                  {
                    name: "Vipin",
                    text: "hands down best video ",
                    replies: [
                      {
                        name: "Deepak",
                        text: "Piece of shit",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Rohit Saini",
                    text: "nice watch",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Deepak",
    text: "katai zehar",
    replies: [],
  },
  {
    name: "Atul",
    text: "hame bhi dekhna hai ",
    replies: [],
  },
  {
    name: "Neha",
    text: "awsome",
    replies: [],
  },
  {
    name: "Nupur Sharma",
    text: "ekdum jhakas",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
