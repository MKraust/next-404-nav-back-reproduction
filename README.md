This is a reproduction for Next.js bug.

Steps:
1. Run production build `npm run build && npm run start`
2. Navigate to non-existent page to catch a 404 error
3. Go to dynamic page
4. Click browser "back" button

You will see that URL have been changed, but 404 page haven't been rendered.
