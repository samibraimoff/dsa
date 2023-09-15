function displayLikes(likes) {
  if (!likes.length) return "no one likes this";

  for (let i = 0; i < likes.length; i++) {
    if (likes.length === 1) return `${likes[i]} likes this`;

    if (likes.length === 2) return `${likes[0]} and ${likes[1]} like this`;

    if (likes.length === 3)
      return `${likes[0]}, ${likes[1]} and ${likes[2]} like this`;

    if (likes.length > 3)
      return `${likes[0]}, ${likes[1]} and ${
        likes.length - 2
      } others like this`;
  }
}

module.exports = displayLikes;
