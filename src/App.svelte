<script lang="ts">
  let newItem = "";
  let todoList = [];

  function addToList() {
    if (newItem === "") return;
    todoList = [...todoList, { text: newItem, status: false }];
    newItem = "";
  }

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") addToList();
  };

  function removeFromList(index: number) {
    todoList.splice(index, 1);
    todoList = todoList;
  }
</script>

<main>
  <h1>UltiTodo</h1>
  <input
    bind:value={newItem}
    on:keypress={onKeyPress}
    type="text"
    placeholder="Add a new task"
  />
  <button on:click={addToList}>Add</button>

  <ul>
    {#each todoList as item, index}
      <li>
        <input bind:checked={item.status} type="checkbox" />
        <span class:checked={item.status}>{item.text}</span>
        <span on:click={() => removeFromList(index)}>❌</span>
      </li>
    {/each}
  </ul>
</main>

<style>
  .checked {
    text-decoration: line-through;
  }

  main {
    margin: 5%;
  }

  li {
    margin: 3%;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
