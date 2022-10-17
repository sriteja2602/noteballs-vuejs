<script setup>
import { ref, watch } from "vue";
import { useNow, useDateFormat } from '@vueuse/core'
import {useNotesStore} from '../../store/storeNotes'

const storeNotes = useNotesStore()


const title = ref("");
const message = ref("");

watch(message, (newValue) => {
  if(newValue.length > 100){
    alert("Max 100 cahracters allowed")
  }
})

const addNote = () => {
  const formatted = useDateFormat(useNow(), 'DD-MM-YYYY (ddd)', { locales: 'en-IN' })

  storeNotes.addNote(title.value, message.value, formatted)
    title.value = ''
    message.value = ''
}

const vFocus = {
  mounted: (el) => el.focus()
}
</script>


<template>
    <div class="container mt-6 pt-6">
    <div class="card addNote mx-auto">
      <h4
        class="title is-4 pt-6 mb-0"
        style="text-align: center; color: black; text-decoration: underline"
      >
        Add Note
      </h4>
      <div class="card-content pt-6">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-focus v-model="title" class="input" type="text" placeholder="Note Title" />
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea v-model="message" class="textarea" placeholder="Note Comment"></textarea>
          </div>
        </div>

        <div class="field is-grouped is-grouped-right pt-2">
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
          <div class="control">
            <button :disabled="(title && message) == ''" @click="addNote" class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.addNote {
  width: 50%;
}

label{
  font-size: larger;
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