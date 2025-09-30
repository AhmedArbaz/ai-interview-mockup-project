# Shad cn installation
Vo to install kar lia ab ak button banana tha to direct 
```
npx shadcn@latest add button
```
ya command chala di button.jsx in components/ui/button.jsx khud ban gai

- Button ka color change karna hay to global.css may jao to .root may ja kay primary ka color change karo
- Then .dark may background kar color change karo ho jay ga

# Adding Authentication Clerk

- first Signup on Clerk 

- Create new application

- Select the Diff services which help to login user
 
- Now Select your sdk/Framwork you use currenty we are using Next.js

- Then install clerk: npm 'install @clerk/nextjs' By this command

- To ab <clerkPorvider> ko wrap karo apny main layout.js pay

- Ab https://clerk.com/docs/references/nextjs/clerk-middleware#protect-routes (ais link say middleware.js kay routes protection hoti hay)

- Ab middleware may routeMatch karo jo protect karny hain 
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

- Phir check karin gay kay login hain ya nahi 
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

- Ab ham ager /dashboard pay jain gay to hamin clerk redirect kary ga login page pay lakin vo login page hamara apna nahi route ho ga page reload ho ga so aus say bachnay kay liay ham apny signin uar sign-up page khud banin

# Clerk Elements
Ais say ham apna signup signin page fully change kar sakty hain jasay chao

## Now for Ui elements We use hyperui.dev
Ais say ham nay form ko copy kia hay

## UserButton
dashboard may userButton insert kia jo kay clerk say ata hay jo userprofile show karta hay puri

## Header Section
- Ak folder banaya _components (Q kay underscore valy components)ko nextjs rout nahi manta hay

- Ya folder dashboard may banaya hay aus may header component bana kay phir dashboard kay layout may dal dia ta kay dashboard kay her route pay ya nazar ay header

- Logo Selection ham nay logoipsum website say kia 

- Tori editing ki aur usepath hook use kia ta kay jo link pay ham ho vo active ho jay phir condition laga kay use ho gaya

- Phir main ul pay hidden kar dia md: pay ham nay aus ko bold kar dia hay

## Backend Setup

- Ham postgress use karin gay database kay liay 

- Lakin Query na likhni paray to ham Drizzle CRM use karin gay ta kay record add aur retrive karin bina kisi query kay

Postgress Neon >Select > then run below commands

npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit

### Now we start Creating DataBase

- 1st create utils folder > then file db.js in root dir

- Paste template 4 lines of code 

 import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

const result = await db.execute('select 1');


- Now Go to neon.tech to get Database url
- We create neon account then > Create Database Copy its connection url and paste it on env.local and its name used in db.js

- Now go to the Drizzle Kit > Setup Configuration.js

- Create a file drizzle.config.js paste a code in it

import { defineConfig } from "drizzle-kit";

export default defineConfig({

  dialect: "postgresql",

  schema: "./utils/schema.js", //jaha file hay aus ka same path day dia

  out: "./drizzle",

  dbCredentials:{

    url:'postgresql://neondb_owner:npg_MTmEIL12NfdV@ep-proud-surf-ad0jgupw-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  }
  
});

- Ya url may ham nay apny neon database ka link dia hay jo kay ham nay env.local may save kia tha vaha pay jo save kia hay vo direct name ham nay db.js may use kia hay but yaha hamin vo as link dana hota hay

- Ab same utils folder may schema.js ki file create ki schema banaya aur phir ais ko db.js may import kar kay use kia end line of code may

export const db = drizzle(sql,{schema});

- Phir package.json may may 2 commands di thi

    "db:push": "npx drizzle-kit push",
    "db:studio":"npx drizzle-kit studio"

    phir npm run db:push karnay say table create ho jay gi 

    Aur npm run db:studio karny say db studio ka line a jay ga

