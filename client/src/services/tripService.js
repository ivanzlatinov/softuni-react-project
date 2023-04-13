import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/trips'  //jsonstore


export const tripServiceFactory = (token) => {
const request = requestFactory(token);

const getAll =  async () => {
   const result = await request.get(baseUrl);
   const trips = Object.values(result) ; // key is id 
   

   return trips;
}

 const getOne = async (tripId) => {
   const result = await request.get(`${baseUrl}/${tripId}`);
   console.log(result);
   return result
}

 const create = async (tripData) => {
 const result = await request.post(baseUrl, tripData);

 return result;
}

return {
   getAll,
   getOne,
   create
};
}