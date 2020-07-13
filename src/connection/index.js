import fetch from 'node-fetch';
import { getLocalAsJsonURL } from '../utils';
import { UserInputError } from 'apollo-server';

export const fetchLocal = async cep => {
  const res = await fetch(getLocalAsJsonURL(cep));
  if(res.status === 400) throw new UserInputError('CEP inválido');

  const resJson = await res.json();

  if(resJson.erro) throw new Error('CEP não existe');
  else return resJson;
};