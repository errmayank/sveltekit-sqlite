<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const userIDParam = $page.params.user_id;
  const userID = Number(userIDParam);

  let posts: {
    id: number;
    authorId: number;
    title: string;
    content: string;
    published: boolean;
  }[] = [];

  onMount(async () => {
    const postsResponse = await fetch(`/api/users/${userID}/posts`);
    const postsData = await postsResponse.json();

    posts = postsData.posts;
  });
</script>

<ul>
  {#each posts as post}
    <li>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Is published {post.published}</p>
      </div>
    </li>
  {/each}
</ul>
