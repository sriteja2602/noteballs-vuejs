<script setup>
import { useNotesStore } from '../store/storeNotes';

const storeNotes = useNotesStore()
const totalNotes = storeNotes.totalStats
const totalCharacters = storeNotes.totalCharactersCount
</script>
<template>
    <div class="container" style="padding-top: 10%;">
        <div class="card my-6 container">
        <table class="table is-fullwidth" style=" text-align: center;">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total Notes</td>
                    <td>{{totalNotes}}</td>
                </tr>
                <tr>
                    <td>Total Note Characters</td>
                    <td>{{totalCharacters}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<style scoped>

.card{
    margin-top: 10%; 
    width: 50%;
}
.table th:not([align]){
    text-align: center;
}
</style>