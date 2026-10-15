<script lang="ts">
  import svelteLogo from '#lib/assets/svelte.svg';
  import tailwindLogo from '#lib/assets/tailwindcss.svg';
  import typescriptLogo from '#lib/assets/typescript.svg';
  import viteLogo from '#lib/assets/vite.svg';
  import { useCount } from '#lib/hooks/use-count.svelte';
  import { formatCount } from '#lib/utils/format-count.js';

  let { title = 'svelte-pages-template' }: { title?: string } = $props();
  const counter = useCount();

  const logos = [
    { src: svelteLogo, alt: 'Svelte' },
    { src: viteLogo, alt: 'Vite' },
    { src: tailwindLogo, alt: 'Tailwind CSS' },
    { src: typescriptLogo, alt: 'TypeScript' }
  ];
</script>

<main
  class="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950 px-6 text-center text-zinc-100"
>
  <h1 class="text-4xl font-bold tracking-tight">{title}</h1>
  <ul class="flex items-center gap-5" aria-label="Framework logos">
    {#each logos as logo (logo.alt)}
      <li>
        <img src={logo.src} alt={logo.alt} title={logo.alt} class="size-10" />
      </li>
    {/each}
  </ul>
  <p class="max-w-md text-zinc-400">
    SvelteKit + Tailwind CSS template, built as a static site and deployed to GitHub Pages.
  </p>
  <button
    type="button"
    onclick={counter.increment}
    class="rounded-full bg-emerald-500 px-6 py-2.5 font-semibold text-zinc-950 transition hover:bg-emerald-400"
  >
    {formatCount(counter.count)}
  </button>
</main>
