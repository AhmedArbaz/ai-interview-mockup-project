// app/(auth)/sign-up/[[...sign-up]]/page.jsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="container flex justify-around mt-6">
      <img
        alt=""
        src="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?s=1024x1024&w=is&k=20&c=Ob0ACggwWuFDFRgIc-SM5bLWjNbIyoREeulmLN8dhLs="
        className=" h-[550px] w-[60%] ml-2 rounded-xl"
      />
    <div className="mt-7" >
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
      />
    </div>

    </div>
  );
}
