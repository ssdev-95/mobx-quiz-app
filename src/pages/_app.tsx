import React from "react"
import Head from 'next/head'
import reportWebVitals from "@/reportWebVitals"

import "@/styles/globals.css"

export default function MyApp({ Component, PageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>xQuests&trade;</title>
      </Head>
      <Component {...PageProps} />
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
