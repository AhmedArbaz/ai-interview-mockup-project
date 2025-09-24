// app/(auth)/sign-in/[[...sign-in]]/page.jsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (

    <div className="container flex justify-around mt-6">

      <img
        alt=""
        src="https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.webp?s=1024x1024&w=is&k=20&c=Ob0ACggwWuFDFRgIc-SM5bLWjNbIyoREeulmLN8dhLs="
        className=" h-[550px] w-[60%] ml-2 rounded-xl"
      />
      <div className="mt-7">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
        />
      </div>

    </div>

  );
}
