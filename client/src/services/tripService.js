import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/trips'  


export const tripServiceFactory = (token) => {
const request = requestFactory(token);

const getAll =  async () => {
   const result = await request.get(baseUrl);
   const trips = Object.values(result) ; // key is id 
   

   return trips;
}

 const getMyListings = async (ownerId) => {
   let query = encodeURIComponent(`_ownerId="${ownerId}"`);
   const result = await request.get(`${baseUrl}?where=${query}`);
   return result;
};

 const getOne = async (tripId) => {
   const result = await request.get(`${baseUrl}/${tripId}`);
   
   return result
}

 const create = async (tripData) => {
 const result = await request.post(baseUrl, tripData);

 return result;
}

const edit = (tripId, data) => request.put(`${baseUrl}/${tripId}`, data);

const deleteTrip = (tripId) => request.delete(`${baseUrl}/${tripId}`)

return {
   getAll,
   getMyListings,
   getOne,
   create,
   edit,
   delete: deleteTrip,
   
};
}