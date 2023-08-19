import React from 'react'
import { useSession } from "next-auth/react"
import SideMenu from "../SideMenu"
import Head from 'next/head'
import scss from './Layout.module.scss'
import Footer from '../Footer'

const Layout = (props: any) => {
    const {data: session} = useSession()

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={scss.layout} style={{ padding: session ? '0 24px 0 80px' : 0 }}>
                {session && <SideMenu />}
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout