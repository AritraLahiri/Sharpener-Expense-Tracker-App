//========== User's Code Starts Here ==========
const posts = [{ title: "POST1" }, { title: "POST2" }];
const users = [{ name: "Aritra Lahiri", LastSeenAt: new Date().getTime() }];

//Do not touch this function below
function printPost() {
  posts.forEach((post) => {
    console.log(post.title);
  });
}
function printUser() {
  users.forEach((user) => {
    console.log(`LastSeenAt - ${new Date(user.LastSeenAt)}"`);
  });
}

//Do not touch this function below
function create3rdPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve();
    }, 3000);
  });
}
//Do not touch this function below
function create4thPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST4" });
      resolve();
    }, 2000);
  });
}
// Update Last Seen Time
const LastActivityTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users[0].LastSeenAt = new Date().getTime();
      resolve();
    }, 2000);
  });
};

//Complete this function such that it returns a Promise
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method
function deletePost() {
  //complete this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

const getColdDrinks = new Promise((resolve, reject) => {
  resolve("Cold Drinks brought");
});

//make the following sequence work properly

//LastActivityTime().then(printUser)
Promise.all([create3rdPost, create4thPost, LastActivityTime])
  .then(printPost)
  .then(printUser)
  .catch((e) => console.log(e));

//create3rdPost().then(create4thPost).then(printPost);

//========== User's Code Ends Here ==========
