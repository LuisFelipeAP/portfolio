import React from "react";
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";

export default function Home() {
	return (
		<div className="h-screen">
			<Head>
				<title>Create Next App</title>

				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
		</div>
	)
}
