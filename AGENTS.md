<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
# Project Configuration

## Development Under Progress Modal
To disable the modal and restore original button functionality across the site after setting up the backend, follow these steps:

1. Open @[src/components/DevModalContext.tsx]
2. Find the `isDevMode` state declaration (line 16)
3. Change the initial value to `false`:
   ```tsx
   const [isDevMode, setDevMode] = useState(false); // Set to false to disable interceptions
   ```

This single change will instantly reactive all buttons across your entire application!

<!-- END:nextjs-agent-rules -->

