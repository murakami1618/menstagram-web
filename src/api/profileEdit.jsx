import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const patchProfileEdit = request => {
  return axios({
    method: 'PATCH',
    url: `${baseUrl}/v1/user/edit`,
    headers: {
      Authorization: `Bearer ${request.accessToken}`
    },
    data: {
      user_name: request.profile.userName,
      biography: request.profile.biography
    }
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
