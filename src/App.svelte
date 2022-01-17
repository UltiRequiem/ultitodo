<script lang="ts">
  import Footer from "./components/Footer.svelte";

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
  <div class="add_task">
    <input
      bind:value={newItem}
      class="bordered"
      on:keypress={onKeyPress}
      type="text"
      placeholder="Add a new task"
    />
    <button class="bordered" on:click={addToList}>Add</button>
  </div>
  <div class="items_container">
    {#each todoList as item, index}
      <div
        class="item_container"
        style="border-color:{item.status ? 'blue' : 'lightseagreen'}"
      >
        <div class="item">
          <span>{item.text}</span>
        </div>

        <div class="options">
          <div>
            <input type="checkbox" bind:checked={item.status} />
            <span>Done</span>
          </div>
          <span id="delete" on:click={() => removeFromList(index)}
            >Remove ❌</span
          >
        </div>
      </div>
    {/each}
  </div>

  <div class="footer">
    <Footer />
  </div>
</main>

<style>
  h1 {
    border-bottom: 10px solid #f9dd94;
  }

  .item_container {
    margin: 5px;
    border: 1px solid lightseagreen;
    border-radius: 5px;
    padding: 5px;
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bordered {
    border-radius: 10px;
    border-style: none;
    border: 1px solid #ccc;
    padding: 10px;
  }

  main {
    margin: 5%;
  }

  .add_task {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    margin: 5%;
    display: inline-block;
    width: 90%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 3%;
    overflow: auto;
    word-wrap: break-word;
    height: 200px;
    margin: 3%;
  }

  #delete {
    cursor: pointer;
  }

  .items_container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0;
    border: 10px solid #f1f1f1;
    margin-bottom: 30%;
  }

  .footer {
    margin-top: 5%;
  }

  @media only screen and (max-width: 600px) {
    .items_container {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 120%;
    }
    .footer {
      margin-top: 10%;
    }
  }
</style>
