import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const quizApi = createApi({
  reducerPath: "quiz",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    addQuiz: builder.mutation({
      query: (body) => ({
        url: "/quizzes",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddQuizMutation } = quizApi;
