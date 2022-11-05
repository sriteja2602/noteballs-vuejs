<script setup>
import NotesDisplay from "@/components/Notes/NotesDisplay.vue";
import { useNotesStore } from "../store/storeNotes";
import AddNote from "../components/Notes/AddNote.vue";
// import client from "@/pocketBase";

const storeNotes = useNotesStore();

// const records = await client.records.getFullList(
//   "notes",
//   200 /* batch size */,
//   {
//     sort: "-created",
//   }
// );
// console.log(records);
// console.log(storeNotes.notes);

// records.forEach(element => {
//     console.log(typeof(element.message));
// });
</script>

<template>
    <AddNote/>
    <NotesDisplay 
        v-for="note in storeNotes.notes"
        :note="note"
        :key="note.id"
    />
</template>
