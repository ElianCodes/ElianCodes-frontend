---
title: "Astro Docs Gets an MCP Server (And It's Pretty Cool)"
description: "Astro now has an official MCP server for its documentation."
pubDate: 10/18/2025 15:00
author: Elian Van Cutsem
tags: 
  - web development
  - astro
  - MCP
  - AI
imgUrl: "./images/astro-mcp.png"
---

# Astro Docs Gets an MCP Server (And It's Pretty Cool)

Got some exciting news to share today – Astro now has an official MCP server for its documentation. If you're scratching your head wondering "what the heck is MCP?", don't worry, I've got you covered. Let's dive in.

## So... What's MCP Anyway?

**Model Context Protocol** (MCP for short) is basically a standardized way to connect AI assistants to external data and tools. Think of it like USB-C for AI – instead of building custom integrations for every single AI tool and data source (which would be a nightmare), MCP provides one universal protocol that everything can speak.

Anthropic (the folks behind Claude) introduced it back in November 2024, and it's been gaining serious traction. The problem it solves is pretty straightforward: AI models are only as good as the context they have access to. They're trained on data from specific points in time, but your documentation changes constantly. MCP bridges that gap by giving AI assistants real-time access to current information.

Here's the basic architecture:

- **Host application** – Your AI tool (Claude, Cursor, VS Code with Copilot, etc.)
- **MCP client** – Lives inside the host, manages connections to servers
- **MCP server** – Exposes tools, resources, and data through a standard API
- **Transport layer** – The communication mechanism (HTTP, SSE, etc.)

The beauty of this setup is that once you build an MCP server for your docs, any AI assistant that supports MCP can tap into it. No more outdated answers based on training data from months ago.

## Why This Matters for Astro

If you've ever asked an AI assistant about Astro features, you might've gotten answers that were... let's say, *creative* (read: wrong, it hallucinated probably). Maybe it referenced an API that changed six months ago, or suggested a pattern that's no longer recommended. 

Super frustrating, right?

The Astro Docs MCP server fixes this. It uses the **kapa.ai API** to maintain an up-to-date index of the entire Astro documentation. When your AI assistant needs to answer a question about Astro, it can query the latest docs in real-time instead of relying on potentially stale training data. Honestly, it doesn't matter what it uses under the hood, as long as it works. And works great.

This means better code suggestions, more accurate troubleshooting, and fewer "wait, that doesn't work anymore" moments.

## The Cool Part: It's Remote

Here's what makes Docs MCP servers particularly slick – it's a **remote server**. You don't need to install anything locally, configure dependencies, or worry about keeping it updated. It just works. Because it's managed and maintained remote by the Astro team.

The server runs on **streamable HTTP transport** (the newer, cleaner replacement for the old SSE approach). This transport method is elegant because it uses a single endpoint for all communication, can dynamically upgrade to streaming when needed, and supports bidirectional communication.

The official server lives at [`https://mcp.docs.astro.build/mcp`](https://mcp.docs.astro.build/mcp). That's it. Point your AI tool at that URL, and you're golden.

## How to Install It

Let me walk you through setting this up for different tools. It's honestly way easier than you'd think.

### For Claude Desktop / Claude.ai

1. Visit [Claude.ai connector settings](https://claude.ai/connector/settings)
2. Scroll down and click "Add custom connector"
3. Enter these details:
   - **Name**: `Astro Docs`
   - **Remote MCP server URL**: `https://mcp.docs.astro.build/mcp`
4. Click "Add"

That's literally it. Claude will now have access to the latest Astro docs whenever you're working on Astro projects.

### For VS Code

Open this link in your browser:

```
vscode:mcp/install?%7B%22name%22%3A%22Astro%20docs%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.docs.astro.build%2Fmcp%22%7D
```

VS Code will handle the rest.

Or if you prefer doing it manually, create a `.vscode/mcp.json` file in your workspace root:

```json
{
  "servers": {
    "Astro Docs": {
      "type": "http",
      "url": "https://mcp.docs.astro.build/mcp"
    }
  }
}
```

Make sure to enable MCP in VS Code settings under **Chat > MCP**.

### For other tools

If you're using another AI tool that supports MCP, look for an option to add a custom MCP server and use the same URL: `https://mcp.docs.astro.build/mcp`. The exact steps will vary by tool, but it should be pretty straightforward. You can always refer to the documentation of the specific tool you're using on how to add custom MCP servers.

## What Can You Do With It?

Once you've got the Astro Docs MCP server connected, your AI assistant gains a pretty powerful capability: **it can search the entire Astro documentation in real-time** and without hallucination.

The server exposes a `search_astro_docs` tool that your AI can call whenever it needs information about Astro. So if you ask something like:

- "How do I set up image optimization in Astro?"
- "What's the difference between `getStaticPaths` and `getServerSideProps` in Astro?"
- "Show me how to configure View Transitions in Astro."

Your AI assistant will query the actual, current documentation and give you accurate, up-to-date answers. No more guessing based on outdated training data.

## Why This Matters for the Ecosystem

This isn't just a nice-to-have feature. The Astro Docs MCP server is part of a bigger shift in how we interact with documentation and AI tools.

**For developers**, it means less time context-switching between your IDE and browser tabs, fewer outdated Stack Overflow answers, and more confidence that your AI assistant actually knows what it's talking about.

**For the Astro ecosystem**, it means better developer experience, easier onboarding for new users, and potentially fewer support questions because people can get accurate answers faster.

**For AI tooling in general**, it's a proof of concept that documentation providers can make their content dynamically accessible to AI assistants without each tool building custom integrations.

## What's Next?

This is honestly just the beginning. MCP is still relatively new (it was only announced in late 2024), but it's already being adopted by major players like OpenAI, Google DeepMind, and tools like Zed, Replit, Codeium, and Sourcegraph.

As more documentation sites and tools adopt MCP, we'll see AI assistants become genuinely context-aware across your entire development workflow. Imagine having current docs for React, Next.js, Tailwind, TypeScript, and Astro all accessible to your AI assistant through standardized MCP servers. That's the future we're building toward.

The fact that Astro is early to this party shows they're thinking ahead about developer experience. Props to the team for getting this out there.

## Wrapping Up

So yeah, Astro now has an MCP server for its docs, and you should definitely set it up if you're using AI coding assistants. It takes like 30 seconds, costs nothing, and makes your AI assistant way smarter about Astro.

This is part of a broader trend where AI tools are moving from being isolated knowledge bases to becoming connected agents that can access real-time, accurate information. MCP is the protocol making that possible, and it's pretty exciting to see Astro embracing it early on.

I'll probably write a deeper dive into MCP itself in a future post (because there's a lot more to unpack about the protocol architecture and what it means for the future of developer tools), but for now, go install the Astro Docs MCP server and let me know how it works for you.

Happy building! 🚀

---

*Want to learn more about MCP? Check out the [official Model Context Protocol docs](https://modelcontextprotocol.io) or the [Astro AI guide](https://docs.astro.build/en/guides/build-with-ai/). Got questions? Hit me up on Twitter or BlueSky or whatever else.*
