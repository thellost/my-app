import firebase_app from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

const auth = getAuth(firebase_app);



export async function POST(request: NextRequest){
  let result = null,
      error = null,
      UID = null;

      console.log(request)
      const formData = await request.formData()
      const password = formData.get('password')?.toString()
      const email = formData.get('email')?.toString()
  
  if (password == null || email == null){
    return Response.json({"error":"error"})
  }
  try {
      result = await createUserWithEmailAndPassword(auth, email, password);
      let UID = result?.user.uid.toString();
  } catch (e) {
      error = e;
  }
  if (UID == null){
    throw error;
  }
  const response = NextResponse.json({message: "Welcome!"})

  response.cookies.set("UID", UID)
  return  response;
}