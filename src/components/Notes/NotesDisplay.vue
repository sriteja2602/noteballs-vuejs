<script setup>
import { useNotesStore } from '../../store/storeNotes';
import { onMounted } from 'vue';

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const storeNotes = useNotesStore()

</script>

<template>
  <div class="card notesView mx-auto my-6">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://picsum.photos/96/96"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 mb-0">{{ note.title }}</p>
          <time class="subtitle is-6">{{ note.date }}</time>
        </div>
      </div>

      <div class="content" id="content">
        <!-- {{note.message}} -->
        <div v-html="note.message"></div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item">Delete</a>
      <RouterLink :to="`/notes/edit/${note.id}`" class="card-footer-item">Edit</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.notesView {
  width: 70%;
}
@media only screen and (max-width: 600px) {
  .notesView {
    width: 90%;
  }
}
</style>
