<script lang="ts">
  import { onMount } from "svelte";

  let users: { id: number; email: string; name: string }[] = [];

  onMount(async () => {
    const usersResponse = await fetch("/api/users");
    const usersData = await usersResponse.json();

    users = usersData.users;
  });
</script>

<h1>SvelteKit w/ sqlite</h1>

<ul>
  {#each users as user}
    <li>
      <a href={`/users/${user.id}`}>
        {user.name}
      </a>
    </li>
  {/each}
</ul>
