# Wheel of Fortune - Promotional Site

This project is a React application built with Vite, designed as a promotional "Wheel of Fortune" landing page.

## Features
- Interactive Spin Wheel with predefined logic.
- Result Modal with call-to-action.
- Fully responsive design (Mobile/Desktop).
- Standard legal pages (Privacy, Terms, About, Contact).
- React Router for navigation.

## Project Structure
- `/pages`: Contains route components (Home, Privacy, etc.).
- `/components`: Reusable UI components (Wheel, Modal, Footer, etc.).
- `constants.ts`: Configuration for prizes, colors, and the **Offer URL**.

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal).

## How to Deploy

### 1. Push to GitHub
1. Create a new repository on GitHub.
2. Run the following commands in your project folder:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**.
5. Click **Deploy**.

## Updating the Offer Link
To change the destination of the "Claim Reward" button:
1. Open `constants.ts`.
2. Update the `OFFER_URL` variable.
3. Commit and push your changes. Vercel will automatically redeploy.
