<script lang="ts">
  import { page } from '$app/state';

  function goBack(): void {
    window.history.back();
  }
</script>

<svelte:head>
  <title>{page.status} — svelte-pages-template</title>
</svelte:head>

<main
  class="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950 px-6 text-center text-zinc-100"
>
  <h1 class="text-6xl font-bold tracking-tight">{page.status}</h1>
  <p class="max-w-md text-zinc-400">
    {page.error?.message ?? 'Something went wrong.'}
  </p>
  <button
    type="button"
    onclick={goBack}
    class="rounded-full bg-emerald-500 px-6 py-2.5 font-semibold text-zinc-950 transition hover:bg-emerald-400"
  >
    Go back
  </button>
</main>
