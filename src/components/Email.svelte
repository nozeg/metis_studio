<script>
  import { onMount } from 'svelte';
  import caesar from '$lib/caesar';

  const hashedEmail = 'ijpm)h`odn)nop_dj;bh\\dg)^jh';
  let email = hashedEmail;
  onMount(() => {
    email = caesar(email, 5);
  });
</script>

<a href={`mailto:${email}`}>{email}</a>
