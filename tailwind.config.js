/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /bg-(green|blue|violet|gray)-(400|700)/,
    },{
      pattern: /from-(green|blue|violet|gray)-(400|700)/,
    },{
      pattern: /to-(green|blue|violet|gray)-(400|700)/,
    },
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
