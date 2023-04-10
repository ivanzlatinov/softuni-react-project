import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/trips'

export const getAll =  async () => {
   const result = await request.get(baseUrl);
   const trips = Object.values(result) ; // key is id 
   

   return trips;
}

export const getOne = async (tripId) => {
   const result = await request.get(`${baseUrl}/${tripId}`);
   console.log(result);
   return result
}

export const create = async (tripData) => {
 const result = await request.post(baseUrl, tripData);

 

 return result;
}