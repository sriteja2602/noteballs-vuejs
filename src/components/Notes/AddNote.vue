<script setup>
import { markRaw, onMounted, ref, watch } from "vue";
import { useNow, useDateFormat } from '@vueuse/core'
import {useNotesStore} from '../../store/storeNotes'
import {marked} from 'marked'
// import Quill from 'quill';
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.snow.css'; 

const storeNotes = useNotesStore()


const title = ref("");
const message = ref("");

watch(message, (newValue) => {
  if(newValue.length > 100){
    alert("Max 100 characters allowed")
  }
})

const vFocus = {
  mounted: (el) => el.focus()
}


// onMounted(() => {
//   var toolbarOptions = ['bold', 'italic', 'underline', 'strike'];

//   var quill = new Quill('#toolbar', {
//     theme: 'snow',
//     toolbar: toolbarOptions,
//     placeholder: "Message"
//   });
//   quill.on('text-change', () => {
//     message.value = quill.getText()
//   })

// })


const addNote = () => {
  const formatted = useDateFormat(useNow(), 'DD-MM-YYYY (ddd)', { locales: 'en-IN' })
  // console.log(message);
  const messageHtml = marked.parse(message.value)
  storeNotes.addNote(title.value, messageHtml, formatted)
    title.value = ''
    message.value = ''
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
            <textarea v-model="message" class="textarea" placeholder="Note Description (Markdown enabled)"></textarea>
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

#toolbar{
  height: 130px;
}
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