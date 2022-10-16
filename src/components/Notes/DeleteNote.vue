<script setup>

const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })
  
const emit = defineEmits(['deleteClicked'])

const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id)
  }
</script>

<template>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#"  @click.prevent="handleDeleteClicked" class="card-footer-item">Delete</a>
  </footer>
</template>
