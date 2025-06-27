---
slug: /api/Rayocom-configuration
title: "Rayocom Configuration API"
sidebar_position: 2
---

# Rayocom Configuration API

The Rayocom Configuration API provides comprehensive management capabilities for all aspects of your Rayocom platform configuration, including organization settings, user management, resource configuration, and AI component setup.

## Quick Links

- [API Documentation Overview](/docs/api/Rayocom-configuration/Rayocom-configuration-api)

## Core Features

### Organization Management
- [Update Organization](/docs/api/Rayocom-configuration/update-my-organization-api-v-1-my-organization-put)

### User Management
Manage users and their access to your organization:
- [List Users](/docs/api/Rayocom-configuration/list-users-api-v-1-users-get)
- [Create User](/docs/api/Rayocom-configuration/create-user-api-v-1-users-post)
- [Get User Details](/docs/api/Rayocom-configuration/read-user-api-v-1-users-user-id-get)
- [Update User](/docs/api/Rayocom-configuration/update-user-api-v-1-users-user-id-put)
- [Delete User](/docs/api/Rayocom-configuration/delete-user-api-v-1-users-user-id-delete)
- [Invite User](/docs/api/Rayocom-configuration/invite-user-api-v-1-users-invite-post)

### Session Management
- [Get Current User](/docs/api/Rayocom-configuration/get-current-user-api-v-1-users-me-get)
- [List My Sessions](/docs/api/Rayocom-configuration/list-my-sessions-api-v-1-users-me-sessions-get)
- [Get Session Details](/docs/api/Rayocom-configuration/get-my-session-details-api-v-1-users-me-sessions-session-id-get)
- [Revoke Session](/docs/api/Rayocom-configuration/revoke-my-session-api-v-1-users-me-sessions-session-id-to-revoke-delete)

### Trunk Configuration
Configure SIP trunks for telephony connections:
- [List Trunks](/docs/api/Rayocom-configuration/list-trunks-api-v-1-trunks-get)
- [Create Trunk](/docs/api/Rayocom-configuration/create-trunk-api-v-1-trunks-post)
- [Get Trunk Details](/docs/api/Rayocom-configuration/get-trunk-api-v-1-trunks-trunk-id-get)
- [Update Trunk](/docs/api/Rayocom-configuration/update-trunk-api-v-1-trunks-trunk-id-put)
- [Delete Trunk](/docs/api/Rayocom-configuration/delete-trunk-api-v-1-trunks-trunk-id-delete)

### Resource Management
Configure system resources and settings:
- [List Resources](/docs/api/Rayocom-configuration/list-resources-api-v-1-resources-get)
- [Create Resource](/docs/api/Rayocom-configuration/create-resource-api-v-1-resources-post)
- [Get Resource Details](/docs/api/Rayocom-configuration/get-resource-api-v-1-resources-resource-id-get)
- [Update Resource](/docs/api/Rayocom-configuration/update-resource-api-v-1-resources-resource-id-put)
- [Delete Resource](/docs/api/Rayocom-configuration/delete-resource-api-v-1-resources-resource-id-delete)

### AI Component Configuration

#### Transcriber Services
Configure speech-to-text components:
- [List Transcriber Configs](/docs/api/Rayocom-configuration/list-transcriber-api-v-1-transcriber-configurations-get)
- [Create Transcriber Config](/docs/api/Rayocom-configuration/create-transcriber-api-v-1-transcriber-configurations-post)
- [Get Transcriber Config](/docs/api/Rayocom-configuration/get-transcriber-api-v-1-transcriber-configurations-config-id-get)
- [Update Transcriber Config](/docs/api/Rayocom-configuration/update-transcriber-api-v-1-transcriber-configurations-config-id-put)
- [Delete Transcriber Config](/docs/api/Rayocom-configuration/delete-transcriber-api-v-1-transcriber-configurations-config-id-delete)

#### Synthesizer Services
Configure text-to-speech components:
- [List Synthesizer Configs](/docs/api/Rayocom-configuration/list-synthesizer-api-v-1-synthesizer-configurations-get)
- [Create Synthesizer Config](/docs/api/Rayocom-configuration/create-synthesizer-api-v-1-synthesizer-configurations-post)
- [Get Synthesizer Config](/docs/api/Rayocom-configuration/get-synthesizer-api-v-1-synthesizer-configurations-config-id-get)
- [Update Synthesizer Config](/docs/api/Rayocom-configuration/update-synthesizer-api-v-1-synthesizer-configurations-config-id-put)
- [Delete Synthesizer Config](/docs/api/Rayocom-configuration/delete-synthesizer-api-v-1-synthesizer-configurations-config-id-delete)

#### Agentic AI Components
Configure AI agents and their behavior:
- [List Agentic Configs](/docs/api/Rayocom-configuration/list-agentic-api-v-1-agentic-configurations-get)
- [Create Agentic Config](/docs/api/Rayocom-configuration/create-agentic-api-v-1-agentic-configurations-post)
- [Get Agentic Config](/docs/api/Rayocom-configuration/get-agentic-api-v-1-agentic-configurations-config-id-get)
- [Update Agentic Config](/docs/api/Rayocom-configuration/update-agentic-api-v-1-agentic-configurations-config-id-put)
- [Delete Agentic Config](/docs/api/Rayocom-configuration/delete-agentic-api-v-1-agentic-configurations-config-id-delete)

#### Conversation Management
Configure conversation flows and settings:
- [List Conversation Configs](/docs/api/Rayocom-configuration/list-conversation-api-v-1-conversation-configurations-get)
- [Create Conversation Config](/docs/api/Rayocom-configuration/create-conversation-api-v-1-conversation-configurations-post)
- [Get Conversation Config](/docs/api/Rayocom-configuration/get-conversation-api-v-1-conversation-configurations-config-id-get)
- [Update Conversation Config](/docs/api/Rayocom-configuration/update-conversation-api-v-1-conversation-configurations-config-id-put)
- [Delete Conversation Config](/docs/api/Rayocom-configuration/delete-conversation-api-v-1-conversation-configurations-config-id-delete)

### Provider Management
Configure external service providers:
- [List Providers](/docs/api/Rayocom-configuration/list-providers-api-v-1-providers-get)
- [Create Provider](/docs/api/Rayocom-configuration/create-provider-api-v-1-providers-post)
- [Get Provider Details](/docs/api/Rayocom-configuration/get-provider-api-v-1-providers-provider-id-get)
- [Update Provider](/docs/api/Rayocom-configuration/update-provider-api-v-1-providers-provider-id-put)
- [Delete Provider](/docs/api/Rayocom-configuration/delete-provider-api-v-1-providers-provider-id-delete)
- [List Provider Brands](/docs/api/Rayocom-configuration/list-providers-api-v-1-provider-brands-get)
- [Get Provider Details by Brand](/docs/api/Rayocom-configuration/get-provider-api-v-1-provider-brands-brand-key-services-service-type-path-engines-engine-identifier-get)
- [Get Provider Form Schema](/docs/api/Rayocom-configuration/get-provider-form-schema-api-v-1-provider-brands-brand-key-services-service-type-path-engines-engine-identifier-form-schema-get)

### Scenario Management
Configure conversation scenarios and flows:
- [List Scenarios](/docs/api/Rayocom-configuration/list-scenarios-api-v-1-scenarios-get)
- [Create Scenario](/docs/api/Rayocom-configuration/create-scenario-api-v-1-scenarios-post)
- [Get Scenario Details](/docs/api/Rayocom-configuration/get-scenario-api-v-1-scenarios-scenario-id-get)
- [Update Scenario](/docs/api/Rayocom-configuration/update-scenario-api-v-1-scenarios-scenario-id-put)
- [Delete Scenario](/docs/api/Rayocom-configuration/delete-scenario-api-v-1-scenarios-scenario-id-delete)

## Getting Started

1. **Authentication**: Use your API key or JWT token for authentication
2. **Base URL**: `https://dev.Rayocom.ai`
3. **Format**: All requests and responses use JSON format

## Support

For questions about the Configuration API, please refer to our [main documentation](/docs/intro) or contact our support team. 