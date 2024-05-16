<script lang="ts">
  import Shiki from "./Shiki.svelte";
  let dialog: HTMLDialogElement;

  function open_dialog() {
    console.log("dialog", dialog);
    document.startViewTransition(() => {
      dialog.showModal();
    });
  }

  function close_dialog(e) {
    e.preventDefault();
    document.startViewTransition(() => {
      dialog.close();
    });
  }

  const CODE = `<script> 
//...
let dialog;

function open_dialog() {
	document.startViewTransition(() => {
		dialog.showModal();
	});
}

function close_dialog(e) {
	e.preventDefault();
	document.startViewTransition(() => {
		dialog.close();
	});
}
<\/script>

<button onclick={open_dialog}>Open Dialog</button>
<dialog bind:this={dialog}>
	<p>
		Oh hey, I didn't see you there. I'm looking for some new 😎 code, can you help?
	</p>
	<form onsubmit={close_dialog} method="dialog">
		<button>OK 👍</button>
	</form>
</dialog>`;
</script>

<div class="readable readable-center">
  <h2>Dialog w/ Animations</h2>
  <h3>Basic Fade In</h3>
  <p>By default simply running `startViewTransition`</p>
  <button onclick={open_dialog}>Open Dialog</button>
  <dialog bind:this={dialog} open>
    <p>
      Oh hey, I didn't see you there. I'm looking for some new 😎 code, can you
      help?
    </p>
    <form onsubmit={close_dialog} method="dialog">
      <button>OK 👍</button>
    </form>
  </dialog>
</div>

<div class="readable-code readable-center">
  <Shiki code={CODE} />
</div>

<style>
  dialog {
    view-transition-name: dialog;
  }
</style>
