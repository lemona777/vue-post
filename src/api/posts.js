import { posts } from '@/api/index';

export function getPosts(params) {
  return posts.get(import.meta.env.VITE_APP_API_URL + 'posts/', { params });
}

export function getPostById(id) {
  return posts.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
  return posts.post('http://localhost:5000/posts', data);
}

export function updatePost(id, data) {
  return posts.patch(`http://localhost:5000/posts/${id}`, data);
}
export function deletePost(id) {
  return posts.delete(`http://localhost:5000/posts/${id}`);
}
