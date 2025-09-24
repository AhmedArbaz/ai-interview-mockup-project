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

