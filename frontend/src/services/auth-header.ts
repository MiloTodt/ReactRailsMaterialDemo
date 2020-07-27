export default function authHeader() {
  const currentUser = localStorage.getItem("user");
  if (currentUser) {
    const userJson = JSON.parse(currentUser);
    if (userJson.accessToken) {
      return { Authorization: "Bearer " + userJson.accessToken };
    } else {
      return {};
    }
  }
}
