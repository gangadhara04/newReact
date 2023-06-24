import { endpoints } from "../api/endPoint";
import { apiClient } from "../apiClient";

class userService{
    static async create(data){

      const response=await apiClient.post(`${endpoints().userAPI}`)
      console.log(data,">>>>>>>>>>>>>>>>>>>>>>>");
    }
}
export default userService



// static async create(data, history, params) {
//     return async (dispatch) => {
//       dispatch(requestCreateAccountEntry());

//       try {
//         const response = await apiClient
//           .post(`${endpoints().accountEntryAPI}`, data);
//         let successMessage;
//         if (response && response.data) {
//           successMessage = response.data.message;
//           Toast.success(successMessage);
         
//         } dispatch(
//           fetchList(
//             "accountEntry",
//             `${endpoints().accountEntryAPI}/list`,
//             1,
//             25,
//             params
//           )
//         );
//         dispatch(receiveCreateAccountEntry());
//       } catch (error) {
//         dispatch(accountEntryCreateError(error));

//         if (isBadRequest(error)) {
//           let errorMessage;
//           const errorRequest = error.response.request;
//           if (errorRequest && errorRequest.response) {
//             errorMessage = JSON.parse(errorRequest.response).message;
//           }
//           Toast.error(errorMessage);
//           console.error(errorMessage);
//         }
//       }
//     };
//   }