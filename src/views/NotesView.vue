
<script setup>
import NotesDisplay from '@/components/Notes/NotesDisplay.vue'
import { useNotesStore } from '../store/storeNotes';
import AddNote from '../components/Notes/AddNote.vue';

const storeNotes = useNotesStore()
</script>

<template>
    <AddNote/>
    <NotesDisplay 
        v-for="note in storeNotes.notes"
        :note="note"
        :key="note.id"
    />
</template>

