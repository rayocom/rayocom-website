# Rayocom Ai Website

The official documentation and marketing website for Rayocom Ai - an AI-driven genetic telecom SaaS cloud-native platform.

Built with [Docusaurus](https://docusaurus.io/) and featuring automatic OpenAPI documentation generation from our microservices.

## 🚀 Features

- **Static Site Generation**: Built with Docusaurus for fast, SEO-friendly pages
- **OpenAPI Integration**: Automatic API documentation generation from live services
- **Multi-API Support**: Integrates documentation from Auth, Configuration, and App Data APIs
- **Environment-Aware**: Supports development, staging, and production API endpoints
- **Modern UI**: Clean, responsive design with dark/light mode support

## 📋 Prerequisites

- **Node.js**: >= 20.0
- **pnpm**: Package manager (recommended over npm/yarn)

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/RayocomAI/Rayocom-website.git
cd Rayocom-website

# Install dependencies
pnpm install

# Copy and configure API endpoints (optional)
cp api-config.example.js api-config.js
# Edit api-config.js with your API endpoints
```

## 🏃‍♂️ Quick Start

### Development Server
```bash
pnpm start
```
Starts the development server at `http://localhost:3000` with live reload.

### Build for Production
```bash
pnpm build
```
Generates static files in the `build/` directory.

### Serve Built Site
```bash
pnpm serve
```
Serves the production build locally for testing.

## 📚 API Documentation Commands

### Individual Steps

#### Clean Generated API Docs
```bash
pnpm clean-api-docs
```
Removes all previously generated API documentation directories to ensure fresh generation.

**What it does:**
- Deletes `docs/api/Rayocom-auth/`, `docs/api/Rayocom-configuration/`, and `docs/api/Rayocom-app-data/` directories
- Ensures no stale or conflicting documentation files remain
- Prepares for clean regeneration of API docs

#### Update OpenAPI Specifications
```bash
pnpm update-specs
```
Downloads the latest OpenAPI specifications from your running APIs and saves them to `static/openapi/`.

**What it does:**
- Fetches OpenAPI specs from Auth, Configuration, and App Data APIs
- Enhances specs with logos and descriptions
- Creates placeholder specs if APIs are unavailable (development mode)
- Uses environment-specific API URLs from `api-config.js`

#### Generate API Documentation
```bash
pnpm gen-api-docs
```
Processes the downloaded OpenAPI specs and generates Docusaurus markdown files in `docs/api/`.

### Combined Workflows

#### Complete API Documentation Generation
```bash
pnpm generate-api-docs
```
**Combines:** `clean-api-docs` + `update-specs` + `gen-api-docs`

This is the recommended command for updating API documentation during development. It ensures fresh documentation by cleaning old files first.

#### Full Documentation Build
```bash
pnpm docs:build
```
**Combines:** `generate-api-docs` + `build`

Complete pipeline for production deployment - cleans old docs, downloads specs, generates docs, and builds the site.

## 🌍 Environment Configuration

The website supports multiple environments through `api-config.js`:

```javascript
module.exports = {
  // Production API URLs
  production: {
    Rayocom_AUTH_API_URL: 'https://auth.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data.Rayocom.ai'
  },
  
  // Development API URLs
  development: {
    Rayocom_AUTH_API_URL: 'https://dev.Rayocom.ai/docs/auth',
    Rayocom_CONFIG_API_URL: 'https://dev.Rayocom.ai/docs/config',
    Rayocom_APP_DATA_API_URL: 'https://dev.Rayocom.ai/docs/app-data'
  },
  
  // Staging API URLs  
  staging: {
    Rayocom_AUTH_API_URL: 'https://auth-staging.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config-staging.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data-staging.Rayocom.ai'
  }
};
```

Set `NODE_ENV` to switch between environments:
```bash
NODE_ENV=production pnpm update-specs
NODE_ENV=staging pnpm generate-api-docs
```

## 🔧 All Available Commands

| Command | Description |
|---------|-------------|
| `pnpm start` | Start development server with live reload |
| `pnpm build` | Build static site for production |
| `pnpm serve` | Serve production build locally |
| `pnpm deploy` | Deploy to GitHub Pages |
| `pnpm clear` | Clear Docusaurus cache |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm clean-api-docs` | Remove all generated API documentation directories |
| `pnpm update-specs` | Download latest OpenAPI specs from APIs |
| `pnpm gen-api-docs` | Generate API docs from downloaded specs |
| `pnpm generate-api-docs` | Complete API docs generation (clean + update + generate) |
| `pnpm docs:build` | Full pipeline (generate API docs + build site) |

## 📁 Project Structure

```
Rayocom-website/
├── docs/                   # Documentation pages
│   ├── api/               # Generated API documentation
│   │   ├── Rayocom-auth/
│   │   ├── Rayocom-configuration/
│   │   └── Rayocom-app-data/
│   └── ...                # Manual documentation
├── static/
│   ├── openapi/           # Downloaded OpenAPI specs
│   │   ├── Rayocom-auth.json
│   │   ├── Rayocom-configuration.json
│   │   └── Rayocom-app-data.json
│   └── img/               # Images and assets
├── src/                   # React components and pages
├── scripts/
│   └── update-openapi-specs.js  # OpenAPI download script
├── api-config.js          # API endpoint configuration
├── docusaurus.config.ts   # Docusaurus configuration
└── sidebars.ts            # Documentation sidebar
```

## 🔄 Typical Workflows

### Development Workflow
```bash
# Start development server
pnpm start

# In another terminal, update API docs when needed
pnpm generate-api-docs
```

### Production Deployment
```bash
# Generate everything and build
pnpm docs:build

# Deploy (if using GitHub Pages)
pnpm deploy
```

### API Documentation Update Only
```bash
# When you just want to update API docs
pnpm generate-api-docs
pnpm build
```

## 🐛 Troubleshooting

### API Not Available
If an API is not available during development, the script automatically creates placeholder specifications. This allows development to continue without all services running.

### Build Warnings
- **Broken anchors**: Check for missing anchor links in your markdown
- **Missing OpenAPI specs**: Ensure APIs are accessible or use placeholder mode

### Cache Issues
If you encounter build issues:
```bash
pnpm clear
pnpm generate-api-docs
pnpm build
```

## 🤝 Contributing

1. Update API documentation: Run `pnpm generate-api-docs` after API changes
2. Test locally: Use `pnpm start` for development
3. Build verification: Run `pnpm docs:build` before submitting PRs

## 📄 License

Copyright © 2025 RayocomAI. All rights reserved.

## 🔗 Links

- [Rayocom.ai Website](https://Rayocom.ai)
- [Docusaurus Documentation](https://docusaurus.io/)
- [OpenAPI Plugin Documentation](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)
