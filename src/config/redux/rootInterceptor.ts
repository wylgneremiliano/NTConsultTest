import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { api } from "@services/api";

const { requestsMiddleware, requestsReducer } = handleRequests({
  driver: createDriver(api),
  onRequest: (request: any, action: any, store: any) => {
    // const { auth } = store.getState();
    // const { token } = auth;
    let requests = request;

    // if (!token) {
    //   request.url = `${process.env.REACT_APP_URL_SERVER_V1}${request.url}`;
    //   return request;
    // }

    return requests.map((req: any) => ({
      ...req,
      url: `${req.url}`,
    }));
  },
});

export { requestsMiddleware, requestsReducer };
