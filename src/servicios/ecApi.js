import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from '../firebase/database';

export const ecApi = createApi({
    reducePath: 'ecApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
    }),

    endpoints: (builder) => ({
        getCategorias: builder.query({
            query: () => 'categorias.json',
        }),
        getProductos: builder.query({
            query: () => 'productos.json',
        })
    })
});

export const { useGetCategoriasQuery, useGetProductosQuery } = ecApi;

