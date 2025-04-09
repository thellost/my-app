import firebase_app from "@/firebase/config";

import {cookies} from 'next/headers'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    const cookieStore = await cookies()
    const UID = result?.user.uid.toString()
        if (UID == null){
            return {result, error};
        }
    cookieStore.set("UID", UID)
    console.log(cookieStore.get("UID"))

    return { result, error };
}