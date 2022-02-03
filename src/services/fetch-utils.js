import { checkError, client } from './client';

export async function fetchTheories() {
  const response = await client
    .from('conspiracy-theories')
    .select();

  // return response.data;
  return checkError(response);
}

export async function fetchCandies() {
  const response = await client
    .from('candy')
    .select();

  // return response.data;
  return checkError(response);
}

export async function fetchColors() {
  const response = await client
    .from('colors')
    .select();

  // return response.data;
  return checkError(response);
}

export async function fetchPlanets() {
  const response = await client
    .from('planets')
    .select();

  // return response.data;
  return checkError(response);
}