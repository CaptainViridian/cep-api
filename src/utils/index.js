import { CORREIOS_API_URL } from './constants';

export const getLocalAsJsonURL = cep => `${CORREIOS_API_URL}/ws/${cep}/json`;