export const useAuthenticated = () => {
  const session = localStorage.getItem("@user_email");
  return !!session;
};
