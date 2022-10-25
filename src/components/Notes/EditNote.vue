<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNotesStore } from '../../store/storeNotes';

const storeNotes = useNotesStore()
const route = useRoute()
const router = useRouter()
const noteEdit = storeNotes.getEditNote(route.params.id)

const editTitle = ref(noteEdit.title)
const editMessage = ref(noteEdit.message)

async function saveNote  ()  {
    let date = new Date().toLocaleString()
    if((editTitle.value || editMessage.value) != ''){

      storeNotes.updateNote(route.params.id - 1, editTitle.value, editMessage.value, date)
    }

    router.push('/notes')
}

async function reloadPage() {
  await saveNote();
  setTimeout(() => {
    location.reload()
  }, 1000);
}


const cancelEdit = () => {
    router.push('/notes')
}
</script>

<template>
    <div class="container mt-6 pt-6">
    <div class="card addNote mx-auto">
      <h4
        class="title is-4 pt-5 mb-0"
        style="text-align: center; color: black; text-decoration: underline"
      >
        Edit Note
      </h4>
      <div class="card-content">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="editTitle" class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea v-model="editMessage" class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field is-grouped is-grouped-right pt-2">
          <div class="control">
            <button @click="cancelEdit" class="button is-link is-light">Cancel</button>
          </div>
          <div class="control">
            <button @click="reloadPage" class="button is-link">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  padding-top: 8%;
}

.addNote {
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 20%;
  }

  .addNote {
    width: 75%;
  }
}
</style>