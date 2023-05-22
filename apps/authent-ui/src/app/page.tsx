import Image from 'next/image'
import styles from './page.module.css'
import {Login} from "auth/src";
export default function Home() {
    return (
        <main className={styles.main}>
            <Login forgotPasswordRouter={"/"} signUpRouter={"/"} onGoogleAuth={() => null}
                   onNormalLogin={() => null} onLoginFacebook={() => null}/>
        </main>
    )
}
