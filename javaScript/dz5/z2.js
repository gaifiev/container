// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// author: "John", // вывести этот текст
console.log(post.author);

// dislikes: 2, // вывести это число
console.log(post.comments[0].rating.dislikes);

// userId: 5, // вывести это число
console.log(post.comments[1].userId);

// text: "lorem ipsum 2", // вывести этот текст
console.log(post.comments[1].text);
