# INFRAGEN — Agentic AI Planning Platform

INFRAGEN is a full-stack agentic AI platform that helps companies plan and improve their operations using AI-powered insights, document knowledge retrieval, and real-time recommendations.

🔗 **Live Demo:** https://infragen-48opxl8b5-mounikas-projects-8cc60354.vercel.app

## My Role: Backend Developer

I was responsible for the backend architecture and integration layer of this team project, including:

- **AI Integration:** Built the LangChain + Google Gemini integration powering the AI chat and suggestion features
- **Database Design:** Designed MongoDB schemas (`Knowledge.ts`, `KnowledgeChunk.ts`, `User.ts`) using Mongoose for structured data validation
- **Authentication:** Implemented JWT-based authentication with bcrypt password hashing
- **Deployment:** Independently forked, configured, and deployed the full application (MongoDB Atlas, Google AI Studio, Pusher Beams, Vercel environment setup)

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **AI/ML:** LangChain, Google Gemini (`gemini-2.0-flash`), `@xenova/transformers` for embeddings
- **Database:** MongoDB Atlas with Mongoose ODM
- **Auth:** JWT, bcryptjs
- **Real-time:** Pusher Beams (push notifications)
- **UI:** Tailwind CSS, Radix UI, shadcn/ui components
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel

## Features

- AI-powered chat assistant for organizational insights
- Knowledge base management (CSV/TXT file upload and retrieval)
- Domain analysis and AI-generated suggestions
- Secure user authentication and profile management

## Known Limitations

- The AI chat feature requires a Gemini API key with billing enabled on Google Cloud (Google's free tier requires billing verification to activate quota). Authentication, MongoDB integration, and knowledge/file management are fully functional and live at the demo link above.

## Getting Started (Local Development)

```bash
git clone https://github.com/Mounikam0/infragen-ai.git
cd infragen-ai
npm install
npm run dev
```

Create a `.env` file based on `sample-env` with your own:
- `MONGODB_URI`
- `JWT_SECRET`
- `GOOGLE_API_KEY`
- `BEAMS_INSTANCE_ID`
- `BEAMS_SECRET_KEY`

---

*This project was built as part of a team submission (originally forked from [kavana238/infragen-ai](https://github.com/kavana238/infragen-ai)), with my contributions focused on backend architecture and AI integration.*
