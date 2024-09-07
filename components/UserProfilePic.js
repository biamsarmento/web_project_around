export default class UserProfilePic {
  constructor(profilePicLink) {
    this._profilePicLink = document.querySelector(profilePicLink);
  }

  getUserProfilePic() {

    return this._profilePicLink.src;
  }

  setUserProfilePic(profilePicNewLink) {
    console.log(this._profilePicLink.src);
    this._profilePicLink.src = profilePicNewLink;
  }
}