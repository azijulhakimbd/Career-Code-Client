export const jobsCreatedByPromise = (email) => {
  return fetch(
    `https://career-code-server-rouge.vercel.app/jobs?email=${email}`
  );
};
