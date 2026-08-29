

Namma Vari 360
AI-Powered Property Tax Transparency & Citizen Assistance Platform

Namma Vari 360 is a citizen-centric platform designed to make property-tax information easier to understand, verify, and act upon.

The system uses AI, data analytics, document intelligence, and interactive 3D visualization to help citizens understand changes in their property-tax assessments, identify possible discrepancies, and receive guidance for raising grievances.

🔴 Problem Statement

Chennai citizens often struggle to understand their property-tax assessments and sudden changes in tax amounts.

Existing systems provide tax services but may not clearly explain:

Why a property-tax assessment changed
Why the tax amount increased or decreased
Whether property details are accurate
How previous and current assessments differ
Whether the submitted tax document contains discrepancies
What action should be taken when an issue is identified

Namma Vari 360 aims to provide tax analysis, transparency, document understanding, discrepancy detection, and grievance guidance in one place.

💡 Proposed Solution

CivicTax AI provides a unified platform where citizens can:

View their property and tax information through an interactive dashboard.
Compare previous and current tax assessments.
Understand why their tax amount changed using AI.
Upload property-tax documents and extract important information automatically.
Detect inconsistencies between documents and registered property data.
Receive AI-assisted guidance for property-tax grievances.
Generate a structured grievance based on the detected issue.
🚀 Core Features
🏠 1. 3D Property Digital Twin

An interactive 3D representation of the citizen's property.

Users can explore:

Property details
Built-up area
Assessment information
Tax information
Detected discrepancies
Document information

Technology:

Three.js
React Three Fiber
Drei
📊 2. Property Tax Analytics

Compare previous and current assessments.

Example:

Parameter	Previous	Current
Built-up Area	1,200 sq.ft	1,450 sq.ft
Tax Amount	₹8,500	₹10,800
Assessment Year	2025	2026

The dashboard highlights significant changes and provides visual analytics.

🤖 3. AI Tax Change Explanation

Instead of simply showing:

Tax increased by ₹2,300

CivicTax AI explains the possible reason:

The tax increased primarily because the assessed built-up area changed from 1,200 sq.ft to 1,450 sq.ft.

The AI explanation is generated from the available assessment data and should avoid inventing unsupported information.

📄 4. Document Intelligence

Citizens can upload a property-tax receipt/document.

The system extracts information such as:

Assessment Number
Property Owner
Address
Property Area
Property Type
Assessment Year
Tax Amount

The extracted information can then be compared with the property's stored assessment.

⚠️ 5. Discrepancy Detection

The system compares document data with registered property information.

Example:

Registered Area: 1,200 sq.ft
Document Area:   1,450 sq.ft

⚠ Possible Discrepancy Detected

Potential discrepancies include:

Property area mismatch
Tax amount mismatch
Assessment-year mismatch
Property-type mismatch
Assessment-number mismatch
🧑‍💼 6. AI Grievance Assistant

Citizens can describe their problem in natural language.

Example:

"My property area is showing incorrectly."

The system can:

Identify the issue category
Explain the likely next step
Suggest required documents
Generate a structured grievance description
🧱 Technology Stack
Frontend — Vikram
Next.js
React
TypeScript
Tailwind CSS
Three.js
React Three Fiber
Drei
Framer Motion
GSAP
Recharts
Lucide React
Backend — Thevesh
Next.js API / Node.js
Supabase
PostgreSQL
Supabase Storage
OpenAI API
REST APIs

Backend implementation may evolve during development as required by the hackathon.

🏗️ High-Level Architecture
                    ┌──────────────────────┐
                    │      CITIZEN         │
                    └──────────┬───────────┘
                               │
                               ▼
              ┌─────────────────────────────┐
              │       NEXT.JS FRONTEND      │
              │                             │
              │  Dashboard                  │
              │  3D Property                │
              │  Tax Analytics              │
              │  Document Upload            │
              │  AI Explanation             │
              │  Grievance Assistant        │
              └──────────────┬──────────────┘
                             │
                         REST API
                             │
                             ▼
              ┌─────────────────────────────┐
              │          BACKEND            │
              │                             │
              │  API Routes                 │
              │  Business Logic             │
              │  AI Processing              │
              │  Document Processing        │
              │  Discrepancy Detection     │
              └──────────────┬──────────────┘
                             │
               ┌─────────────┴─────────────┐
               ▼                           ▼
      ┌────────────────┐          ┌────────────────┐
      │    SUPABASE    │          │   OPENAI API   │
      │                │          │                │
      │ PostgreSQL     │          │ AI Analysis    │
      │ Storage        │          │ Extraction     │
      │ Property Data  │          │ Explanation    │
      └────────────────┘          └────────────────┘
📁 Project Structure
civictax-ai/
│
├── app/
│   ├── page.tsx
│   ├── dashboard/
│   ├── property/
│   ├── analysis/
│   ├── documents/
│   └── grievance/
│
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── property-3d/
│   ├── charts/
│   └── grievance/
│
├── lib/
│   ├── api/
│   ├── utils/
│   └── constants/
│
├── public/
│   ├── models/
│   └── assets/
│
├── types/
│
├── README.md
├── package.json
└── .env.example

The exact structure can be modified during implementation.

🔌 Frontend ↔ Backend Contract

The frontend should communicate with the backend through clear API endpoints.

Suggested endpoints:

GET    /api/property/:id
GET    /api/property/:id/tax-history

POST   /api/tax/explain
POST   /api/documents/upload
POST   /api/documents/analyze

POST   /api/discrepancy/check

POST   /api/grievance/analyze
POST   /api/grievance/generate

Example tax explanation request:

{
  "propertyId": "PT-1001",
  "previousAssessment": {
    "area": 1200,
    "tax": 8500,
    "year": 2025
  },
  "currentAssessment": {
    "area": 1450,
    "tax": 10800,
    "year": 2026
  }
}

Example response:

{
  "change": 2300,
  "percentageChange": 27.06,
  "reason": "The assessed built-up area increased from 1,200 sq.ft to 1,450 sq.ft.",
  "factors": [
    "Built-up area increased",
    "Current assessment year changed"
  ]
}
🗄️ Initial Data Model

Suggested property structure:

Property
├── property_id
├── assessment_number
├── owner_name
├── address
├── zone
├── property_type
├── current_area
├── previous_area
├── current_tax
├── previous_tax
├── current_assessment_year
└── previous_assessment_year

Document structure:

Document
├── document_id
├── property_id
├── document_type
├── file_url
├── extracted_data
├── uploaded_at
└── verification_status

Grievance structure:

Grievance
├── grievance_id
├── property_id
├── issue_type
├── description
├── recommended_action
├── required_documents
└── generated_complaint
🎨 UI Direction

The interface should feel like a modern CivicTech + AI analytics platform.

Visual Style
Dark modern interface
Glassmorphism cards
Subtle gradients
3D property visualization
Smooth transitions
Data-focused dashboard
Minimal clutter
Clear warning/success states
Design Principle

The application should not feel like a traditional government portal.

It should feel like:

Government Data
       +
AI Assistant
       +
Analytics Dashboard
       +
3D Digital Twin
       =
Modern CivicTech Platform
⏱️ Hackathon MVP Scope

The primary objective is a functional and polished demo rather than a complete production system.

Must Have
3D property dashboard
Current vs previous tax comparison
AI tax-change explanation
Document upload
Document data extraction
Basic discrepancy detection
Grievance assistant
Responsive UI
Nice to Have
Property search
Multiple properties
Authentication
Interactive Chennai map
Advanced analytics
Export grievance as PDF
Government service links
Not Required for MVP
Real municipal database integration
Real tax payment
Complex authentication
Full GIS infrastructure
Custom ML model training
Production-scale infrastructure
👥 Team Responsibilities
Vikram — Frontend

Responsible for:

UI/UX
Next.js application
Dashboard
3D property visualization
Tax analytics UI
Document upload interface
Grievance interface
Animations
Frontend-backend API integration
Thevesh — Backend

Responsible for:

Backend APIs
Database
Supabase integration
Document processing
AI API integration
Tax analysis logic
Discrepancy detection
Grievance processing
Backend validation
🔄 Development Workflow
Vikram
  │
  ├── Build frontend
  ├── Create UI components
  ├── Define API requirements
  │
  ▼
GitHub
  │
  ▼
Thevesh
  │
  ├── Pull repository
  ├── Build backend
  ├── Implement APIs
  └── Connect database + AI
  │
  ▼
Integration
  │
  ▼
Final Hackathon Demo

Both developers should work on separate branches where practical.

Suggested branches:

main
│
├── frontend-vikram
│
└── backend-thevesh
🚀 Local Development

Clone the repository:

git clone <REPOSITORY_URL>
cd civictax-ai

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000
🔐 Environment Variables

Create a .env.local file locally.

Example:

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

OPENAI_API_KEY=

Never commit real API keys or secrets to GitHub.

Use .env.example for shared configuration names.

🎬 Recommended Hackathon Demo

The ideal demonstration should take approximately 2–3 minutes:

1. Open CivicTax AI
        ↓
2. Show 3D property
        ↓
3. Show tax increased from previous year
        ↓
4. Click "Why did my tax change?"
        ↓
5. AI explains the change
        ↓
6. Upload tax receipt
        ↓
7. AI extracts document information
        ↓
8. System detects discrepancy
        ↓
9. Open Grievance Assistant
        ↓
10. Generate grievance
Core Pitch

CivicTax AI transforms property-tax data from something citizens have to decode into something they can understand, verify, and act upon.

📌 Project Status

Hackathon MVP — In Development

Frontend: 🚧 Vikram
Backend: 🚧 Thevesh
AI Integration: 🚧 In Progress
3D Digital Twin: 🚧 In Progress
Database: 🚧 In Progress

Push this README.md first. Your friend Thevesh can then pull the repository and use the Backend and Frontend ↔ Backend Contract sections as the integration specification.

Correct. The project name should be Namma Vari 360. I’ll use that name consistently going forward.

For the GitHub README, replace every occurrence of CivicTax AI with Namma Vari 360, including the title, architecture labels, project positioning, and demo flow.

do it

Yes. I’ll update the README to Namma Vari 360 throughout and keep the same technical structure.

send me updated readme file

Done. The updated README is now fully renamed to Namma Vari 360 and ready to push to GitHub.

Download README.md

README.md
Document