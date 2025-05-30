export const myApplicationPromise = (email) => {
  return fetch(
    `https://career-code-server-rouge.vercel.app/applications?email=${email}`
  ).then((res) => res.json());
};
