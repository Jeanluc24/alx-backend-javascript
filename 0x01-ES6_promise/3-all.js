import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const j1 = uploadPhoto();
  const j2 = createUser();

  return Promise.all([j1, j2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
