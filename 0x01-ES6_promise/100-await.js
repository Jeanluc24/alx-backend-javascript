import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const rom1 = await uploadPhoto();
    const rom2 = await createUser();

    return ({ photo: rom1, user: rom2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
